import { TmdbHttpModule } from '@lib/my-films-lib/tmdb-http';
import { Module } from '@nestjs/common';
import { TvSeriesController } from './tv-series.controller';
import { TvSeriesService } from './tv-series.service';

@Module({
  imports: [TmdbHttpModule],
  controllers: [TvSeriesController],
  providers: [TvSeriesService],
})
export class TvSeriesModule {}
