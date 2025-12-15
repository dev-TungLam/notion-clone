export class PagingCursor {
  private readonly nextCursor: string;
  private readonly limit: number;

  constructor(nextCursor: string, limit: number) {
    this.nextCursor = nextCursor;
    this.limit = limit || 10;
  }
}
