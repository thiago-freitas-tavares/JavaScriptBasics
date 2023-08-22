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

- `Navegador http://127.0.0.1:5500/index.html`

5. botão direito na tela -> Inspecionar -> aba Console -> mensagem do statement console.log é exibida.

- `index.html`

6. uma aplicação real pode ter milhares de linhas, é interessante separar o código [script] do arquivo HTML.
Separation of concerns: HTML controla o conteúdo e JavaScript o comportamento.

`JAVASCRIPTBASICS`: New File... -> index.js

- `index.js`

7. retira o código do [script] do index.html e coloca dentro do index.js.
uma aplicação real pode ter centenas de arquivos JavaScript.

- `index.html`

8.  cria atributo src (source) no [script] para referenciar o arquivo js no html.

- `Navegador`

9. nodejs.org -> Download versão 18.17.1 LTS -> instalar
Node é um programa que inclui o interpretador (máquina virtual) JavaScript V8 do Google, o mesmo utilizado no Google Chrome.

- `Windows Command Prompt`

 10. cd C:\Users\Xis\OneDrive\Documentos\VSCodeProjects\JavaScriptBasics -> node index.js -> retorna a mesma mensagem do console.

- `VS Code`

11. New Terminal -> Command Prompt -> node index.js -> retorna a mesma mensagem do console.

- `index.js`

12. keyword let para declarar variável firstName e registra o conteúdo da variável no console (se nenhum valor for atribuído à variável, ela retorna undefined).
nome de variáveis em camel notation (1a minúscula, 2a e demais maiúsculas).

13. keyword let para declarar variáveis lastName, age, isApproved e selectedColor. Até poderiam ser declaradas na mesma linha do firstName, mas por boas práticas, sempre declarar cada variável em uma linha.

14. keyword const para declarar constante interestRate. Uma constante não pode ter o seu valor alterado, já uma variável sim.

* Tipos de dados
- Primitive/Value Types: string, number, boolean, undefined e null.
- Reference Types: object, array e function.

* Tipos de linguagem
- static: não permite com que uma variável mude de tipo.
- dynamic: permite com que uma variável mude de tipo.

- `Navegador http://127.0.0.1:5500/index.html`
15. Inspecionar -> aba Console -> typeof firstName -> retorna 'string'
aba console -> firstName = 1 -> typeof firstName -> retorna 'number'
aba console -> typeof selectedColor -> retorna 'object'
salvei os comandos typeof no argumento do comando console.log no index.js.

- `index.js`

16. múltiplas variáveis relacionadas podem ser armazenadas em um objeto.
keyword let ou const para declarar objeto person com {key-value pairs name e address}, que serão as propriedades do objeto.

* Formas de Acessar o Objeto
- Dot Notation: deve ser utilizada como padrão.
- Bracket Notation: utilizada qdo a propriedade é desconhecida até o runtime.

17. keyword let ou const para declarar array selectedColors com [cores selecionadas], que possui o primeiro item na posição 0 e assim por diante.
uma vez que JavaScript é uma linguagem dinâmica, os elementos de um array podem ser de tipos diferentes e ser alterados a qualquer momento.

18. keyword function para declarar função greet com parâmetro name1 e name2.
função é um conjunto de declarações que realizam uma tarefa ou calculam um valor.

19. keyword function para declarar função square com parâmetro number.