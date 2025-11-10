// packages/backend/src/contact/contact.service.ts
import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateContactDto } from './dto/create-contact.dto';
import { RequestResumeDto } from './dto/request-resume.dto';

@Injectable()
export class ContactService {
  constructor(
    @Inject('MAIL_SERVICE') private readonly mailClient: ClientProxy,
  ) {}

  async create(createContactDto: CreateContactDto) {
    console.log('Emitting contact_form_submitted message...');
    
    this.mailClient.emit('contact_form_submitted', createContactDto);
    
    return { message: 'Contact form submitted, processing...' };
  }

  async requestResume(requestResumeDto: RequestResumeDto) {
    console.log('Emitting resume_request_submitted message...');
    
    this.mailClient.emit('resume_requested', requestResumeDto);
    
    return { message: 'Resume request submitted, processing...' };
  }
}