import { Controller, Get, Param, Query } from '@nestjs/common';
import { TvSeriesService } from './tv-series.service';
import { TvSeriesList } from '@lib/my-films-lib';
import { catchError, map, Observable } from 'rxjs';

@Controller('tv-series')
export class TvSeriesController {
  constructor(private tvSeriesService: TvSeriesService) {}

  @Get('/top-rated')
  async findTopRated(
    @Query() query: { language: string; page: number },
  ): Promise<Observable<TvSeriesList>> {
    const { language, page } = query;
    return this.tvSeriesService.findTopRated(language, page);
  }

  @Get('/popular')
  async findPopular(
    @Query() query: { language: string; page: number },
  ): Promise<Observable<TvSeriesList>> {
    const { language, page } = query;
    return this.tvSeriesService.findPopular(language, page);
  }
}
