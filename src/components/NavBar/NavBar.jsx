import { MyLink } from '../MyLink/MyLink'
import './NavBar.scss'
import { Icon28Profile } from '@vkontakte/icons';

const NavBar = props =>{

    const navigation = [
        {text: 'Моя страница', link: 'Home', ico: Icon28Profile},
        {text: 'Новости', link: 'Feed', ico: Icon28Profile},
        {text: 'Мессенджер', link: 'Messander', ico: Icon28Profile},
    ]
    
    return(
        <div className={'my-navbar'}>
        <div className={'my-navbar__links'}>
            { navigation.map((e,i)=>
            
            <MyLink key={i} to={navigation[i].link} ico={navigation[i].ico}>
        {navigation[i].text} </MyLink>)}
        </div>   
            {/* <MyLink to='Profile' ><h3 className={'my-navbar__user'}>{user.email}</h3></MyLink> */}
        </div>
    )
}

export default NavBar