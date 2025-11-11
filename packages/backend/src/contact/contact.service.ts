import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { CreateContactDto } from './dto/create-contact.dto';
import { RequestResumeDto } from './dto/request-resume.dto';
import * as nodemailer from 'nodemailer';
import * as path from 'path';

@Injectable()
export class ContactService {
  private transporter: nodemailer.Transporter;

  constructor(private readonly configService: ConfigService) {
    this.transporter = nodemailer.createTransport({
      host: this.configService.get<string>('MAIL_HOST'),
      port: this.configService.get<number>('MAIL_PORT'),
      secure: false,
      auth: {
        user: this.configService.get<string>('MAIL_USER'),
        pass: this.configService.get<string>('MAIL_PASS'),
      },
    });
  }

  async create(createContactDto: CreateContactDto) {
    console.log('Sending contact form email...');
    await this.sendContactFormEmail(
      createContactDto.name,
      createContactDto.email,
      createContactDto.message,
    );
    return { message: 'Contact form submitted successfully!' };
  }

  async requestResume(requestResumeDto: RequestResumeDto) {
    console.log('Sending resume email...');
    await this.sendResumeEmail(requestResumeDto.email);
    return { message: 'Resume request received!' };
  }

  async sendContactFormEmail(name: string, fromEmail: string, message: string) {
    try {
      const info = await this.transporter.sendMail({
        from: '"My Portfolio" <no-reply@portfolio.com>',
        to: 'kumarsinghalok28@gmail.com', // Your email
        replyTo: fromEmail,
        subject: `New Portfolio Contact from ${name}`,
        html: `<b>From:</b> ${name} (${fromEmail})<br><br><b>Message:</b><p>${message}</p>`,
      });
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    } catch (error) {
      console.error('Error sending contact form email:', error);
    }
  }

  async sendResumeEmail(toEmail: string) {
    const resumePath = path.join(
      __dirname,
      '..',
      'assets',
      'AlokWEB25.pdf',
    );

    try {
      const info = await this.transporter.sendMail({
        from: '"Alok @ Portfolio" <no-reply@portfolio.com>',
        to: toEmail,
        subject: "Here is Alok Singh's Resume",
        html: '<b>Here is the resume you requested.</b>',
        attachments: [
          {
            filename: 'Alok_Singh_Resume.pdf',
            path: resumePath,
            contentType: 'application/pdf',
          },
        ],
      });
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    } catch (error) {
      console.error('Error sending resume email:', error);
    }
  }
}