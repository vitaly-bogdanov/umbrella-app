import { Request, Response, NextFunction } from 'express';

export const indexHandler = async (request: Request, response: Response, next: NextFunction): Promise<void> => {
  try {
    response.status(200).json({ msg: 'ok' });
  } catch (error) {
    next();
  }
};

export const viewHandler = async (request: Request, response: Response, next: NextFunction): Promise<void> => {
  try {
    response.status(200).json({ msg: 'ok' });
  } catch (error) {
    next();
  }
};

export const createHandler = async (request: Request, response: Response, next: NextFunction): Promise<void> => {
  try {
    response.status(200).json({ msg: 'ok' });
  } catch (error) {
    next();
  }
};

export const updateHandler = async (request: Request, response: Response, next: NextFunction): Promise<void> => {
  try {
    response.status(200).json({ msg: 'ok' });
  } catch (error) {
    next();
  }
};

export const destroyHandler = async (request: Request, response: Response, next: NextFunction): Promise<void> => {
  try {
    response.status(200).json({ msg: 'ok' });
  } catch (error) {
    next();
  }
};
