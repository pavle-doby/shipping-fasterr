export class ResError {
  message: string;

  status?: number;
  details?: string;
  other?: Record<string, any>;

  constructor(error: ResError) {
    this.message = error.message || 'An unexpected error occurred';
    this.status = error.status;
    this.details = error.details;
    this.other = error.other || {};
  }
}
