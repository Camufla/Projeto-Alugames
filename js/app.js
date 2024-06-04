/*
  buscar o jogo quando clicado;
  buscar a imagem para fazer o efeito alugado;
  buscar o botao para efeito de trocar a palavra.

  condicioan para manipular a imagem e o botão;

  usamos buscar: getElement, e querySelector
  
  usamos para manipular:
    id;
    .conatainer();
    .classList();
    .remove();
    .add();
 */


function alterarStatus(id) {
  //buscando o li que envolve toda as informações do jodo com interpolaçõa variar os jodos
  let jogoClicado = document.getElementById(`game-${id}`);
  //capturando a imagem do jogo espeficando a busca diretamenete pela li com a variável jogoClicado
  let imagem = jogoClicado.querySelector('.dashboard__item__img');
  let botao = jogoClicado.querySelector('.dashboard__item__button');
  
  if(imagem.classList.contains('dashboard__item__img--rented')) {
    imagem.classList.remove('dashboard__item__img--rented');
    botao.classList.remove('dashboard__item__button--return');
    botao.textContent = 'alugar'
    
  } else {
    imagem.classList.add('dashboard__item__img--rented');
    botao.textContent = 'Devolver'
    botao.classList.add('dashboard__item__button--return');

  }

}

