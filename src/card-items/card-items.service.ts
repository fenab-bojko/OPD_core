import { Injectable } from '@nestjs/common';
import { ICardItem, IResponse } from './types';

@Injectable()
export class CardItemsService {
  async findAll(): Promise<IResponse> {
    return {
        data:[ 
            {
                id: '1',
                title: 'Project 1',
                description: 'Description 1',
                image: 'https://via.placeholder.com/150',
            },
            {
                id: '2',
                title: 'Project 2',
                description: 'Description 2',
                image: 'https://via.placeholder.com/150',
            },
        ],
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
