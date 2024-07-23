import { Controller } from '@nestjs/common';
import { TeacherService } from 'src/teacher/teacher.service';
import { StudentService } from './student.service';

@Controller('student')
export class StudentController {
  constructor(
    private readonly studentService: StudentService
  ) {
  }
}
