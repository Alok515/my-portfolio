import { Controller, Post, Body } from '@nestjs/common';
import { ContactService } from './contact.service';
import { CreateContactDto } from './dto/create-contact.dto';
import { RequestResumeDto } from './dto/request-resume.dto';

@Controller('contact')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Post()
  create(@Body() createContactDto: CreateContactDto) {
    return this.contactService.create(createContactDto);
  }

  @Post('request-resume')
  requestResume(@Body() requestResumeDto: RequestResumeDto) {
    return this.contactService.requestResume(requestResumeDto);
  }
}