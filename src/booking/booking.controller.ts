import { Controller, Post } from '@nestjs/common';
import { BookingService } from './booking.service';

@Controller('booking')
export class BookingController {
  // dependency injection = ioc = inversion of control
  constructor(private readonly bookingService: BookingService) {}

  @Post('/reserve')
  reserve() {
    return this.bookingService.reserve;
  }
}
