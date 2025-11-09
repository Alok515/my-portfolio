// packages/backend/src/contact/contact.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { ContactService } from './contact.service';
import { CreateContactDto } from './dto/create-contact.dto';

@Controller('contact') // All routes in this file will be prefixed with /contact
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Post() // Responds to: POST /contact
  create(@Body() createContactDto: CreateContactDto) {
    console.log('Received contact form submission:');
    console.log(createContactDto);
    
    return {
      message: 'Contact form submitted successfully!',
      data: createContactDto,
    };
  }
}