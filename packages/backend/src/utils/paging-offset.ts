export class PagingOffset {
  private readonly page: number;
  private readonly pageSize: number;
  private readonly totalItems: number;
  private readonly totalPages: number;

  constructor(page: number, pageSize: number, totalItems: number) {
    this.page = page;
    this.pageSize = pageSize;
    this.totalItems = totalItems;
    this.totalPages =
      totalItems % pageSize === 0
        ? totalItems / pageSize
        : Math.floor(totalItems / pageSize) + 1;
  }
}
