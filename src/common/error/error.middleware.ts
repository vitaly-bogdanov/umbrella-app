import { Request, Response } from 'express';

import { ApiError } from './error.constant';
import { STATUS_CODE } from '../http-response';

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
      .status(STATUS_CODE.INTERNAL_ERROR)
      .json({ message: 'Непредвиденная ошибка' });
  }
};
