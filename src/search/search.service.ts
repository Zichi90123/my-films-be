import { List, SearchResult, translateToSearchResultList } from '@lib/my-films-lib';
import { HttpService } from '@nestjs/axios';
import { HttpException, Injectable, Logger } from '@nestjs/common';
import { AxiosError } from 'axios';
import { catchError, map, Observable } from 'rxjs';

@Injectable()
export class SearchService {
  private readonly logger = new Logger(SearchService.name);

  constructor(private readonly httpService: HttpService) {}

  async search(
    language: string,
    query: string,
    page: number,
  ): Promise<Observable<List<SearchResult>>> {
    return this.httpService
      .get(
        `search/multi?query=${encodeURIComponent(query)}&include_adult=false&language=${language}&page=${page}`,
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
        map(({ data }) => translateToSearchResultList(data)),
      );
  }
}
