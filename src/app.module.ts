import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma.servisces';
// import { CorsMiddleware } from './middleware/coresMiddleware';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})

export class AppModule {}