// packages/mail-service/src/app.controller.ts
import { Controller } from '@nestjs/common';
import { Ctx, MessagePattern, Payload, RmqContext } from '@nestjs/microservices';
import { MailService } from './mail/mail.service';

// This is the DTO we EXPECT to receive from the message
class ContactFormPayload {
  name: string;
  email: string;
  message: string;
}

@Controller()
export class AppController {
  constructor(private readonly mailService: MailService) {}

  // This function listens for messages with the pattern 'contact_form_submitted'
  @MessagePattern('contact_form_submitted')
  async handleContactForm(
    @Payload() data: ContactFormPayload,
    @Ctx() context: RmqContext,
  ) {
    console.log('Received new contact form message:', data);

    // 1. Send the email using our MailService
    await this.mailService.sendContactFormEmail(data.name, data.email, data.message);
    
    // 2. Acknowledge the message (removes it from the queue)
    const channel = context.getChannelRef();
    const originalMsg = context.getMessage();
    channel.ack(originalMsg);

    console.log('Email processed and message acknowledged.');
  }
}