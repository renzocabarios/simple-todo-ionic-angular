export interface ITodo {
  _id?: string;
  content: string;
  deleted?: boolean;
}

export interface IHttpResponse<T> {
  status: string;
  data: T[];
  message: string;
}
