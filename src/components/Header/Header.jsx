import "./Header.scss";
import { Icon28Notifications,Icon28MusicOutline, Icon28ServicesOutline  } from '@vkontakte/icons';
import Input from '../Input/Input'

function Header() {
  return (
    <header>
      <span>
        <div className="header__side rigth">
          <img src="./img/VK.svg.png" alt="logo" />
          <Input placeholder='Поиск...'/>
          <Icon28Notifications color='#8c949d'/>
          <Icon28MusicOutline  color='#8c949d'/>
        </div>

        <div className="header__side left">
          <Icon28ServicesOutline color='#8c949d'/>
          <img className='mini-avatar' src="./img/ava.jpg" alt="avatar" />
        </div>
      </span>
    </header>
  );
}

export default Header;
