import { Module } from '@nestjs/common';
import { CardItemsModule } from './card-items/card-items.module';

@Module({
  imports: [CardItemsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
