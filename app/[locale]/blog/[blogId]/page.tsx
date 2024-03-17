import { Metadata } from 'next';
import Link from 'next/link';
import { fetchAllSlugsE, fetchStrapiBySlug } from '../../action';
import { locales } from '@/config';
import { Suspense } from 'react';
import DettaleBlog from '@/components/DetalleBlog';

type BlogProps = {
  params: {
    blogId: string;
    locale: string;
  };
};

export async function generateMetadata({
  params,
}: BlogProps): Promise<Metadata> {
  // read route params
  const data = await fetchStrapiBySlug(params.blogId, params.locale);
  const attributesDetalle = data[0].attributes;
  if (!attributesDetalle) {
    return {
      title: 'not found',
    };
  }
  return {
    title: attributesDetalle.Title,
    description: attributesDetalle.Title,
    generator: 'Next.js',
    applicationName: 'Next.js',
    referrer: 'origin-when-cross-origin',
    // keywords: ['Next.js', 'React', 'JavaScript'],
    authors: [{ name: 'JS' }, { name: 'JS' }],
    creator: 'JS',
    publisher: 'JS',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL('https://acme.com'),
    alternates: {
      canonical: '/',
      languages: {
        'en-US': '/en-US',
        'de-DE': '/de-DE',
      },
    },

    openGraph: {
      title: 'JS',
      description: 'JS',
      url: 'https://nextjs.org',
      siteName: 'JS',
      images: [
        {
          url: 'https://nextjs.org/og.png', // Must be an absolute URL
          width: 800,
          height: 600,
        },
        {
          url: 'https://nextjs.org/og-alt.png', // Must be an absolute URL
          width: 1800,
          height: 1600,
          alt: 'My custom alt',
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
  };
}

export async function generateStaticParams() {
  const promises = locales.map(async (locale) => {
    const data = await fetchAllSlugsE(locale);
    console;
    return data.map((row: { attributes: { Slug: any } }) => ({
      blogId: row.attributes.Slug,
      locale: locale,
    }));
  });
  const results: any = await Promise.all(promises);
  // Flatten the array of arrays into a single array
  return results.flat();
}

export default async function Blog({ params }: BlogProps) {
  const data = await fetchStrapiBySlug(params.blogId, params.locale);
  return (
    <Suspense fallback={<h2>Loading...</h2>}>
      <DettaleBlog promise={data} />
    </Suspense>
  );
}
