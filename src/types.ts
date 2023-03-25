export type Initial = {
  trending: Trending[],
  nowPlaying: Trending[],
  topRated: Trending[],
  popular: Trending[],
  movieSelected: Trending,
}

export type Trending = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  title: string;
  video: false;
  vote_average: number;
  vote_count: number;
  popularity: number;
};