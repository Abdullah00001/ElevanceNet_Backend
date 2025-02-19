interface IGlobalError {
  code: number;
  message: string;
  errors: string[];
  hints: string[];
  requestId: string|null;
}

export default IGlobalError;
