export const loggerWrapperService = (handler: AsyncRequestHandler) => (request: Request, response: Response, next: NextFunction) => {
  try {
    return handler(request, response, next);
  } catch (error) {
    next(error);
  }
};

