import * as Joi from 'joi';

export const validationSchema = Joi.object({
  NODE_ENV: Joi.string(),
  SERVER_PORT: Joi.number(),
  DB_HOST: Joi.string(),
  DB_PORT: Joi.number(),
  DB_USER: Joi.string(),
  DB_PASSWORD: Joi.string(),
  DB_DATABASE: Joi.string(),
});
