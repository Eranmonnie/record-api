import { Controller, Get, Req,  UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from './guard/authGuard';

// import { token } from './dto/user.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  @UseGuards(AuthGuard)
  getHello(@Req() req) {
     return this.appService.getHello(req.user);
  }
}
