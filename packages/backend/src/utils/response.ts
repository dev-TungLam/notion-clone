import { PagingOffset } from './paging-offset';
import { PagingCursor } from './paging-cursor';

export class Response {
  private readonly data: any;
  private readonly statusCode: number;
  private readonly responseMessage: string;
  private readonly pagination?: PagingOffset;
  private readonly pagingCursor?: PagingCursor;

  constructor(
    statusCode: number,
    responseMessage: string,
    data: any,
    pagination?: PagingOffset,
    pagingCursor?: PagingCursor,
  ) {
    this.statusCode = statusCode;
    this.responseMessage = responseMessage;
    this.data = data;
    this.pagination = pagination;
    this.pagingCursor = pagingCursor;
  }
}
