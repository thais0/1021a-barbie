//Como importar uma imagem em REACT

import './Filme.css'
type FilmeProps = {
    titulo:string,
    sinopse:string,
    imagem:string
}
function Filme(props:FilmeProps){
    return(
        <div className="filme-content">
            <div className='foto-filme'>
                <img className="img-filme" src={props.imagem} alt="" /></div>
            <div className="text-barbie">
                <h1>{props.titulo}</h1>
                <p className="sinopse">{props.sinopse}</p>
            </div>
        </div>
    )
}
export default Filme