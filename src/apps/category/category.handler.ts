import { Request, Response } from 'express';

import { getAllCategoriesService } from './category.service';
import { CategoryCreateDto } from './category.dto';

export const indexHandler = async (request: Request, response: Response): Promise<void> => {
  const categories = await getAllCategoriesService();
  response.status(200).json(categories);
};

export const viewHandler = async (request: Request, response: Response): Promise<void> => {
  response.status(200).json({ msg: 'ok' });
};

export const createHandler = async (request: Request, response: Response): Promise<void> => {
  const categoryCreateDto = new CategoryCreateDto(request.body);
  console.log(categoryCreateDto.title);
  response.status(201).json({ msg: 'ok' });
};

export const updateHandler = async (request: Request, response: Response): Promise<void> => {
  response.status(200).json({ msg: 'ok' });
};

export const destroyHandler = async (request: Request, response: Response): Promise<void> => {
  response.status(200).json({ msg: 'ok' });
};
