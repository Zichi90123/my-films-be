import { Controller, Get, Query } from '@nestjs/common';
import { GenresService } from './genres.service';
import { Observable } from 'rxjs';
import { Genre } from '@lib/my-films-lib/resources/genre.interface';

@Controller('genres')
export class GenresController {
  constructor(private genreService: GenresService) {}

  @Get('/tv')
  async findTvGenres(
    @Query()
    query: {
      language: string;
    },
  ): Promise<Observable<Genre[]>> {
    const { language } = query;
    return this.genreService.findTvGenres(language);
  }

  @Get('/movie')
  async findMovieGenres(
    @Query()
    query: {
      language: string;
    },
  ): Promise<Observable<Genre[]>> {
    const { language } = query;
    return this.genreService.findMovieGenres(language);
  }
}
