import { Module } from '@nestjs/common';
import { CardItemsService } from './card-items.service';
import { CardItemsController } from './card-items.controller';

@Module({
  controllers: [CardItemsController],
  providers: [CardItemsService],
})
export class CardItemsModule {}
