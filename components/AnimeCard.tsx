import Image from 'next/image';
import Link from 'next/link';

export interface AnimeProp {
  id: string;
  name: string;
  slug: string;
}

interface Prop {
  anime: AnimeProp;
  index: number;
}

function AnimeCard({ anime }: Prop) {
  return (
    <Link
      className="max-w-sm rounded relative w-full hover:before:bg-redborder-red-500 hover:text-white hover:shadow-red-500 hover:before:left-0 hover:before:w-full transform transition duration-500 ease-in-out hover:scale-105"
      href={`/blog/${anime.slug}`}
    >
      <div className="relative w-full h-[37vh] opacity-50">
        <div className="absolute inset-0 bg-black bg-opacity-50 filter grayscale"></div>
        <div className="absolute inset-0 flex justify-center items-center z-10">
          <p className="text-white"> {anime.name}</p>
        </div>
      </div>
    </Link>
  );
}

export default AnimeCard;
