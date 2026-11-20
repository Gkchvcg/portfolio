import { NextResponse } from 'next/server';

export interface SubstackArticle {
  title: string;
  link: string;
  description: string;
  pubDate: string;
  thumbnail: string;
  guid?: string;
}

// Fallback verified articles from Maroof Husain's Substack
const FALLBACK_ARTICLES: SubstackArticle[] = [
  {
    title: 'Guilty Until Proven Irrelevant: Inside India’s Five-Year Jail Trap.',
    link: 'https://maroofhusain.substack.com/p/guilty-until-proven-irrelevant-inside',
    description: 'How the state uses UAPA to lock away its critics without ever having to prove a crime.',
    pubDate: 'Wed, 11 Nov 2026 19:31:39 GMT',
    thumbnail:
      'https://substackcdn.com/image/fetch/$s_!E9Ix!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fde11d7f3-ad84-4e2b-888e-c9f1ace8763e_1199x1312.png',
  },
  {
    title: 'Why Rape Is Never About Lust',
    link: 'https://maroofhusain.substack.com/p/why-rape-is-never-about-lust',
    description:
      'The psychological research, experiments, and uncomfortable truths behind why sexual violence happens.',
    pubDate: 'Tue, 10 Nov 2026 11:15:12 GMT',
    thumbnail:
      'https://substackcdn.com/image/fetch/$s_!1syz!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F39549870-5937-41bb-82f8-b2da5e5c3251_2752x1536.png',
  },
];

export async function GET() {
  try {
    const res = await fetch('https://maroofhusain.substack.com/feed', {
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        Accept: 'application/rss+xml, application/xml, text/xml, */*',
      },
      next: { revalidate: 3600 }, // Cache on server for 1 hour
    });

    if (!res.ok) {
      console.warn(`Substack RSS fetch failed with status ${res.status}. Using fallback articles.`);
      return NextResponse.json({
        success: true,
        source: 'fallback',
        articles: FALLBACK_ARTICLES,
      });
    }

    const xml = await res.text();
    const articles: SubstackArticle[] = [];
    const itemMatches = xml.match(/<item>([\s\S]*?)<\/item>/g) || [];

    for (const itemXml of itemMatches) {
      const titleMatch =
        itemXml.match(/<title><!\[CDATA\[(.*?)\]\]><\/title>/) ||
        itemXml.match(/<title>(.*?)<\/title>/);
      const linkMatch = itemXml.match(/<link>(.*?)<\/link>/);
      const descMatch =
        itemXml.match(/<description><!\[CDATA\[(.*?)\]\]><\/description>/) ||
        itemXml.match(/<description>(.*?)<\/description>/);
      const dateMatch = itemXml.match(/<pubDate>(.*?)<\/pubDate>/);
      const enclosureMatch = itemXml.match(/<enclosure[^>]+url=["']([^"']+)["']/);
      const contentImgMatch = itemXml.match(/<img[^>]+src=["']([^"']+)["']/);

      const title = titleMatch ? titleMatch[1].trim() : '';
      const link = linkMatch ? linkMatch[1].trim() : '';
      let description = descMatch ? descMatch[1].trim() : '';
      // Strip any raw HTML tags from description if present
      description = description.replace(/<[^>]+>/g, '').trim();
      const pubDate = dateMatch ? dateMatch[1].trim() : '';
      const thumbnail = enclosureMatch
        ? enclosureMatch[1].trim()
        : contentImgMatch
          ? contentImgMatch[1].trim()
          : '';

      if (title && link) {
        articles.push({
          title,
          link,
          description,
          pubDate,
          thumbnail,
        });
      }
    }

    if (articles.length === 0) {
      return NextResponse.json({
        success: true,
        source: 'fallback',
        articles: FALLBACK_ARTICLES,
      });
    }

    return NextResponse.json(
      {
        success: true,
        source: 'live',
        articles,
      },
      {
        headers: {
          'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
        },
      }
    );
  } catch (error) {
    console.error('Error in /api/substack-feed route:', error);
    return NextResponse.json({
      success: true,
      source: 'fallback',
      articles: FALLBACK_ARTICLES,
    });
  }
}
