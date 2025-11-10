// packages/backend/src/contact/contact.service.ts
import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateContactDto } from './dto/create-contact.dto';

@Injectable()
export class ContactService {
  constructor(
    @Inject('MAIL_SERVICE') private readonly mailClient: ClientProxy,
  ) {}

  async create(createContactDto: CreateContactDto) {
    console.log('Emitting contact_form_submitted message...');
    
    // emit the message with the pattern and the payload
    this.mailClient.emit('contact_form_submitted', createContactDto);
    
    return { message: 'Contact form submitted, processing...' };
  }
}