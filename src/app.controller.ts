import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  Req,
  Res,
} from '@nestjs/common';
import { AppService } from './app.service';
import { Request, Response } from 'express';

@Controller() // decorator

//Single-responsibility principle =  مبدأ المهمة الواحدة في البرمجة الكائنية
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/hello')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/zezo')
  getzezo(): string {
    return this.appService.getzezo();
  }

  @Post('/hello')
  //Query decorator
  postHello(@Query('name') userName: string) {
    return userName;
    // return query.name;
    return this.appService.printHelloToUser();
  }

  // Path parameter
  @Post('/pathParam/:name/:age/:nationality')
  pathParam(@Param('name') params: string) {
    return params;
  }

  // Body parameter
  @Post('/bodyParam')
  bodyParam(@Body('name') name: string) {
    return this.appService.bodyParam(name);
  }

  //Req and Res
  @Post('/reqAndRes')
  reqAndRes(@Body('name') @Req() req, @Res() res) {
    // res.send(this.appService.bodyParam(name));
    res.send(req.body);
  }

  //Request and Response from Express without decorator
  @Post('/reqAndResExpress')
  reqAndResExpress(@Body('name') req: Request, res: Response) {
    res.send(req.body);
  }
}
