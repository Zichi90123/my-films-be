import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { TvSeriesModule } from './tv-series/tv-series.module';
import {
  configValidationSchema,
  EnvironmentVariables,
  LoggerModule,
} from '@lib/my-films-lib';
import { GenresModule } from './genres/genres.module';
import { MoviesController } from './movies/movies.controller';
import { MoviesModule } from './movies/movies.module';
import { SearchModule } from './search/search.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: configValidationSchema,
    }),
    AuthModule,
    UsersModule,
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (
        configService: ConfigService<EnvironmentVariables>,
      ) => ({
        uri: configService.get('MONGO_URL'),
      }),
    }),
    TvSeriesModule,
    LoggerModule,
    GenresModule,
    MoviesModule,
    SearchModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
