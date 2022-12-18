export interface SideMenuModel {
  name: string;
  isOpen: boolean;
  options?: Array<{
    name: string;
    selected: boolean;
  }>;
}
