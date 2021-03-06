import {
  Request,
  Response,
  NextFunction,
} from 'express';

import { AsyncRequestHandler } from './error.type';

export const errorService = (handler: AsyncRequestHandler) => (request: Request, response: Response, next: NextFunction) => {
  try {
    return handler(request, response, next);
  } catch (error) {
    next(error);
  }
};
