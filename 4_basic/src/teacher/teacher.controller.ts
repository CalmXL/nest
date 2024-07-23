import { Body, Controller, Post } from '@nestjs/common';
import { TeacherService } from './teacher.service';
import { ITeacher } from 'src/typing';

interface ISuccessResponse {
  code: number;
  msg: string;
  data: number;
}

interface IErrorResponse {
  code: number;
  msg: string;
}

@Controller('teacher')
export class TeacherController {
  constructor (
    private readonly teacherService: TeacherService
  ) {}

  @Post('/add')
  addTeacher (@Body() teacherInfo: ITeacher): ISuccessResponse | IErrorResponse {
    const id =  this.teacherService.addTeacher(teacherInfo);

    if (!id) {
      return {
        code: 1,
        msg: 'Failed to add teacher'
      }
    }

    return {
      code: 0,
      msg: 'ok',
      data: id
    }
  }
}
