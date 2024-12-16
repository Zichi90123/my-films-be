import {
  List,
  Movie,
  translateToMovieDetails,
  translateToMoviesList,
} from '@lib/my-films-lib';
import { MovieDetails } from '@lib/my-films-lib/resources/movie-detail.interface';
import { HttpService } from '@nestjs/axios';
import { HttpException, Injectable, Logger } from '@nestjs/common';
import { AxiosError } from 'axios';
import { catchError, map, Observable } from 'rxjs';

@Injectable()
export class MoviesService {
  private readonly logger = new Logger(MoviesService.name);

  constructor(private readonly httpService: HttpService) {}

  async findTopRated(
    language: string,
    page: number,
    region: string,
  ): Promise<Observable<any>> {
    return this.httpService
      .get(`movie/top_rated?language=${language}&page=${page}&region=${region}`)
      .pipe(
        catchError((error: AxiosError) => {
          this.logger.error(error.response.data);
          throw new HttpException(
            (error.response.data as any)?.status_message ??
              error.response.statusText,
            error.status,
          );
        }),
        map(({ data }) => translateToMoviesList(data)),
      );
  }

  async findPopular(
    language: string,
    page: number,
    region: string,
  ): Promise<Observable<any>> {
    return this.httpService
      .get(`movie/popular?language=${language}&page=${page}&region=${region}`)
      .pipe(
        catchError((error: AxiosError) => {
          this.logger.error(error.response.data);
          throw new HttpException(
            (error.response.data as any)?.status_message ??
              error.response.statusText,
            error.status,
          );
        }),
        map(({ data }) => translateToMoviesList(data)),
      );
  }

  async findUpcoming(
    language: string,
    page: number,
    region: string,
  ): Promise<Observable<any>> {
    return this.httpService
      .get(`movie/upcoming?language=${language}&page=${page}&region=${region}`)
      .pipe(
        catchError((error: AxiosError) => {
          this.logger.error(error.response.data);
          throw new HttpException(
            (error.response.data as any)?.status_message ??
              error.response.statusText,
            error.status,
          );
        }),
        map(({ data }) => translateToMoviesList(data)),
      );
  }

  async findTrending(
    language: string,
    page: number,
    time_window: string = 'day',
    region: string,
  ): Promise<Observable<List<Movie>>> {
    return this.httpService
      .get(
        `/trending/movie/${time_window}?language=${language}&page=${page}&region=${region}`,
      )
      .pipe(
        catchError((error: AxiosError) => {
          this.logger.error(error.response.data);
          throw new HttpException(
            (error.response.data as any)?.status_message ??
              error.response.statusText,
            error.status,
          );
        }),
        map(({ data }) => translateToMoviesList(data)),
      );
  }

  async getMovieDetails(
    id: number,
    language: string,
  ): Promise<Observable<MovieDetails>> {
    return this.httpService.get(`/movie/${id}?language=${language}`).pipe(
      catchError((error: AxiosError) => {
        this.logger.error(error.response.data);
        throw new HttpException(
          (error.response.data as any)?.status_message ??
            error.response.statusText,
          error.status,
        );
      }),
      map(({ data }) => translateToMovieDetails(data)),
    );
  }
}
