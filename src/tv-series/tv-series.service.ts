import { List, translateToTvSeriesList, TvSerie } from '@lib/my-films-lib';
import { HttpService } from '@nestjs/axios';
import { HttpException, Injectable, Logger } from '@nestjs/common';
import { AxiosError } from 'axios';
import { catchError, map, Observable } from 'rxjs';

@Injectable()
export class TvSeriesService {
  private readonly logger = new Logger(TvSeriesService.name);

  constructor(private readonly httpService: HttpService) {}

  async findTopRated(
    language: string,
    page: number,
  ): Promise<Observable<List<TvSerie>>> {
    return this.httpService
      .get(`tv/top_rated?language=${language}&page=${page}`)
      .pipe(
        catchError((error: AxiosError) => {
          this.logger.error(error.response.data);
          throw new HttpException(
            (error.response.data as any)?.status_message ??
              error.response.statusText,
            error.status,
          );
        }),
        map(({ data }) => translateToTvSeriesList(data)),
      );
  }

  async findPopular(
    language: string,
    page: number,
  ): Promise<Observable<List<TvSerie>>> {
    return this.httpService
      .get(`tv/popular?language=${language}&page=${page}`)
      .pipe(
        catchError((error: AxiosError) => {
          this.logger.error(error.response.data);
          throw new HttpException(
            (error.response.data as any)?.status_message ??
              error.response.statusText,
            error.status,
          );
        }),
        map(({ data }) => translateToTvSeriesList(data)),
      );
  }

  async findTrending(
    language: string,
    page: number,
    time_window: string = 'day',
  ): Promise<Observable<List<TvSerie>>> {
    return this.httpService
      .get(`/trending/tv/${time_window}?language=${language}&page=${page}`)
      .pipe(
        catchError((error: AxiosError) => {
          this.logger.error(error.response.data);
          throw new HttpException(
            (error.response.data as any)?.status_message ??
              error.response.statusText,
            error.status,
          );
        }),
        map(({ data }) => translateToTvSeriesList(data)),
      );
  }
}
