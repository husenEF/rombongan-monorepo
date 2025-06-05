import { Module } from '@nestjs/common';
import { StudentAttendanceController } from './student-attendance.controller';
import { StudentAttendanceService } from './student-attendance.service';

@Module({
  controllers: [StudentAttendanceController],
  providers: [StudentAttendanceService]
})
export class StudentAttendanceModule {}
