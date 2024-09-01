import { Injectable } from '@nestjs/common';
import { Course } from './entities/course.entity';

@Injectable()
export class CoursesService {
  private courses: Course[] = [
    {
      id: 1,
      name: 'Fundamentos Nest',
      description: 'Curso de fundamentos de NestJS',
      tags: ['NodeJS', 'NestJS'],
    },
  ];

  findAll() {
    return this.courses;
  }

  findOne(id: string) {
    return this.courses.find((course) => course.id === +id);
  }

  create(createCourseDto: any) {
    return this.courses.push(createCourseDto);
  }

  update(id: string, updateCourseDto: any) {
    const index = this.courses.findIndex((course) => course.id === +id);
    this.courses[index] = updateCourseDto;
    return this.courses[index];
  }

  remove(id: string) {
    const index = this.courses.findIndex((course) => course.id === +id);

    if (index >= 0) {
      this.courses.splice(index, 1);
      return `Curso #${id} removido com sucesso`;
    }
  }
}
