import { Module } from '@nestjs/common';
import { DailyRecapsController } from './daily-recaps.controller';
import { DailyRecapsService } from './daily-recaps.service';

@Module({
  controllers: [DailyRecapsController],
  providers: [DailyRecapsService],
})
export class DailyRecapsModule {}
