// {
//     "aspect_ratio": 1.778,
//     "height": 720,
//     "iso_639_1": "en",
//     "file_path": "/z9DFGaWj4G4kZUWLZ6ESs1NP1Fp.jpg",
//     "vote_average": 5.388,
//     "vote_count": 4,
//     "width": 1280
// },

export interface Image {
  aspectRatio: number;
  height: number;
  iso639: string;
  filePath: string;
  voteAverage: number;
  voteCount: number;
  width: number;
}
