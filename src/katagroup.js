export default class KataGroup {

  constructor(name, items) {

    this.name = name;
    this.katasCount = items.length;
    this.katas = items;
  }
}