import { IsEmail, IsNotEmpty } from 'class-validator';

export class RequestResumeDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;
}