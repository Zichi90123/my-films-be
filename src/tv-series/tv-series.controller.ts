import { List, TvSerie } from '@lib/my-films-lib';
import { Controller, Get, Query } from '@nestjs/common';
import { Observable } from 'rxjs';
import { TvSeriesService } from './tv-series.service';

@Controller('tv-series')
export class TvSeriesController {
  constructor(private tvSeriesService: TvSeriesService) {}

  @Get('/top-rated')
  async findTopRated(
    @Query() query: { language: string; page: number },
  ): Promise<Observable<List<TvSerie>>> {
    const { language, page } = query;
    return this.tvSeriesService.findTopRated(language, page);
  }

  @Get('/popular')
  async findPopular(
    @Query() query: { language: string; page: number },
  ): Promise<Observable<List<TvSerie>>> {
    const { language, page } = query;
    return this.tvSeriesService.findPopular(language, page);
  }

  @Get('/trending')
  async findTrending(
    @Query()
    query: {
      language: string;
      page: number;
      time_window?: 'day' | 'week';
    },
  ): Promise<Observable<List<TvSerie>>> {
    const { language, page, time_window } = query;
    return this.tvSeriesService.findTrending(language, page, time_window);
  }
}
