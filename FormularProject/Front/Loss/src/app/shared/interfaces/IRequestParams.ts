export interface IRequestParams {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
  url: string;
  params?: { [key: string]: any };
  payload?: any;
}
