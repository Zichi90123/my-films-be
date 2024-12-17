import { Controller, Get, Query } from '@nestjs/common';
import { SearchService } from './search.service';
import { Observable } from 'rxjs';
import { List, SearchResult } from '@lib/my-films-lib';

@Controller('search')
export class SearchController {
  constructor(private searchService: SearchService) {}

  @Get()
  async search(
    @Query()
    query: {
      language: string;
      queryString: string;
      page: number;
    },
  ): Promise<Observable<List<SearchResult>>> {
    const { language, queryString, page } = query;
    return this.searchService.search(language, queryString, page);
  }
}
