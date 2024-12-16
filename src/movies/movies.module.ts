import { Module } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { TmdbHttpModule } from '@lib/my-films-lib/tmdb-http';
import { MoviesController } from './movies.controller';

@Module({
  imports: [TmdbHttpModule],
  controllers: [MoviesController],
  providers: [MoviesService],
})
export class MoviesModule {}
