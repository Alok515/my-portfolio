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

  async sendTestEmail() {
    console.log('Sending test email...');
    try {
      const info = await this.transporter.sendMail({
        from: '"My Portfolio" <no-reply@portfolio.com>',
        to: 'test@example.com', // Ethereal will catch this
        subject: 'Test Email from NestJS Mail Service',
        text: 'This is a plain text test email.',
        html: '<b>This is an HTML test email.</b>',
      });

      console.log('Message sent: %s', info.messageId);
      // You can preview the sent email at this URL
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
      return { success: true, url: nodemailer.getTestMessageUrl(info) };

    } catch (error) {
      console.error('Error sending email:', error);
      return { success: false, error: error.message };
    }
  }
}