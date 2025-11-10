import { Controller } from '@nestjs/common';
import { Ctx, MessagePattern, Payload, RmqContext } from '@nestjs/microservices';
import { MailService } from './mail/mail.service';

class ContactFormPayload {
  name: string;
  email: string;
  message: string;
}

class RequestResumePayload {
  email: string;
}

@Controller()
export class AppController {
  constructor(private readonly mailService: MailService) {}

  @MessagePattern('contact_form_submitted')
  async handleContactForm(
    @Payload() data: ContactFormPayload,
    @Ctx() context: RmqContext,
  ) {
    console.log('Received new contact form message:', data);

    await this.mailService.sendContactFormEmail(data.name, data.email, data.message);
    
    const channel = context.getChannelRef();
    const originalMsg = context.getMessage();
    channel.ack(originalMsg);

    console.log('Email processed and message acknowledged.');
  }

  @MessagePattern('resume_requested')
  async handleResumeRequest(
    @Payload() data: RequestResumePayload,
    @Ctx() context: RmqContext,
  ) {
    console.log('Received new resume request from:', data.email);

    await this.mailService.sendResumeEmail(data.email);

    const channel = context.getChannelRef();
    const originalMsg = context.getMessage();
    channel.ack(originalMsg);

    console.log('Resume email processed and message acknowledged.');
  }
}