import { TmdbHttpModule } from '@lib/my-films-lib/tmdb-http';
import { Module } from '@nestjs/common';
import { GenresController } from './genres.controller';
import { GenresService } from './genres.service';

@Module({
  imports: [TmdbHttpModule],
  controllers: [GenresController],
  providers: [GenresService],
})
export class GenresModule {}
