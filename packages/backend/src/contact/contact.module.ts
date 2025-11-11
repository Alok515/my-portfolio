import { Module } from '@nestjs/common';
import { ContactService } from './contact.service';
import { ContactController } from './contact.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [],
  controllers: [ContactController],
  providers: [ContactService],
})
export class ContactModule {}

// ClientsModule.registerAsync([
//       {
//         name: 'MAIL_SERVICE',
//         imports: [ConfigModule],
//         useFactory: (configService: ConfigService) => {
//           const rmqUrl = configService.get<string>('RABBITMQ_URL');
//           if (!rmqUrl) {
//             throw new Error('RABBITMQ_URL is not defined in .env');
//           }
          
//           return {
//             transport: Transport.RMQ,
//             options: {
//               urls: [rmqUrl],
//               queue: 'mail_queue',
//               queueOptions: {
//                 durable: false,
//               },
//             },
//           };
//         },
//         inject: [ConfigService],
//       },
//     ]),