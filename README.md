# Projeto 12 - React Testing Library

Oi. Este foi um dos projetos que eu fiz durante meu curso na Trybe. Confira os detalhes dele abaixo.




## Nome do Projeto
React Testing Library (Biblioteca de Testes do React)

## Linguagens e Ferramentas Utilizadas

 - [Jest](https://jestjs.io/pt-BR/)
 - [Biblioteca React](https://pt-br.reactjs.org/)
 - [Biblioteca de Testes React](https://testing-library.com/docs/react-testing-library/intro/)


## Objetivos do Projeto
"Neste projeto foi criada uma versão simplificada, sem persistência no banco de dados, de uma loja online, desenvolvidas em grupo suas funcionalidades de acordo com demandas definidas em um quadro Kanban, em um cenário próximo ao do mercado de trabalho." (Trecho retirado do README do projeto da Trybe).
A aplicação consome uma [API do Mercado Livre](https://developers.mercadolibre.com/), e monta um MarketPlace online, no qual é possível navegar pelos produtos e adicioná-los ao carrinho. O intuito desse projeto foi, principalmente, desenvolver a prática de desenvolvimento em grupo, utilizando a mentalidade de metodologias ágeis (como o Kanban), e aplicando os conhecimentos de React adquiridos. 

<br/>
Abaixo estão capturas de tela do projeto (vale lembrar que o objetivo principal do projeto era desenvolver a aplicação com foco na arquitetura do site utilizando React Router, e, por isso, não foi desenvolvido o CSS, portanto a aplicação está sem estilização".
<br/>

<br/>
Página Inicial, com uma aba de categorias, um local para buscas e um link para o carrinho:

![Screenshot Inicial](screenshot1.png)

<br/>
Na página inicial, ao clicar em uma categoria, os produtos disponíveis são dispostos abaixo (no caso, alimentos e bebidas):

![Screenshot Categoria](screenshot2.gif)


<br/>
Na página inicial, ao buscar algum termo, os produtos encontrados são dispostos abaixo (no caso, a busca foi "brinquedo"):

![Screenshot Busca](screenshot3.gif)

<br/>
Ao clicar em um item, é direcionado para a página de detalhes respectiva do produto.
Na página do produto é possível adicioná-lo ao carrinho, fazer avaliações, e também há um link para a página de carrinho:

![Screenshot detalhes](screenshot4.gif)

<br/>
Na página de carrinho, é possível alterar as quantidades de cada produto, removê-los, ou clicar no link que redireciona para a finalização da compra:

![Screenshot carrinho](screenshot5.png)

<br/>
Na página de checkout (finalização), é possível ver um resumo dos produtos que estão sendo comprados, e digitar um formulário para pagamento (inacabado), e, por fim, terminar a compra:

![Screenshot checkout](screenshot6.png)

## Instruções para visualização
Comando para clonar o projeto:
 - `git clone git@github.com:BrunoSayago/projeto-11-FrontEndOnlineStore.git`
 
Se necessário, instalar as dependências:
 - `npm install`
  
O projeto pode ser visualizado no navegador utilizando o comando:
- `npm start`
