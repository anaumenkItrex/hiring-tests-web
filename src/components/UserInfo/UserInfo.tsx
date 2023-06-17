import { MenuIcon } from '../MenuIcon/MenuIcon';
import {ChangeEvent, useContext, useEffect, useRef, useState} from "react";
import {UserContext} from "../../context/user";
import {SettingsList} from "../SettingsList/SettingsList";
import './UserInfo.css';
import {ChatContext} from "../../context/chat";
import {HandleUserKeyPress} from "../../utils/hooks/handleUserKeyPress";
import {FocusOnUserInput} from "../../utils/hooks/focusOnUserInput";
import {HandleUserOutsideRefClick} from "../../utils/hooks/handleUserOutsideRefClick";

export const UserInfo = () => {
  const {userName, setUserName, userLogo, userId} = useContext(UserContext);
  const {updateChatWithName} = useContext(ChatContext);
  const [menuIsOpen, setIsMenuOpen] = useState(false);
  const [inputValue, setInputValue] = useState(userName);
  const [disabled, setIsDisabled] = useState(true);
  const [error, setError] = useState<string|null>(null);
  const userInfoContainerRef = useRef(null);
  const inputRef = FocusOnUserInput(disabled);
  const key = HandleUserKeyPress()

  const handleCancel = () => {
    if (!disabled) {
      setIsDisabled(true);
      setInputValue(userName)
    }
  }

  HandleUserOutsideRefClick(userInfoContainerRef, handleCancel);

  useEffect(() => {
    updateChatWithName(userId, userName);
  }, [userName])

  useEffect(() => {
    let error = null;
    if (inputValue.length < 3) {
      error = 'Name must be more than 3 symbols';
    } else if (inputValue.length > 8) {
      error = 'Name must be less than 8 symbols';
    } else if (!inputValue.match(/^[a-zA-Z]*$/)) {
      error = 'Allowed characters are a-zA-z'
    }
    setError(error);
  }, [inputValue])

  const handleMenu = () => {
    setIsMenuOpen(!menuIsOpen)
  }

  const handleUserNameInput = () => {
    setIsDisabled(false);
    handleMenu();
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  const handleSaveButton = () => {
    if (!error) {
      setUserName(inputValue);
      setIsDisabled(true);
    }
  }

  useEffect(() => {
    if (key === 13 && document.activeElement === inputRef.current) { // 13 = enter
      handleSaveButton();
    }
  }, [key]);

  return (
    <div className='user-info-container underline' ref={userInfoContainerRef}>
      <img className='user-info-image' src={userLogo} alt='User image'/>
      <input
        className='user-name-input'
        value={inputValue}
        type='text'
        disabled={disabled}
        ref={inputRef}
        onChange={handleInputChange}
      />
      <div className='user-info-error'>{error}</div>
      <div className='user-info-menu'>
        {disabled ?
          <div className='user-info-menu-icon' onClick={handleMenu}><MenuIcon /></div> :
          <button onClick={handleSaveButton} className='user-menu-button'>Save</button>
        }
        {menuIsOpen && <SettingsList handleUserNameInput={handleUserNameInput}/>}
      </div>
    </div>
  );
}
