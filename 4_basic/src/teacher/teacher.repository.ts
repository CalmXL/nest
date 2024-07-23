import { Injectable } from "@nestjs/common";
import { readFileSync, writeFileSync } from "fs";
import { ITeacher } from "src/typing";

@Injectable()
export class TeacherRepository {

  addTeacher(teacherInfo: ITeacher): number {
    try {
      const data = JSON.parse(readFileSync('src/data/teacher.json', 'utf8'));
      teacherInfo.id = new Date().getTime();
      data.unshift(teacherInfo);
      try {
        writeFileSync('src/data/teacher.json', JSON.stringify(data), 'utf8');
        return teacherInfo.id;
      } catch (e) {
        console.log(e);
        return 0;
      }
    } catch (e) {
      console.log(e);
      return 0;
    }

  }
}