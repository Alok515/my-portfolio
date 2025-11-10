// packages/mail-service/src/mail/mail.service.ts
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as nodemailer from 'nodemailer';

@Injectable()
export class MailService {
  private transporter: nodemailer.Transporter;

  constructor(private readonly configService: ConfigService) {
    // Initialize the transporter from .env variables
    this.transporter = nodemailer.createTransport({
      host: this.configService.get<string>('MAIL_HOST'),
      port: this.configService.get<number>('MAIL_PORT'),
      secure: false, // true for 465, false for other ports
      auth: {
        user: this.configService.get<string>('MAIL_USER'),
        pass: this.configService.get<string>('MAIL_PASS'),
      },
    });
  }

  async sendContactFormEmail(name: string, fromEmail: string, message: string) {
    console.log(`Sending email for: ${name}`);
    try {
      const info = await this.transporter.sendMail({
        from: '"My Portfolio" <no-reply@portfolio.com>',
        to: 'kumarsinghalok28@gmail.com',
        replyTo: fromEmail, // So you can reply to the user
        subject: `New Portfolio Contact from ${name}`,
        text: message,
        html: `<b>From:</b> ${name} (${fromEmail})<br><br><b>Message:</b><p>${message}</p>`,
      });

      console.log('Message sent: %s', info.messageId);
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
      
    } catch (error) {
      console.error('Error sending contact form email:', error);
    }
  }
}