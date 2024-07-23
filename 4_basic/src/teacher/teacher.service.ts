import { Injectable } from '@nestjs/common';
import { TeacherRepository } from './teacher.repository';
import { ITeacher } from 'src/typing';

@Injectable()
export class TeacherService {
  constructor (
    private readonly teacherRepository: TeacherRepository
  ) {}

  addTeacher (teacherInfo: ITeacher): number {
    try {
      const teacherId = this.teacherRepository.addTeacher(teacherInfo);

      return teacherId;
    } catch (e) {
      console.log(e);
      
    }
  }
}
