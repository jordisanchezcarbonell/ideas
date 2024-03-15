import { fetchAnime } from './action';

import LoadMore from '../components/LoadMore';
import AnimeCard, { AnimeProp } from '@/components/AnimeCard';
import { data } from './_data';
async function Home() {
  //const data = await fetchAnime(1);

  return (
    <main className="sm:p-16 py-16 px-8 flex flex-col gap-10">
      <h2 className="text-3xl text-white font-bold">Explore Anime</h2>
      <div className="relative w-64 h-48 rounded-lg overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-50 filter grayscale"></div>
        <div className="absolute inset-0 flex justify-center items-center z-10">
          <p className="text-white">Texto centrado blanco</p>
        </div>
      </div>
      <div className="relative w-64 h-48 rounded-lg overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="absolute inset-0 flex justify-center items-center z-10">
          <p className="text-white">Texto centrado blanco</p>
        </div>
      </div>
      <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
        {data.map((item: AnimeProp, index: number) => (
          <AnimeCard key={item.id} anime={item} index={index} />
        ))}
      </section>
      <LoadMore />
    </main>
  );
}

export default Home;
