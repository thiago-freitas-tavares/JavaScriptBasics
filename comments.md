# Conteúdo JavaScript

* Pilares de um Programa Orientado a Objeto (POO)

1. `Encapsulamento (Encapsulation)`: variáveis (propriedades) e funções (métodos) relacionadas agrupadas em um objeto = {variável1, variável2, função1, ...}, com isso, não é necessário declarar essas variáveis como parâmetros na função.

2. `Abstração (Abstraction)`: ocultar algumas propriedades e/ou métodos do objeto com o intuito de simplificar a interface e isolar o impacto de mudanças no código

3. `Herança (Inheritance)`: permite com que objetos possam utilizar propriedades e métodos de outro objeto para reduzir redundância no código.

4. `Polimorfismo (Polymorphism - many forms)`: implementação de métodos em diferentes objetos para utilizar as propriedades e métodos de outro objeto de formas diferentes, reduzindo bastante a utilização de if/else e/ou switch/case.

# HTML

- `VS Code`: JAVASCRIPTBASICS -> New File... -> index.html

1. `index.html`: ! + tab gera um boilerplate code HTML básico.
boilerplate: linhas de código que podem ser reutilizadas com pouca ou nenhuma alteração.

2. `index.html`: botão direito -> Open with Live Server (extensão do VS Code).
Live Server permite abrir arquivos HTML em um servidor local.
navegador padrão é aberto no endereço http://127.0.0.1:5500/index.html.

3. `index.html`: o [script] pode ser inserido no [head] ou [body], porém, é mais interessante no final do [body], depois de todos elementos, para não correr o risco do navegador ficar um tempo ocupado executando o código JavaScript sem ter renderizado o conteúdo da página -> bad user xp.

4. `index.html`: cria um statement para registrar uma mensagem no console através do método log.
statement (declaração): pedaço de código que expressa uma ação a ser realizada.

5. `Navegador http://127.0.0.1:5500/index.html`: botão direito na tela -> Inspecionar -> aba Console -> mensagem do statement console.log é exibida.

6. `index.html`: uma aplicação real pode ter milhares de linhas, é interessante separar o código [script] do arquivo HTML.
Separation of concerns: HTML controla o conteúdo e JavaScript o comportamento.

# JavaScript

- `VS Code`: JAVASCRIPTBASICS -> New File... -> index.js

7. `index.js`: retira o código do [script] do index.html e coloca dentro do index.js.
uma aplicação real pode ter centenas de arquivos JavaScript.

8. `index.html`: cria atributo src (source) no [script] para referenciar o arquivo js no html.

# Node

9. `Navegador`: nodejs.org -> Download versão 18.17.1 LTS -> instalar
Node é um programa que inclui o interpretador (máquina virtual) JavaScript V8 do Google, o mesmo utilizado no Google Chrome.

10. `Windows Command Prompt`: cd C:\Users\Xis\OneDrive\Documentos\VSCodeProjects\JavaScriptBasics -> node index.js -> retorna a mesma mensagem do console.

11. `VS Code`: New Terminal -> Command Prompt -> node index.js -> retorna a mesma mensagem do console.

# JavaScript: Variável (let) e Constante (const)

12. `index.js`: keyword let para declarar variável firstName e registra o conteúdo da variável no console (se nenhum valor for atribuído à variável, ela retorna undefined).
nome de variáveis em camel notation (1a minúscula, 2a e demais maiúsculas).

13. `index.js`: keyword let para declarar variáveis lastName, age, isApproved e selectedColor. Até poderiam ser declaradas na mesma linha do firstName, mas por boas práticas, sempre declarar cada variável em uma linha.

14. `index.js`: keyword const para declarar constante interestRate. Uma constante não pode ter o seu valor alterado, já uma variável sim.

# Tipos de dados
- Primitive/Value Types: string, number, boolean, undefined e null.
- Reference Types: object, array e function.

# Tipos de linguagem
- static: não permite com que uma variável mude de tipo.
- dynamic: permite com que uma variável mude de tipo.

15. `Navegador http://127.0.0.1:5500/index.html`: Inspecionar -> aba Console -> typeof firstName -> retorna 'string'
aba console -> firstName = 1 -> typeof firstName -> retorna 'number'
aba console -> typeof selectedColor -> retorna 'object'
salvei os comandos typeof no argumento do comando console.log no index.js.

# Objeto

16. `index.js`: múltiplas variáveis relacionadas podem ser armazenadas em um objeto.
keyword let ou const para declarar objeto person com {key-value pairs name e address}, que serão as propriedades do objeto.

* Formas de Acessar o Objeto
- Dot Notation: deve ser utilizada como padrão.
- Bracket Notation: utilizada qdo a propriedade é desconhecida até o runtime.

# Array

17. `index.js`: keyword let ou const para declarar array selectedColors com [cores selecionadas], que possui o primeiro item na posição 0 e assim por diante.
uma vez que JavaScript é uma linguagem dinâmica, os elementos de um array podem ser de tipos diferentes e ser alterados a qualquer momento.

# Função

18. `index.js`: keyword function para declarar função greet com parâmetro name1 e name2.
função é um conjunto de declarações que realizam uma tarefa ou calculam um valor.

19. `index.js`: keyword function para declarar função square com parâmetro number.

# Objeto Literal (Object Literal)

20. `index.js`: keyword const para declarar objeto literal circle com os elementos radius, location e draw em seus key-value pairs.

- se algum dos elementos do objeto for uma função, ela e chamada de método, e dizemos que um objeto com métodos possui comportamento (behavior).
- se quisermos criar um segundo objeto circle, temos que duplicar todo o código.
- duplicar um objeto com métodos não é interessante, pois em uma eventual falha, o mesmo método terá que ser corrigido em múltiplos lugares.

# Função Fábrica (Factory Function)

21. `index.js`: keyword function para declarar a função fábrica chamada createCircle com parâmetros radius, x e y, retornando os key-value pairs.

- uma função retornando os key-value pairs de um objejto permite a criação de múltiplos objetos sem a necessidade de duplicar código.

# Função Construtora (Constructor Function)

22. `index.js`: keyword function para declarar a função construtora chamada CircleConstructor com parâmetros radius, x e y.

- a convenção de nomenclatura para construtores é a de se utilizar a primeira letra em maiúsculo. JavaScript não possui o conceito de Classe.

23. `index.js`: keyword this para setar as propriedades e métodos do objeto que está executando o código do construtor.

- o operador new automaticamente cria um objeto vazio, faz com que a keyword this da função construtora aponte para este objeto e retorna o objeto da função (é como se a função tivesse um - return this; - implícito).
- sem o operador new, por default, a keyword this aponta para o objeto global do ambiente utilizado para executar o código (um navegador possui objeto global chamado window e o node possui objeto global chamado global, por exemplo).

* a utilização entre factory function e constructor function fica a critério do desenvolvedor. Eu acho que prefiro construtor, pois utiliza menos linhas de código.

