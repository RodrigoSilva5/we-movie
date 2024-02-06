import {MovieCard, MovieList, SearchBar} from "./components/index"
import { useState,useEffect} from "react"

import './App.css'

// http://www.omdbapi.com/?i=tt3896198&apikey=287b6e30 omdb api key
// http://www.omdbapi.com/?apikey=${apiKey}&t=${tituloDoFilme}
// const resposta = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=287b6e30&t=${tituloDoFilme}&page=1`);
// 



function App() {
  const [inputText,  setInputText] = useState("star wars")
  const [movies , setMovies] = useState([])
  const filmes = [
    {
      id: 1,
      title: "Filme 1",
      genre: "Ação",
      releaseYear: 2020,
      rating: 4.5,
      img: "novo/caminho/imagem1.jpg"
  },
  {
      id: 2,
      title: "Filme 2",
      genre: "Comédia",
      releaseYear: 2021,
      rating: 3.8,
      img: "novo/caminho/imagem2.jpg"
  },
  {
      id: 3,
      title: "Filme 3",
      genre: "Drama",
      releaseYear: 2019,
      rating: 4.2,
      img: "novo/caminho/imagem3.jpg"
  },
    {
      id: 4,
      title: "Filme 1",
      genre: "Ação",
      releaseYear: 2020,
      rating: 4.5,
      img: "novo/caminho/imagem1.jpg"
  },
  {
      id: 5,
      title: "Filme 2",
      genre: "Comédia",
      releaseYear: 2021,
      rating: 3.8,
      img: "novo/caminho/imagem2.jpg"
  },
  {
      id: 6,
      title: "Filme 3",
      genre: "Drama",
      releaseYear: 2019,
      rating: 4.2,
      img: "novo/caminho/imagem3.jpg"
  },
    {
        id: 7,
        title: "Filme 1",
        genre: "Ação",
        releaseYear: 2020,
        rating: 4.5,
        img: "novo/caminho/imagem1.jpg"
    },
    {
        id: 8,
        title: "Filme 2",
        genre: "Comédia",
        releaseYear: 2021,
        rating: 3.8,
        img: "novo/caminho/imagem2.jpg"
    },
    {
        id: 9,
        title: "Filme 3",
        genre: "Drama",
        releaseYear: 2019,
        rating: 4.2,
        img: "novo/caminho/imagem3.jpg"
    },
    // Adicione mais objetos conforme necessário
];
useEffect(() => {
  const buscarFilmes = async (tituloDoFilme) => {
    try {
      // Certifique-se de substituir 'SUA_CHAVE_API' pela sua própria chave da OMDBAPI
      const apiKey = '287b6e30&t';
      const url = `http://www.omdbapi.com/?apikey=${apiKey}&s=${tituloDoFilme}&page=1`;

      // Realizar a requisição usando fetch
      const resposta = await fetch(url);

      // Verificar se a requisição foi bem-sucedida
      if (!resposta.ok) {
        throw new Error('Erro na requisição');
      }

      // Converter a resposta para JSON
      const dados = await resposta.json();

      // Obter apenas os primeiros 10 filmes (caso existam)
      const filmesResultado = dados.Search ? dados.Search.slice(0, 10) : [];

      // Atualizar o estado com os dados dos filmes obtidos
      console.log(filmesResultado)
      setMovies(filmesResultado);
    } catch (erro) {
      console.error('Erro na requisição:', erro.message);
    }
  };

  // Chamar a função de busca de filmes ao montar o componente
  buscarFilmes(inputText);
}, [inputText]); // Dependência do useEffect, irá reexecutar o useEffect se o título do filme mudar

  return (
    <>
      {/* MovieList */}
      <SearchBar 
        inputText={inputText}
        setInputText={setInputText}
        />
      <MovieList movies={movies}/>
      {/* Favoritos */}
    </>
  )
}

export default App
