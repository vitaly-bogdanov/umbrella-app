import {
  Request,
  Response,
  NextFunction,
} from 'express';

export type AsyncRequestHandler = (request: Request, response: Response, next: NextFunction) => Promise<void>;
