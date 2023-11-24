import { useState, useEffect } from 'react';
import Filme from './../filme/Filme';
import axios from 'axios';
import './Main.css';

type FilmeType = {
  id: number;
  titulo: string;
  descricao: string;
  foto: string;
};

export default function Main() {
  const [texto, setTexto] = useState('');
  const [dados, setDados] = useState<FilmeType[]>([]);

  useEffect(() => {
    const procurarFilmes = async () => {
      try {
        const resposta = await axios.get('http://localhost:3000/filmes');
        setDados(resposta.data);
      } catch (erro) {
        console.error('Erro ao buscar filmes:', erro);
      }
    };

    procurarFilmes(); // Chame a função aqui
  }, []); // Adicione as dependências (no caso, um array vazio)

  function TrataTexto(e: React.ChangeEvent<HTMLInputElement>) {
    setTexto(e.target.value);
  }

  return (
    <>
      <div className="pesquisar">
        <input
          type="text"
          className="botao-pesquisa"
          placeholder="Pesquise um filme"
          onChange={TrataTexto}
        />
        {texto && <p>Resultados para: {texto}</p>}
      </div>

      <main className="content-main">
        {dados
          .filter((filme) => filme.titulo.toLowerCase().includes(texto))
          .map((filme) => (
            <Filme
              key={filme.id}
              descricao={filme.descricao}
              titulo={filme.titulo}
              foto={filme.foto}
            />
          ))}
      </main>
    </>
  );
}
