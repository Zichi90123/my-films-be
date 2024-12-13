import { Genre } from '@lib/my-films-lib/resources/genre.interface';
import { HttpService } from '@nestjs/axios';
import { HttpException, Injectable, Logger } from '@nestjs/common';
import { AxiosError } from 'axios';
import { catchError, map, Observable } from 'rxjs';

@Injectable()
export class GenresService {
  private readonly logger = new Logger(GenresService.name);

  constructor(private readonly httpService: HttpService) {}

  async findTvGenres(language: string): Promise<Observable<Genre[]>> {
    return this.httpService.get(`genre/tv/list?language=${language}`).pipe(
      catchError((error: AxiosError) => {
        this.logger.error(error.response.data);
        throw new HttpException(
          (error.response.data as any)?.status_message ??
            error.response.statusText,
          error.status,
        );
      }),
      map(({ data }) => 
        data.genres.map(
          (g: any): Genre => ({
            id: g?.id,
            name: g?.name,
          }),
        )
      ),
    );
  }
}
