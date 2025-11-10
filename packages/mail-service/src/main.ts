// packages/mail-service/src/main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  // Get ConfigService to read .env variables
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const RABBITMQ_URL = configService.get<string>('RABBITMQ_URL');

  if (!RABBITMQ_URL) {
    throw new Error('RABBITMQ_URL is not defined in .env');
  }

  // Create a microservice listener
  const microservice = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.RMQ,
      options: {
        urls: [RABBITMQ_URL],
        queue: 'mail_queue',
        noAck: false,
        queueOptions: {
          durable: false,
        },
      },
    },
  );

  // Start the listener
  await microservice.listen();
  console.log('Mail service is listening for RabbitMQ messages...');
}
bootstrap();