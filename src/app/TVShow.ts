export class TVShow {
  id: number;
  name: string;
  original_name: string;
  overview: string;
  original_language: string;
  first_air_date: string;
  backdrop_path: string;

  constructor(tvShowInfo: any) {
    if (tvShowInfo) {
      this.id = tvShowInfo.id;
      this.name = tvShowInfo.name;
      this.original_name = tvShowInfo.original_name;
      this.overview = tvShowInfo.overview;
      this.original_language = tvShowInfo.original_language;
      this.first_air_date = tvShowInfo.first_air_date;
      this.backdrop_path = tvShowInfo.backdrop_path;
    }
  }
}
