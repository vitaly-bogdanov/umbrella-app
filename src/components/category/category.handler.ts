import { Request, Response } from 'express';

export const indexHandler = async (request: Request, response: Response): Promise<void> => {
  response.status(200).json({ msg: 'ok' });
};

export const viewHandler = async (request: Request, response: Response): Promise<void> => {
  response.status(200).json({ msg: 'ok' });
};

export const createHandler = async (request: Request, response: Response): Promise<void> => {
  response.status(200).json({ msg: 'ok' });
};

export const updateHandler = async (request: Request, response: Response): Promise<void> => {
  response.status(200).json({ msg: 'ok' });
};

export const destroyHandler = async (request: Request, response: Response): Promise<void> => {
  response.status(200).json({ msg: 'ok' });
};
