import { Metadata } from 'next';
import { data } from '../../_data';
import Link from 'next/link';

type BlogProps = {
  params: {
    blogId: string;
  };
};

export async function generateMetadata({
  params,
}: BlogProps): Promise<Metadata> {
  // read route params

  const response = data.find((item) => item.slug === params.blogId);
  if (!response) {
    return {
      title: 'not found',
    };
  }
  return {
    title: response.title,
    description: response.title,
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
  const response = data.map((item) => {
    id: item.slug;
  });

  return response;
}
export default async function Blog({ params }: BlogProps) {
  console.log('1----', params);
  console.log('2----', params.blogId);
  const response = data.find((item) => item.slug === params.blogId);
  console.log('3----', response);

  return (
    <div className="p-4">
      <button
        type="button"
        className="w-full flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-700 mb-10"
      >
        <svg
          className="w-5 h-5 rtl:rotate-180"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
          />
        </svg>
        <Link className="" href="/">
          Go back
        </Link>
      </button>

      {response && response.caption && (
        <div
          className="whitespace-pre-line"
          dangerouslySetInnerHTML={{ __html: response.caption }}
        />
      )}
    </div>
  );
}
