export type Initial = {
  trending: Trending[],
  nowPlaying: Trending[],
  topRated: Trending[],
  popular: Trending[],
  movieSelected: Trending,
  categories: TypeCategories[],
  actors: TypeActors[]
  similarMovies: Trending[],
  video: TypeVideo,
  categorySelected: Trending[],
  section: Trending[],
  categoryId: number,
  nameSection: string,
  reviews: Review[],
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
  video: boolean;
  vote_average: number;
  vote_count: number;
  popularity: number;
};

export type TypeCategories = {
  id: number,
  name: string
}

export type TypeActors = {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string,
  name: string,
  original_name: string,
  popularity: number;
  profile_path: string,
  cast_id: number;
  character: string,
  credit_id: string,
  order: number;
};

export type TypeVideo = {
  iso_639_1: string,
  iso_3166_1: string,
  name: string,
  key: string,
  site: string,
  size: number;
  type: string,
  official: boolean;
  published_at: string,
  id: string,
};

export type Review = {
  author: string;
  author_details: {
    name: string,
    username: string,
    avatar_path: string,
    rating: any;
  };
  content: string,
  created_at: string,
  id: string,
  updated_at: string,
  url: string,
};