import Miffy from '../assets/miffylogo.png'
import Nav from './Nav'
import Hero from './Hero'
import '../css/main.scss'
import './header.scss'
export default function Header() {
    return (
        <div className='gradient-bg'>
        <header>
            <div className='gradient-content'>
            <img src={Miffy} alt="miffy"/>
            <h1>Deyy</h1>
            </div>
            <Nav />
        </header>
        <div className="g1"></div>
            <Hero />
        </div>
    )
        
}