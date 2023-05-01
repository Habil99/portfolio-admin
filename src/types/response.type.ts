export interface BaseResponseType<T> {
  statusCode: number;
  message: string;
  data: T;
}
