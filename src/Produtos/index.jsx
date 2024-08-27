import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ListarProdutos from '../components/ListaProdutos';

export default function Produtos() {
  const [produtos, setProdutos] = useState([
    {
      id: 1,
      nome: 'Mario + Rabbids Sparks of Hope',
      preco: 299.99,
      imagem: 'https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_502/b_white/f_auto/q_auto/ncom/software/switch/70010000035797/f3dc6aa2e25ab6d713ac5da17e90ce676dfadf6a0b8fefb37b8b5159d89fc36c',
    },
    {
      id: 2,
      nome: 'Xenoblade Chronicles 3',
      preco: 299.99,
      imagem: 'https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_502/b_white/f_auto/q_auto/ncom/software/switch/70010000053336/e933b48650b33b355e9cf2583da5c94b77180e40fb02d050041083dd62f4df39',
    },
    {
      id: 3,
      nome: 'Super Mario 3D World + Bowser’s Fury',
      preco: 299.99,
      imagem: 'https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_502/b_white/f_auto/q_auto/ncom/software/switch/70010000034439/ccb69a8bf2746b2dc0a9b11a9e48c9893baa1631486326f0d681b7a36385221f',
    },
    {
      id: 4,
      nome: 'Sonic Frontiers',
      preco: 295.99,
      imagem: 'https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_502/b_white/f_auto/q_auto/ncom/software/switch/70010000040331/96118506c3829370249225b8e82f1ae061036bdcf337b0265258efe1f8cf3bd9',
    },
    {
      id: 5,
      nome: 'Sonic Origins',
      preco: 145.99,
      imagem: 'https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_502/b_white/f_auto/q_auto/ncom/software/switch/70010000045649/bf9665c0d3f4f99954d8faa8f426e63a1e3cd1eec297b4f10d5954d9d188b199',
    },
    {
      id: 6,
      nome: 'Sonic Mania',
      preco: 95.99,
      imagem: 'https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_502/b_white/f_auto/q_auto/ncom/software/switch/70010000000809/2292c70c99e9a181e9e3a60f42961da13a9e80e5178954bb8c42f5ffda379849',
    },
    {
      id: 7,
      nome: 'Five Nights at Freddy\'s: Security Breach',
      preco: 75.99,
      imagem: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/747660/header.jpg?t=1686587905',
    },
    {
      id: 8,
      nome: 'Risk of Rain 2',
      preco: 59.99,
      imagem: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/632360/header.jpg?t=1699992764',
    },
    {
      id: 9,
      nome: '7 Days to Die',
      preco: 121.99,
      imagem: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/251570/header.jpg?t=1721925235',
    },
    {
      id: 10,
      nome: 'Mortal Kombat 11 Ultimate',
      preco: 279.99,
      imagem: 'https://store-images.s-microsoft.com/image/apps.3218.14189292593912942.341610e6-d1ca-4699-8cb5-bf6e900e0cee.0b3f414e-50b7-4e47-9372-15e09e4632ff?q=90&w=336&h=200',
    },
    {
      id: 11,
      nome: 'Dead Space',
      preco: 79.99,
      imagem: 'https://store-images.s-microsoft.com/image/apps.47254.69768431406041041.e1386476-b377-413b-9457-1f5559dbb168.1729d161-6022-4368-b67d-128946d0ca78?q=90&w=177&h=265',
    },
    {
      id: 12,
      nome: 'Rayman Legends',
      preco: 11.99,
      imagem: 'https://store-images.s-microsoft.com/image/apps.25053.65843946604617087.4d3f1eaa-9f9b-4884-8da5-69d3fa77479f.c8e55bec-d1f6-4fe4-b3fa-13ac1e79814f?q=90&w=177&h=265',
    },
    {
      id: 13,
      nome: 'Super Mario 64',
      preco: 174.99,
      imagem: 'https://http2.mlstatic.com/D_NQ_NP_812341-MLA47497063079_092021-O.webp',
    },
    {
      id: 14,
      nome: 'Red Dead Redemption 2',
      preco: 249.99,
      imagem: 'https://store-images.s-microsoft.com/image/apps.34695.68182501197884443.ac728a87-7bc1-4a0d-8bc6-0712072da93c.25816f86-f27c-4ade-ae29-222661145f1f?q=90&w=177&h=265',
    },
    {
      id: 15,
      nome: 'Call of Duty: Black Ops III',
      preco: 199.99,
      imagem: 'https://store-images.s-microsoft.com/image/apps.552.66777443557046310.abf0f423-a960-4f91-982f-7c0e898cf325.a2d1f0d5-3fa3-4494-a092-dab2e95ec3ee?q=90&w=177&h=265',
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
}
