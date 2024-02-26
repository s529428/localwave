export default class NavItem {
  title;
  target;
  uid: string;

  constructor(title: string, target: string) {
    this.title = title;
    this.target = target;
    this.uid = Math.random().toString(16).slice(2);
  }
}
