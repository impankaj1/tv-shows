export interface Shows {
  id: number;
  url: string;
  name: string;
  genres: string[];
  schedule: Schedule;
  rating: Rating;
  image: {
    medium: string;
    original: string;
  };
  summary: string;
}

export interface Rating {
  average: number;
}

export interface Schedule {
  time: string;
  days: string[];
}
