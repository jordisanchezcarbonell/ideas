'use client';

import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';

import { fetchStrapi } from '../app/[locale]/action';
import AnimeCard, { AnimeProp } from './AnimeCard';

let page = 2;

function LoadMore({ locale }: { locale: string }) {
  const { ref, inView } = useInView();

  const [data, setData] = useState<AnimeProp[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);
  useEffect(() => {
    if (inView && hasMore) {
      setIsLoading(true);
      // Add a delay of 500 milliseconds
      const delay = 500;
      const timeoutId = setTimeout(() => {
        fetchStrapi(page, locale).then((res) => {
          if (res.length === 0) {
            setIsLoading(false);
            setHasMore(false);
            return;
          }
          setData([...data, ...res]);
          page++;
        });

        setIsLoading(false);
      }, delay);

      // Clear the timeout if the component is unmounted or inView becomes false
      return () => clearTimeout(timeoutId);
    }
  }, [inView, data, isLoading, locale, hasMore]);

  return (
    <>
      <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
        {data && data.length > 0 ? (
          data.map((item: any, index: number) => (
            <AnimeCard key={index} attributes={item.attributes} index={index} />
          ))
        ) : (
          <p>No data available</p>
        )}
      </section>
      <section className="flex justify-center items-center w-full">
        <div ref={ref}>
          {inView && isLoading && (
            <Image
              src="./spinner.svg"
              alt="spinner"
              width={56}
              height={56}
              className="object-contain"
            />
          )}
        </div>
      </section>
    </>
  );
}

export default LoadMore;
