import './Header.css'
import LinkNav from './../linknav/LinkNav'
function Header(){
    return(
        <header>
            <div>
                <h1 className='lg'>Barbie</h1>
            </div>
            <nav>
                <ul>
                    <li>
                        <LinkNav url="/" texto='Home'/>
                    </li>
                    <li>
                        <LinkNav url="/noticias" texto='Notícias'/>
                    </li>
                    <li>
                        <LinkNav url="/sobre" texto='Sobre'/>
                    </li>
                    <li>
                        <LinkNav url="/contato" texto='Contatos'/>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default Header