# Hangman Game (Jogo da Forca) em Javascript
![GitHub](https://img.shields.io/github/license/luizalaquini/hangman-game)
![GitHub repo size](https://img.shields.io/github/repo-size/luizalaquini/hangman-game)
![GitHub language count](https://img.shields.io/github/languages/count/luizalaquini/hangman-game)
![GitHub top language](https://img.shields.io/github/languages/top/luizalaquini/hangman-game)
![GitHub followers](https://img.shields.io/github/followers/luizalaquini?label=follow&style=social)

Running Page: https://gentle-gelato-6d0e1f.netlify.app/

## Sobre

Jogo da Forca feito com Javascript, inspirado no projeto https://codesandbox.io/s/video-jogo-da-forca-k26g5f?file=/index.html (inclusive o svg da forca foi pego diretamente desse código).

Alguns detalhes interessantes sobre a implementação:
- As entradas aceitas são: letras maiúsculas e minúsculas (incluindo o caractere cidilha 'ç').
- O código suporta palavras simples e compostas separadas tanto por espaço quanto por hífen.
- O jogo ignora acentos nas palavras.
- Não é necessário confirmar a escolha da letra.
- O jogo exibe um aviso caso o usuário esteja tentando repetir uma letra.
- O jogo exibe a 'categoria' da palavra a ser adivinhada.
- Foi elaborado um campo especial para utilização em celular ou tablet.
- Caso derrota, o jogo exibe qual era a palavra secreta.
- Até o momento, o banco de palavras é um objeto local. Pode ser que eu venha a implemtentar um fetch de dados da web futuramente.

## Tecnologias Utilizadas
- HTML 5
- CSS 3 
- Javascript
- Bootstrap

## Layout
Exibição:
![layout](https://user-images.githubusercontent.com/72242547/176797116-bd94484d-bb5c-479d-89ca-beb7561dccff.png)

Aviso caso letra repetida:
![layout-letra-repetida](https://user-images.githubusercontent.com/72242547/176804712-22dcd37c-df1b-4a42-b623-f2b0b8cb7f17.png)

Vitória:
![layout-ganhou](https://user-images.githubusercontent.com/72242547/176804526-eb333aa5-5ab7-4ff5-9138-4a22b58ccb92.png)

Derrota:
![layout-perdeu](https://user-images.githubusercontent.com/72242547/176804533-4c411497-9ed8-4dc5-bb4a-6a84dc1ca387.png)

## Autor 

Luiza Batista Laquini

LinkedIn: https://www.linkedin.com/in/luizalaquini/
