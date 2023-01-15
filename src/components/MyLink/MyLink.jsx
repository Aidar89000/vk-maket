import { NavLink } from "react-router-dom";
import classes from './MyLink.module.css'

const MyLink = props =>{
    return(
        <span >
            <NavLink
            className={props.className ? classes[props.className]: classes['my-navlink']}
            to={props.to}>
                <props.ico color='#4e82bd' style={{width:20, height:20, marginRight: 5}}/> {props.children} </NavLink>
         </span>
    )
}

export {MyLink}