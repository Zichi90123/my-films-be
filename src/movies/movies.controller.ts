import { Controller, Get, Param, Query } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { Observable } from 'rxjs';
import {
  Credits,
  List,
  Movie,
  MovieImages,
  WatchProviders,
} from '@lib/my-films-lib';
import { MovieDetails } from '@lib/my-films-lib/resources/movie-detail.interface';

@Controller('movies')
export class MoviesController {
  constructor(private moviesService: MoviesService) {}

  @Get('/top-rated')
  async findTopRated(
    @Query() query: { language: string; page: number; region: string },
  ): Promise<Observable<List<Movie>>> {
    const { language, page, region } = query;
    return this.moviesService.findTopRated(language, page, region);
  }

  @Get('/popular')
  async findPopular(
    @Query() query: { language: string; page: number; region: string },
  ): Promise<Observable<List<Movie>>> {
    const { language, page, region } = query;
    return this.moviesService.findPopular(language, page, region);
  }

  @Get('/trending')
  async findTrending(
    @Query()
    query: {
      language: string;
      page: number;
      time_window?: 'day' | 'week';
      region: string;
    },
  ): Promise<Observable<List<Movie>>> {
    const { language, page, time_window, region } = query;
    return this.moviesService.findTrending(language, page, time_window, region);
  }

  @Get('/upcoming')
  async findUpcoming(
    @Query() query: { language: string; page: number; region: string },
  ): Promise<Observable<List<Movie>>> {
    const { language, page, region } = query;
    return this.moviesService.findUpcoming(language, page, region);
  }

  @Get('/:id')
  async getMovieDetail(
    @Query() query: { language: string },
    @Param('id') id: number,
  ): Promise<Observable<MovieDetails>> {
    const { language } = query;
    return this.moviesService.getMovieDetails(id, language);
  }

  @Get('/:id/similar')
  async getSimilarMovies(
    @Query() query: { language: string; page: number },
    @Param('id') id: number,
  ): Promise<Observable<List<Movie>>> {
    const { language, page } = query;
    return this.moviesService.findSimilar(id, language, page);
  }

  @Get('/:id/watch/providers')
  async getWatchProviders(
    @Query() query: { region: string },
    @Param('id') id: number,
  ): Promise<Observable<WatchProviders>> {
    const { region } = query;
    return this.moviesService.findWatchProviders(id, region);
  }

  @Get('/:id/credits')
  async getCredits(
    @Query() query: { language: string },
    @Param('id') id: number,
  ): Promise<Observable<Credits>> {
    const { language } = query;
    return this.moviesService.findCredits(id, language);
  }

  @Get('/:id/images')
  async getImages(
    @Query() query: { language: string },
    @Param('id') id: number,
  ): Promise<Observable<MovieImages>> {
    const { language } = query;
    return this.moviesService.findImages(id, language);
  }
}
