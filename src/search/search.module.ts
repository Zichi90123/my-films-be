import { Module } from '@nestjs/common';
import { SearchController } from './search.controller';
import { SearchService } from './search.service';
import { TmdbHttpModule } from '@lib/my-films-lib/tmdb-http';

@Module({
  imports: [TmdbHttpModule],
  controllers: [SearchController],
  providers: [SearchService],
})
export class SearchModule {}
