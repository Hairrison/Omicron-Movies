
export interface ITvListResult {
    poster_path: string | null;
    popularity: number;
    id: number; // integer
    backdrop_path: string | null;
    vote_average: number;
    overview: string;
    first_air_date: string;
    origin_country: string[];
    genre_ids: number[]; // integer[]
    original_language: string;
    vote_count: number; // integer
    name: string;
    original_name: string;
}
