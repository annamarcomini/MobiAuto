## Mobiauto

O Mobiauto foi criado para ser um site de pesquisas de preços de carros de acordo com a tabela Fipe, incluindo três campos de pesquisas: marca, modelo e ano. Assim que completar essas 3 informações o botão é habilitado para que você navegue até a página que mostra exatamente o preço do carro escolhido. Você pode testar o projeto acessando o link: https://mobiauto-five.vercel.app/

## Pipeline CI/CD

Este projeto possue uma pipeline de CI/CD implementada no git hub actions que executa os testes do projeto e o lint, ao passar pelos dois testes o projeto está apto para iniciar automaticamente a esteira de deploy na vercel.

## Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- Next.js
- Material UI
- Emotion
- TypeScript
- Jest
- Testing Library
- Git e Github
- Vercel
- Pipeline Deploy Vercel
- CI/CD
- Api da tabela Fipe https://deividfortuna.github.io/fipe/.

Além disso, para garantir um melhorar a padronização do código e sanitização foram usadas as tecnologias abaixo:

- Husky: Para executar os scripts de verificação antes de cada commit, esse projeto possue dois scripts executados pelo husky, eslint e commitlint.
- Eslint: Padronização do código.
- Commitlint: Manter um padrão da forma de como os commits são escritos e muito importante para um crescimento de um projeto. Commitlint impedi que commits que estejam fora do padrão do conventional commits seja realizado.

## Instalação

Este projeto utiliza o npm.

Clone o repositório para um diretório em sua máquina e execute o seguinte comando:

```bash
npm install
```

## Execução do Projeto

Para executar o projeto, rode o comando abaixo:

```bash
npm run dev
```

## Funcionalidades

. Página de consulta sem o campo de modelo habilitado, pois o input de marca está vazio. Também inicia sem o ano e sem o botão habilitado.
![Captura de tela 2024-05-27 132500](https://github.com/annamarcomini/github-explorer/assets/116853315/a1c6dba0-c78a-4ebe-9803-0a708b545ffb)

. Página de consulta com o campo modelo habilitado, pois o campo de marcas foi preenchido. Mas ainda está sem o ano e sem o botão habilitado.
![Captura de tela 2024-05-27 132511](https://github.com/annamarcomini/github-explorer/assets/116853315/7eedafef-7193-4eaa-829a-f125bc6147fe)

. Página de consulta com o campo ano aparecendo, pois os campos marca e modelo foram preenchidos. Mas ainda está sem o botão habilitado.
![Captura de tela 2024-05-27 132520](https://github.com/annamarcomini/github-explorer/assets/116853315/4c48bca9-c7ee-470e-956a-c619b991fd71)

. Página de consulta com o botão habilitado, pois todos os campos foram preenchidos.
![Captura de tela 2024-05-27 132558](https://github.com/annamarcomini/github-explorer/assets/116853315/8825d8cb-5d07-41b2-8701-40951f772fdc)

. Página de exibição do preço de acordo com o carro escolhido na página home.
![Captura de tela 2024-05-27 134416](https://github.com/annamarcomini/github-explorer/assets/116853315/86d0c839-d80e-487a-a5ba-6228fbcf7eca)
