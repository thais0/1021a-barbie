//Como importar uma imagem em REACT

import Imagem from "./../../assets/barbie.png"
import './Filme.css'
function Filme(){
    return(
        <div className="filme-conntent">
            {/* O comentario dentro do JSX é desse forr*/}
            {/* Dentro das chaves você pode utilizar java script*/}
            {/* Por isso podemos importar o "Imagem" dentro*/}
            <img src={Imagem} alt="" />
            <div className="text-barbie">
                <h1>Barbie</h1>
                <p className="sinopse">Depois de ser expulsa da Barbielend 
                por ser uma boneca de aparência</p>
            </div>
        </div>
    )
}
export default Filme