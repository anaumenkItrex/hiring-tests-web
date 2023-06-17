import {FC, PropsWithChildren} from "react";
import './DisplayInfo.css';

interface Props extends PropsWithChildren {
  imgSrc: string;
  imgAlt: string;
  name: string;
  underline?: boolean;
}

export const DisplayInfo: FC<Props> = ({imgSrc, imgAlt, name, underline, children}) => {
  return (
    <div className={`display-info-container ${underline ? 'underline' : ''}`}>
      <img className='display-info-image' src={imgSrc} alt={imgAlt}/>
      <span>{name}</span>
    </div>
  )
}
