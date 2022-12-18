export interface SideMenuModel {
  id: number;
  name: string;
  isOpen: boolean;
  options?: Array<{
    name: string;
    selected: boolean;
  }>;
}
