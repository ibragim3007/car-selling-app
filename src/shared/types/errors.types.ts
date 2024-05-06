export interface IErrorResponseServer {
  data?: {
    errors?: IErrorMessage[];
  };
  status?: number;
}

export interface IErrorMessage {
  code?: number;
  id?: number;
  title?: string;
}
