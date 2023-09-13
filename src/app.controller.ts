import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { GoogleOauthGuard } from './guard/google.oauth.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @UseGuards(GoogleOauthGuard)
  getHello(): string {
    return this.appService.getHello();
  }

  @UseGuards(GoogleOauthGuard)
  @Get('/auth/google')
  getProfile(@Req() req: any) {
    console.log(req.user);
  }
}
