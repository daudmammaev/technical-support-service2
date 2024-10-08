import { Global, Module } from '@nestjs/common';
import { FeedBackController } from './FeedBackController';
import { FirebaseService } from '../firebase/FirebaseService';
import { FeedBackService } from './FeedBackService';

@Global()
@Module({
  controllers: [FeedBackController],
  providers: [FeedBackService, FirebaseService],
})
export class FeedBackModule {}