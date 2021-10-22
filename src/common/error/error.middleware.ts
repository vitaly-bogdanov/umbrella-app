import { Request, Response } from 'express';

import { ApiError } from './error.constant';

export const errorHandlerMiddleware = (
  error: Error,
  request: Request,
  response: Response,
) : void => {
  if (error instanceof ApiError) {
    response
      .status(error.status)
      .json({ message: error.message });
  } else {
    response
      .status(500)
      .json({ message: 'Непредвиденная ошибка' });
  }
};
