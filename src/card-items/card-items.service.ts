import { Injectable } from '@nestjs/common';
import { ICardItem, IResponse, IPage, IPageItem} from './types';
import { dataItems } from '../../dataFiles/data';

@Injectable()
export class CardItemsService {
  async findAll(): Promise<IResponse> {
    return {
        data: dataItems,
        status: 200,
        message: 'Items fetched successfully',
    }
  } 
  
  async findOne(id: string): Promise<IResponse> {
    const item = await this.findAll().then(({ data }) => data?.find((item) => item.id === id));
    if (!item) {
      return {
        data: null,
        status: 204,
        message: 'Item not found',
      };
    }

    return {
        data: [item],
        status: 200,
        message: 'Item fetched successfully',
    }
  }

    async totalReadiness(): Promise<IPage> { //IResponseReadiness чтобы возвращал объект в дате со значением готовности 
    const total = dataItems.filter(item => item.percentageOfReadiness).reduce((sum, current) => sum + current.percentageOfReadiness, 0)/dataItems.length; //api/project/readiness метод возвращает - сделать
    if (total==0) {
      return {
        data: null,
        status: 203,
        message: 'No projects exist yet',
      };
    }

    return {
        data: total,
        status: 200,
        message: 'Item fetched successfully',
    }
  }

  async create(body: ICardItem): Promise<IResponse> {
    return {
        data: [body],
        status: 200,
        message: 'Item created successfully',
    }
  }

  async delete(id: string): Promise<IResponse> {
    return {
        data: null,
        status: 200,
        message: 'Item deleted successfully',
    }
  }

  async update(id: string, body: ICardItem): Promise<IResponse> {
    return {
        data: [body],
        status: 200,
        message: 'Item updated successfully',
    }
  }

  async patch(id: string, body: ICardItem): Promise<IResponse> {
    return {
        data: [body],
        status: 200,
        message: 'Item patched successfully',
    }
  }
}
