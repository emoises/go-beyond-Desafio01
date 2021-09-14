import React from 'react'
import Header from './components/Header';
import Slider from './components/Slider/Slider';
import GlobalStyles from './GlobalStyles';
// import slides from "./data.json"
import Products from './components/Products/Products';
import Newsletter from './components/Newsletter/Newsletter';
import Footer from './components/Footer/Footer';

const slides = [
  {
      id: "001",
      name: "",
      description: {
          primaryMessage:"Olá, O que você quer fazer para entrar de cabeça no Desenvolvimento",
          secondaryMessage: "front-end • back-end • mobile"
      },
      imageUrl: "https://images.unsplash.com/photo-1498049860654-af1a5c566876?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
  },
  {
      id: "002",
      name: "",
      description: {
          primaryMessage:"Olá, O que você quer fazer para entrar de cabeça no Desenvolvimento",
          secondaryMessage: "front-end • back-end • mobile"
      },
      imageUrl: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
  },
  {
      id: "003",
      name: "",
      description: {
          primaryMessage:"Olá, O que você quer fazer para entrar de cabeça no Desenvolvimento",
          secondaryMessage: "front-end • back-end • mobile"
      },
      imageUrl: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
  }
]

function App() {
  return (
    <>
      <GlobalStyles/>

      <Header/>
      <Slider data={slides} />
      <Products />
      <Newsletter/>
      <Footer/>
    </>
  )
}

export default App;