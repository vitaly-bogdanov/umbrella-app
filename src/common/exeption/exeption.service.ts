import {
  Request,
  Response,
  NextFunction,
} from 'express';

import { AsyncRequestHandler } from './exeption.type';

export const exeptionCatchService = (handler: AsyncRequestHandler) => (request: Request, response: Response, next: NextFunction) => handler(request, response, next).catch(next);
