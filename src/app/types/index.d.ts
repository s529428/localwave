declare class NavItem {
  uid: Key | null | undefined;
  constructor(title: string, target: string);
  title: string;
  target: string;
}
