import Miffy from '../assets/miffy-cropped.png'
import Nav from './Nav'
import '../css/main.scss'
import './header.scss'
export default function Header() {
    return (
        <header>
            <div>
            <img src={Miffy} alt="miffy"/>
            <h1>Deyy</h1>
            </div>
            <Nav />
        </header>
    )
}