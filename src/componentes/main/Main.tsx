import { useState } from 'react'
import Filme from './../filme/Filme'
import './Main.css'
type FilmeType = {
       id:number,
       titulo:string,
       sinopse:string,
       imagem:string
   }

export default function Main(){
       //let texto = 'Barbie'
       //Hooks são funções do React que ajudam a gente a fazer tarefas específicas
       const [texto,setTexto]=useState("Barbie")
       //O parâmetro "e" da minha função será o meu evento que ocorreu

       const filmes:FilmeType[] = [
              {
                   id:1,
                   titulo:'Barbie',
                   sinopse:'Depois de ser expulsa da Barbieland por ser uma boneca de aparência menos do que perfeita, Barbie parte para o mundo humano em busca da verdadeira felicidade.',
                   imagem:'/barbie.png'
              },
              {  
                   id:2,
                   titulo:'Ken',
                   sinopse:'Depois de ser expulsa da Barbieland por ser uma boneca de aparência menos do que perfeita, Barbie parte para o mundo humano em busca da verdadeira felicidade.',
                   imagem:'/ken.png'
              },
              {
                   id:3,
                   titulo:'Barbie',
                   sinopse:'Depois de ser expulsa da Barbieland por ser uma boneca de aparência menos do que perfeita, Barbie parte para o mundo humano em busca da verdadeira felicidade.',
                   imagem:'/boneca-linda-garota-gerada-por-ai.jpg'
              }
       ]

       function TrataTexto(e:React.ChangeEvent<HTMLInputElement>){
              //console.log(e.target.value)
              //Como eu faço para mudar o texto para "TERE"
              setTexto (e.target.value)
       }
    return(
        <>
        <div className='campo_pesquisa'>
            <p>Busque um filme</p>
            <input type="text" className='botao_pesquisa' placeholder='Pesquise um Filme' onChange={TrataTexto}/>
            {
              (texto)?
              <p>Resultados Para: {texto}</p>:""
            }
        </div>
        {/** Use algo do vetor para tentar criar os filmes */}
        {
              filmes.filter((filme)=>filme.titulo.toLowerCase().includes(texto)).map((filme)=><Filme key={filme.id} sinopse={filme.sinopse} titulo={filme.titulo} imagem={filme.imagem}/>)
        }


        <main className="content-main">
            {/**<Filme titulo='Barbie'
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
            <Filme titulo='Barbie'
                   sinopse='Depois de ser expulsa da Barbieland por ser uma boneca de aparência menos do que perfeita, Barbie parte para o mundo humano em busca da verdadeira felicidade.'
                   imagem='/barbie.png'/>*/}
        </main>
        </>
    )
}