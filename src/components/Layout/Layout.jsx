import {Outlet} from 'react-router-dom'
import NavBar from '../NavBar/NavBar'
import Header from '../Header/Header'
import './Layout.scss'
import Wrapper from '../Wrapper/Wrapper'

const Layout = props =>
    <>
        <Header />

        <div className='content'>
            
            <NavBar/>
            <Wrapper/>

            <main>
                <Outlet></Outlet>
                {props.children}
            </main>
        </div>
    </>

export {Layout}