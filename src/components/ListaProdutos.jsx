import React from 'react';
export default function ListarProdutos({ produtos }) {
  const calcularPrecoComDesconto = (preco, desconto) => {
    return preco - (preco * desconto / 100);
  };

  return (
    <div className="produto-container">
      {produtos.map((produto) => (
        <div key={produto.id} className="produto-card">
          <img src={produto.imagem} alt={produto.nome} />
          <div className="produto-info">
            <h2 className="produto-nome">{produto.nome}</h2>
            <p className="produto-preco">
              Preço: ${produto.preco}
            </p>
            {produto.desconto && (
              <>
                <p className="produto-desconto">
                  Desconto: {produto.desconto}%
                </p>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
