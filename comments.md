# JavaScript

- `JAVASCRIPTBASICS`: New File... -> index.html

- `index.html`
1. ! + tab gera um boilerplate code HTML básico.
boilerplate: linhas de código que podem ser reutilizadas com pouca ou nenhuma alteração.
2. botão direito -> Open with Live Server (extensão do VS Code).
Live Server permite abrir arquivos HTML em um servidor local.
navegador padrão é aberto no endereço http://127.0.0.1:5500/index.html.
3. o [script] pode ser inserido no [head] ou [body], porém, é mais interessante no final do [body], depois de todos elementos, para não correr o risco do navegador ficar um tempo ocupado executando o código JavaScript sem ter renderizado o conteúdo da página -> bad user xp.
4. cria um statement para registrar uma mensagem no console através do método log.
statement (declaração): pedaço de código que expressa uma ação a ser realizada.

- `Navegador`
5. botão direito -> Inspecionar -> aba Console -> mensagem do statement console.log é exibida.

- `index.html`
6. uma aplicação real pode ter milhares de linhas, é interessante separar o código [script] do arquivo HTML.
Separation of concerns: HTML controla o conteúdo e JavaScript o comportamento.

`JAVASCRIPTBASICS`: New File... -> index.js

- `index.js`
7. retira o código do [script] do index.html e coloca dentro do index.js.
uma aplicação real pode ter centenas de arquivos JavaScript.

- `index.html`

8.  cria atributo src (source) no [script] para referenciar o arquivo js no html.

NODE