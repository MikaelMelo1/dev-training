import { IsString } from "class-validator";

export class CreateCourseDto {

  @IsString()
  readonly name: string;

  @IsString()
  readonly description: string;

  @Is
  readonly tags: string[];
}
