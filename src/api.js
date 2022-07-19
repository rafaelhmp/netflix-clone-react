const API_KEY = '829fdb9dab4f816c11d943ef23d38d7a';
const API_BASE = 'https://api.themoviedb.org/3';

// Função para buscar uma url e retornar o resultado em  json
async function basicFetch(endpoint) {
  const req = await fetch(`${API_BASE}${endpoint}`);
  const json = await req.json();
  return json;
}

export async function getHomeList() {
  return [
    {
      slug: 'originals',
      title: 'Originais da Netflix',
      items: await basicFetch(
        `/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`,
      ),
    },
    {
      slug: 'trending',
      title: 'Recomendados',
      items: await basicFetch(
        `/trending/all/week?language=pt-BR&api_key=${API_KEY}`,
      ),
    },
    {
      slug: 'toprated',
      title: 'Em alta',
      items: await basicFetch(
        `/movie/top_rated?language=pt-BR&api_key=${API_KEY}`,
      ),
    },
    {
      slug: 'action',
      title: 'Ação',
      items: await basicFetch(
        `/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`,
      ),
    },
    {
      slug: 'comedy',
      title: 'Comédia',
      items: await basicFetch(
        `/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`,
      ),
    },
    {
      slug: 'horror',
      title: 'Terror',
      items: await basicFetch(
        `/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`,
      ),
    },
    {
      slug: 'romance',
      title: 'Romance',
      items: await basicFetch(
        `/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`,
      ),
    },
    {
      slug: 'documentary',
      title: 'Documentários',
      items: await basicFetch(
        `/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`,
      ),
    },
  ];
}
