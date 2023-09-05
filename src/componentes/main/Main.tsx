import Filme from './../filme/Filme'
import './Main.css'

export default function Main(){
    return(
        <>
        <div className='campo_pesquisa'>
            <input type="text" className='botao_pesquisa' placeholder='Pesquise um Filme'/>
            <p>Digitado</p>
        </div>
        <main className="content-main">
            <Filme titulo='Barbie'
                   sinopse='Depois de ser expulsa da Barbieland por ser uma boneca de aparência menos do que perfeita, Barbie parte para o mundo humano em busca da verdadeira felicidade.'
                   imagem='/barbie.png'/>
            <Filme titulo='Barbie'
                   sinopse='Depois de ser expulsa da Barbieland por ser uma boneca de aparência menos do que perfeita, Barbie parte para o mundo humano em busca da verdadeira felicidade.'
                   imagem='/boneca-linda-garota-gerada-por-ai.jpg'/>
            <Filme titulo='Barbie'
                   sinopse='Depois de ser expulsa da Barbieland por ser uma boneca de aparência menos do que perfeita, Barbie parte para o mundo humano em busca da verdadeira felicidade.'
                   imagem='/ken.png'/>
            <Filme titulo='Barbie'
                   sinopse='Depois de ser expulsa da Barbieland por ser uma boneca de aparência menos do que perfeita, Barbie parte para o mundo humano em busca da verdadeira felicidade.'
                   imagem='/frozen.jpeg'/>
            <Filme titulo='Barbie'
                   sinopse='Depois de ser expulsa da Barbieland por ser uma boneca de aparência menos do que perfeita, Barbie parte para o mundo humano em busca da verdadeira felicidade.'
                   imagem='/barbie.png'/>
            <Filme titulo='Barbie'
                   sinopse='Depois de ser expulsa da Barbieland por ser uma boneca de aparência menos do que perfeita, Barbie parte para o mundo humano em busca da verdadeira felicidade.'
                   imagem='/barbie.png'/>
            <Filme titulo='Barbie'
                   sinopse='Depois de ser expulsa da Barbieland por ser uma boneca de aparência menos do que perfeita, Barbie parte para o mundo humano em busca da verdadeira felicidade.'
                   imagem='/barbie.png'/>
            <Filme titulo='Barbie'
                   sinopse='Depois de ser expulsa da Barbieland por ser uma boneca de aparência menos do que perfeita, Barbie parte para o mundo humano em busca da verdadeira felicidade.'
                   imagem='/barbie.png'/>
        </main>
        </>
    )
}