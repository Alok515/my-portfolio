// packages/mail-service/src/mail/mail.service.ts
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as nodemailer from 'nodemailer';
import * as path from 'path';

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

  async sendResumeEmail(toEmail: string) {
    console.log(`Sending resume to: ${toEmail}`);

    const resumePath = path.join(__dirname, '..', 'assets', 'rust_learning_plan.pdf');

    try {
      const info = await this.transporter.sendMail({
        from: '"Alok @ Portfolio" <no-reply@portfolio.com>',
        to: toEmail,
        subject: 'Here is Alok Singh\'s Resume',
        text: 'Here is the resume you requested. I look forward to hearing from you!',
        html: '<b>Here is the resume you requested.</b><p>I look forward to hearing from you!</p>',
        attachments: [
          {
            filename: 'Alok_Singh_Resume.pdf',
            path: resumePath,
            contentType: 'application/pdf',
          },
        ],
      });

      console.log('Message sent: %s', info.messageId);
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    } catch (error) {
      console.error('Error sending resume email:', error);
    }
  }
}