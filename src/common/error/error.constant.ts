import { STATUS_CODE } from '../http-response';

export class ApiError extends Error {
  public status: number;

  constructor(status: number, message: string) {
    super(message);
    this.status = status;
  }

  static badRequest(message: string) {
    return new ApiError(STATUS_CODE.BAD_REQUEST, message);
  }

  static unauthorized(message: string) {
    return new ApiError(STATUS_CODE.UNAUTHORIZED, message);
  }

  static notFound(message: string) {
    return new ApiError(STATUS_CODE.NOT_FOUND, message);
  }
}
