import { TvSeriesList } from '@lib/my-films-lib';
import { translateToTvSeriesList } from '@lib/my-films-lib/utils/translate-to-tv-series-list';
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
  ): Promise<Observable<TvSeriesList>> {
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
  ): Promise<Observable<TvSeriesList>> {
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
}
