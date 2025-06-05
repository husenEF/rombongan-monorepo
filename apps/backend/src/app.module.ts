import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentsModule } from './students/students.module';
import { DriversModule } from './drivers/drivers.module';
import { DailyRecapsModule } from './daily-recaps/daily-recaps.module';
import { StudentAttendanceModule } from './student-attendance/student-attendance.module';

@Module({
  imports: [StudentsModule, DriversModule, DailyRecapsModule, StudentAttendanceModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
