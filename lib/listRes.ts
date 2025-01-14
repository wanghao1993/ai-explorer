export default class ListRes {
  list: any;
  total: number;
  constructor(list: any, total: number) {
    this.list = list;
    this.total = total;
  }
}
