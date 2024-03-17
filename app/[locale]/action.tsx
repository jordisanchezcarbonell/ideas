'use server';

const MAX_LIMIT = 8;
let limit = 1;
const options = {
  headers: {
    Authorization: `Bearer ${process.env.API_TOKEN}`,
  },
};

export async function fetchAnime(page: number) {
  const response = await fetch(
    `https://shikimori.one/api/animes?page=${page}&limit=${MAX_LIMIT}&order=popularity`
  );

  const data = await response.json();

  return data;
}

export async function fetchStrapi(page: number, local: string) {
  if (page <= limit) {
    const response = await fetch(
      `https://poc-strapi-nextjs.onrender.com/api/contents?pagination[page]=${page}&locale=${local}`,
      options
    );

    const data = await response.json();
    limit = data.meta.pagination.pageCount;
    return data.data;
  }
  return [];
}

export async function fetchStrapiBySlug(slug: string) {
  console.log('1---', slug);
  const response = await fetch(
    `https://poc-strapi-nextjs.onrender.com/api/contents?filters[Slug][$eq]=${slug}&locale=es`,
    options
  );

  const data = await response.json();

  return data.data;
}

export async function fetchAllSlugs() {
  const response = await fetch(
    `https://poc-strapi-nextjs.onrender.com/api/contents?fields=Slug`,
    options
  );

  const data = await response.json();

  return data.data;
}
