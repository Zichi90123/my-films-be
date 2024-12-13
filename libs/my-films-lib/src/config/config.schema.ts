import * as Joi from 'joi';

export const configValidationSchema = Joi.object({
  PORT: Joi.number().default(3000),
  NODE_ENV: Joi.string()
    .valid('development', 'production', 'test')
    .default('development'),
  JWT_SECRET: Joi.string().required(),
  MONGO_URL: Joi.string().required(),
  TMDB_API_KEY: Joi.string().required(),
  TMDB_API_URL: Joi.string().required(),

});
