export interface ISliderAdvProps {
  items: IItem[];
}
export interface IItem {
  id?:number;
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
export interface IACHProps{
 title:string;
        description: string;
        items: IItem[]
}