import './SettingsList.css';
import {FC} from "react";

interface Props {
  handleUserNameInput: () => void
}

export const SettingsList: FC<Props> = ({handleUserNameInput}) => {
  return (
    <ul className='settings-list-container'>
      <li className='settings-list-item' onClick={handleUserNameInput}>Change user name</li>
    </ul>
  )
}
