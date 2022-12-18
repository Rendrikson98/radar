export interface SideMenuModel {
  id: number;
  name: string;
  isOpen: boolean;
  options: Array<{
    id: number;
    name?: string;
    selected?: boolean;
  }>;
}
