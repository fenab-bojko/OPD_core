import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { CardItemsService } from './card-items.service';
import { ICardItem } from './types';

@Controller('projects')
export class CardItemsController {
  constructor(private readonly cardItemsService: CardItemsService) {}

  @Get()
  async findAll() {
    return this.cardItemsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.cardItemsService.findOne(id);
  }

  @Post()
  async create(@Body() body: ICardItem) {
    return this.cardItemsService.create(body);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.cardItemsService.delete(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() body: ICardItem) {
    return this.cardItemsService.update(id, body);
  }

  @Patch(':id')
  async patch(@Param('id') id: string, @Body() body: ICardItem) {
    return this.cardItemsService.patch(id, body);
  }
}