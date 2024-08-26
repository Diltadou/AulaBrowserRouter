import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ListarProdutos from '../components/ListaProdutos';

export default function Produtos() {
  const [produtos, setProdutos] = useState([
    {
      id: 1,
      nome: 'Produto 1',
      descricao: 'Descrição do produto 1',
      preco: 99.99,
      categoria: 'Categoria 1',
      atributos: ['Atributo 1', 'Atributo 2', 'Atributo 3'],
      imagem: 'https://acdn.mitiendanube.com/stores/002/082/206/products/img_77911-3b15f214b93923c78216899691742708-480-0.webp',
    },
    {
        id: 2,
        nome: 'Produto 1',
        descricao: 'Descrição do produto 1',
        preco: 99.99,
        categoria: 'Categoria 1',
        atributos: ['Atributo 1', 'Atributo 2', 'Atributo 3'],
        imagem: 'https://acdn.mitiendanube.com/stores/002/082/206/products/img_77911-3b15f214b93923c78216899691742708-480-0.webp',
      },
      {
        id: 3,
        nome: 'Produto 1',
        descricao: 'Descrição do produto 1',
        preco: 99.99,
        categoria: 'Categoria 1',
        atributos: ['Atributo 1', 'Atributo 2', 'Atributo 3'],
        imagem: 'https://acdn.mitiendanube.com/stores/002/082/206/products/img_77911-3b15f214b93923c78216899691742708-480-0.webp',
      },
      {
        id: 4,
        nome: 'Produto 1',
        descricao: 'Descrição do produto 1',
        preco: 99.99,
        categoria: 'Categoria 1',
        atributos: ['Atributo 1', 'Atributo 2', 'Atributo 3'],
        imagem: 'https://acdn.mitiendanube.com/stores/002/082/206/products/img_77911-3b15f214b93923c78216899691742708-480-0.webp',
      },
      {
        id: 5,
        nome: 'Produto 1',
        descricao: 'Descrição do produto 1',
        preco: 99.99,
        categoria: 'Categoria 1',
        atributos: ['Atributo 1', 'Atributo 2', 'Atributo 3'],
        imagem: 'https://acdn.mitiendanube.com/stores/002/082/206/products/img_77911-3b15f214b93923c78216899691742708-480-0.webp',
      },
      {
        id: 6,
        nome: 'Produto 1',
        descricao: 'Descrição do produto 1',
        preco: 99.99,
        categoria: 'Categoria 1',
        atributos: ['Atributo 1', 'Atributo 2', 'Atributo 3'],
        imagem: 'https://acdn.mitiendanube.com/stores/002/082/206/products/img_77911-3b15f214b93923c78216899691742708-480-0.webp',
      },
      {
        id: 7,
        nome: 'Produto 1',
        descricao: 'Descrição do produto 1',
        preco: 99.99,
        categoria: 'Categoria 1',
        atributos: ['Atributo 1', 'Atributo 2', 'Atributo 3'],
        imagem: 'https://acdn.mitiendanube.com/stores/002/082/206/products/img_77911-3b15f214b93923c78216899691742708-480-0.webp',
      },
      {
        id: 8,
        nome: 'Produto 1',
        descricao: 'Descrição do produto 1',
        preco: 99.99,
        categoria: 'Categoria 1',
        atributos: ['Atributo 1', 'Atributo 2', 'Atributo 3'],
        imagem: 'https://acdn.mitiendanube.com/stores/002/082/206/products/img_77911-3b15f214b93923c78216899691742708-480-0.webp',
      },
      {
        id: 9,
        nome: 'Produto 1',
        descricao: 'Descrição do produto 1',
        preco: 99.99,
        categoria: 'Categoria 1',
        atributos: ['Atributo 1', 'Atributo 2', 'Atributo 3'],
        imagem: 'https://acdn.mitiendanube.com/stores/002/082/206/products/img_77911-3b15f214b93923c78216899691742708-480-0.webp',
      },
      {
        id: 10,
        nome: 'Produto 1',
        descricao: 'Descrição do produto 1',
        preco: 99.99,
        categoria: 'Categoria 1',
        atributos: ['Atributo 1', 'Atributo 2', 'Atributo 3'],
        imagem: 'https://acdn.mitiendanube.com/stores/002/082/206/products/img_77911-3b15f214b93923c78216899691742708-480-0.webp',
      },
      {
        id: 11,
        nome: 'Produto 1',
        descricao: 'Descrição do produto 1',
        preco: 99.99,
        categoria: 'Categoria 1',
        atributos: ['Atributo 1', 'Atributo 2', 'Atributo 3'],
        imagem: 'https://acdn.mitiendanube.com/stores/002/082/206/products/img_77911-3b15f214b93923c78216899691742708-480-0.webp',
      },
      {
        id: 12,
        nome: 'Produto 1',
        descricao: 'Descrição do produto 1',
        preco: 99.99,
        categoria: 'Categoria 1',
        atributos: ['Atributo 1', 'Atributo 2', 'Atributo 3'],
        imagem: 'https://acdn.mitiendanube.com/stores/002/082/206/products/img_77911-3b15f214b93923c78216899691742708-480-0.webp',
      },
      {
        id: 13,
        nome: 'Produto 1',
        descricao: 'Descrição do produto 1',
        preco: 99.99,
        categoria: 'Categoria 1',
        atributos: ['Atributo 1', 'Atributo 2', 'Atributo 3'],
        imagem: 'https://acdn.mitiendanube.com/stores/002/082/206/products/img_77911-3b15f214b93923c78216899691742708-480-0.webp',
      },
      {
        id: 14,
        nome: 'Produto 1',
        descricao: 'Descrição do produto 1',
        preco: 99.99,
        categoria: 'Categoria 1',
        atributos: ['Atributo 1', 'Atributo 2', 'Atributo 3'],
        imagem: 'https://acdn.mitiendanube.com/stores/002/082/206/products/img_77911-3b15f214b93923c78216899691742708-480-0.webp',
      },
      {
        id: 15,
        nome: 'Produto 1',
        descricao: 'Descrição do produto 1',
        preco: 99.99,
        categoria: 'Categoria 1',
        atributos: ['Atributo 1', 'Atributo 2', 'Atributo 3'],
        imagem: 'https://acdn.mitiendanube.com/stores/002/082/206/products/img_77911-3b15f214b93923c78216899691742708-480-0.webp',
      },

   
  ]);

  return (
    <div>
      <Header />
      <main className="main-content">
        <h1>Todos os Produtos</h1>
        <ListarProdutos produtos={produtos} />
      </main>
      <Footer />
    </div>
  );
};


