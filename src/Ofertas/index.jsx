import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ListarProdutos from '../components/ListaProdutos';

export default function Ofertas() {
  const [produtos, setProdutos] = useState([
    {
      id: 1,
      nome: 'SCUM',
      preco: 46,
      desconto: 60,
      imagem: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/513710/header.jpg?t=1712247941',
    },
    {
      id: 2,
      nome: 'HELLCARD',
      preco: 41.99,
      desconto: 40,
      imagem: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1201540/header.jpg?t=1724346857',
    },
    {
      id: 3,
      nome: 'Diablo® IV',
      preco: 137.99,
      desconto: 40,
      imagem: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2344520/header.jpg?t=1724262498',
    },
    {
      id: 4,
      nome: 'Galaxy Burger',
      preco: 28.99,
      desconto: 20,
      imagem: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2749770/header.jpg?t=1724556415',
    },
    {
      id: 5,
      nome: 'PHOGS!',
      preco: 16.99,
      desconto: 65,
      imagem: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/850320/header.jpg?t=1688542335',
    },
    {
      id: 6,
      nome: 'Death Door',
      preco: 14.99,
      desconto: 75,
      imagem: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/894020/header.jpg?t=1714110400',
    },
    {
      id: 7,
      nome: 'Metro 2033 Redux',
      preco: 9.99,
      desconto: 89,
      imagem: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/286690/header.jpg?t=1709553030',
    },
    {
      id: 8,
      nome: 'Overcooked! 2',
      preco: 14.99,
      desconto: 75,
      imagem: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/728880/header.jpg?t=1723622537',
    },
    {
      id: 9,
      nome: 'Oferta 1',
      preco: 49.99,
      desconto: 12,
      imagem: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1040200/header.jpg?t=1724053807',
    },
    {
      id: 10,
      nome: 'Oferta 2',
      preco: 2.99,
      imagem: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1575940/header.jpg?t=1724421020',
    },
  ]);

  return (
    <div>
      <Header />
      <main className="main-content">
        <h1>Ofertas Especiais</h1>
        <ListarProdutos produtos={produtos} />
      </main>
      <Footer />
    </div>
  );
}
