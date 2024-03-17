import { fetchAnime, fetchStrapi } from './action';

import LoadMore from '../../components/LoadMore';
import AnimeCard, { AnimeProp } from '@/components/AnimeCard';
//import { data } from './_data';
import { getTranslations } from 'next-intl/server';

async function Home({ params: { locale } }: { params: { locale: string } }) {
  const data = await fetchStrapi(1, locale);
  const t = await getTranslations('Index');

  return (
    <main className="sm:p-16 py-16 px-8 flex flex-col gap-10">
      <h2 className="text-3xl text-white font-bold">{t('title')}</h2>

      <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
        {data && data.length > 0 ? (
          data.map((item: any, index: number) => (
            <AnimeCard key={index} attributes={item.attributes} index={index} />
          ))
        ) : (
          <p>No data available</p>
        )}
      </section>
      <LoadMore locale={locale} />
    </main>
  );
}

export default Home;
