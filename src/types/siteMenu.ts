export interface SiteMenu {
  id: number;
  title: string;
  level: number;
  parentId: number | null;
  icon?: string;
  path?: string;
  disabled?: boolean;
  children?: SiteMenu[];
}
