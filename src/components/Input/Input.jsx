import './Input.scss'
import { Icon20Search } from '@vkontakte/icons';

function Input (props) {

    const {onChange, placeholder} = props

    return (
        <>
          <div className='my-input'>
            <Icon20Search color='#8c949d' className='img'/>
            <input placeholder={placeholder} onChange={onChange}/>
        </div>  
        </>
    )

}

export default Input