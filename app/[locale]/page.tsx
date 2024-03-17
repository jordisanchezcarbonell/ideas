import { fetchAnime } from './action';

import LoadMore from '../../components/LoadMore';
import AnimeCard, { AnimeProp } from '@/components/AnimeCard';
import { data } from './_data';
import { getTranslations } from 'next-intl/server';

async function Home() {
  //const data = await fetchAnime(1);
  const t = await getTranslations('Index');
  return (
    <main className="sm:p-16 py-16 px-8 flex flex-col gap-10">
      <h2 className="text-3xl text-white font-bold">{t('title')}</h2>

      <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
        {data.map((item: AnimeProp, index: number) => (
          <AnimeCard key={item.slug} anime={item} index={index} />
        ))}
      </section>
      <LoadMore />
    </main>
  );
}

export default Home;
