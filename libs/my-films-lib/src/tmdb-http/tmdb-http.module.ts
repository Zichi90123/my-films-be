import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { EnvironmentVariables } from '../config';

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
  exports: [HttpModule],
})
export class TmdbHttpModule {}
