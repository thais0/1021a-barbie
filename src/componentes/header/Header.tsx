import './Header.css'
import Link from './../link/Link'
function Header(){
    return(
        <header>
            <div>
                <h1 className='lg'>Barbie</h1>
            </div>
            <nav>
                <ul>
                    <li>
                        <Link texto='Home'/>
                    </li>
                    <li>
                        <Link texto='Notícias'/>
                    </li>
                    <li>
                        <Link texto='Sobre'/>
                    </li>
                    <li>
                        <Link texto='Contatos'/>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default Header