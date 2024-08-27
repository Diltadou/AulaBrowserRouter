import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ListarProdutos from '../components/ListaProdutos';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function Home() {
  const [produtos, setProdutos] = useState([
    {
      id: 1,
      nome: 'N64 Console',
      preco: 1769.00,
      imagem: 'https://m.media-amazon.com/images/I/71XgAUozIaL.__AC_SX300_SY300_QL70_ML2_.jpg',
    },
    {
      id: 2,
      nome: 'Portátil Steam Deck',
      preco: 5323.52,
      imagem: 'https://cdn.awsli.com.br/800x800/2557/2557636/produto/212159824/61k6yr7gcol-_ac_sx679_-sqwvjt.jpg',
    },
    {
      id: 3,
      nome: 'Console Xbox série X',
      preco: 4188.00,
      imagem: 'https://m.media-amazon.com/images/I/516pVDAQMnL.__AC_SX300_SY300_QL70_ML2_.jpg',
    },
    {
      id: 4,
      nome: 'Sega Genesis',
      preco: 2005.00,
      imagem: 'https://m.media-amazon.com/images/I/51PCiqTcClL.__AC_SY300_SX300_QL70_ML2_.jpg',
    },
    {
      id: 5,
      nome: 'Console Nintendo Switch',
      preco: 1890.00,
      imagem: 'https://m.media-amazon.com/images/I/61Uya8nseoL.__AC_SY300_SX300_QL70_ML2_.jpg',
    },
  ]);

  return (
    <div>
      <Header />
      <main className="main-content">
        <Carousel
          infiniteLoop
          useKeyboardArrows
          autoPlay
          showArrows
          showStatus={false}
          showThumbs={false}
          dynamicHeight
        >
          {[
            "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1030840/header.jpg?t=1724260178",
            "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/271590/header.jpg?t=1720472998",
            "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1245620/header.jpg?t=1721682743",
            "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/105600/header.jpg?t=1666290860",
            "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/553850/header_brazilian.jpg?t=1724260543"
          ].map((src, index) => (
            <div key={index}>
              <img src={src} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </Carousel>

        <h1>Produtos em Destaque</h1>
        <ListarProdutos produtos={produtos} />
      </main>
      <Footer />
    </div>
  );
}
