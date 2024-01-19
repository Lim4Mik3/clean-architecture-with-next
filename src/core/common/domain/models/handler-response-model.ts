export type UseCaseResponseModel<T, P> = {
  error: unknown 
  data: null;
  message: string;
  metadata?: P;
} | {
  error: null;
  data: T;
  message: string;
  metadata?: P;
}
