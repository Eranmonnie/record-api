import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import { AuthMiddleware } from './middleware/authMiddleware';
import * as dotenv from 'dotenv';
import * as cookieParser from 'cookie-parser';
// const auth = new AuthMiddleware()

async function bootstrap() {
  dotenv.config();
  const app = await NestFactory.create(AppModule, { cors: true });
  app.use(cookieParser());
  await app.listen(3001);
}
bootstrap();
