import { Module } from '@nestjs/common';
import { TvSeriesController } from './tv-series.controller';
import { TvSeriesService } from './tv-series.service';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { EnvironmentVariables, LoggerModule } from '@lib/my-films-lib';

@Module({
  imports: [
    HttpModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (
        configService: ConfigService<EnvironmentVariables>,
      ) => ({
        baseURL: configService.get('TMDB_API_URL'),
        headers: {
          Authorization: `Bearer ${configService.get('TMDB_API_KEY')}`,
        },
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [TvSeriesController],
  providers: [TvSeriesService],
})
export class TvSeriesModule {}
