export interface MenuModel {
  name: string;
  active: boolean;
  items: MenuItemModel[];
}

export interface MenuItemModel {
  name: string;
  url: string;
  icon: string;
  active: boolean;
  items?: MenuItemCompanyModel[];
}

export interface MenuItemCompanyModel {
  name: string;
  url: string;
  icon: string;
  active: boolean;
}
