export interface ISliderAdvProps {
  items: IItem[];
}
export interface IItem {
  url: string;
  title: string;
}
export interface ISliderItem {
  item: IItem;
  isActive: boolean;
}
export interface IProfileProps {
  fullname: string;
  photo: string;
  position: string;
  department: string;
}
export interface IFlipCardProps {
  url: string;
  title: string;
  description: string;
}