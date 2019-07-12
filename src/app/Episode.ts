export class Episode {
  id: number;
  air_date: string;
  episode_number: string;
  name: string;
  overview: string;
  season_number: number;

  constructor(episodeInfo: any) {
    if (episodeInfo) {
      this.id = episodeInfo.id;
      this.air_date = episodeInfo.air_date;
      this.episode_number = episodeInfo.episode_number;
      this.name = episodeInfo.name;
      this.overview = episodeInfo.overview;
      this.season_number = episodeInfo.season_number;
    }
  }
}
