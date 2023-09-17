# Conteúdo JavaScript (JS)

- JS foi originalmente desenvolvido para ser executado somente em navegadores através de seus respectivos JS Engines (Firefox SpiderMonkey e Google V8, por exemplo).

- Em 2009 o JS Engine V8 foi integrado a um programa C++ chamado Node, permitindo a execução de código JS fora de um navegador.

- ECMAScript são as especificações e regras de padronização mundial do JS.

* Pilares de um Programa Orientado a Objeto (POO)

1. `Encapsulamento (Encapsulation)`: variáveis (propriedades) e funções (métodos) relacionadas agrupadas em um objeto = {variável1, variável2, função1, ...}, com isso, não é necessário declarar essas variáveis como parâmetros na função.

2. `Abstração (Abstraction)`: ocultar algumas propriedades e/ou métodos do objeto com o intuito de simplificar a interface e isolar o impacto de mudanças no código.

3. `Herança (Inheritance)`: permite com que objetos possam utilizar propriedades e métodos de outro objeto para reduzir redundância no código.

4. `Polimorfismo (Polymorphism - many forms)`: implementação de um método em diferentes objetos (mesmo nome), que realiza diferentes ações, de acordo com as propriedades do objeto chamado, reduzindo bastante a utilização de if/else e/ou switch/case.

# JavaScript Browser Coding

1. `Navegador`: botão direito na tela -> Inspecionar -> aba Console

2. `Navegador`: console.log('Hello, World...') -> Enter

3. `Navegador`: 2 + 2 -> Enter

3. `Navegador`: alert('Hello')

# JavaScript VS Code + Live Server

# HTML

- `VS Code`: JAVASCRIPTBASICS -> New File... -> index.html

1. `index.html`: ! + tab gera um boilerplate code HTML básico.
boilerplate: linhas de código que podem ser reutilizadas com pouca ou nenhuma alteração.

2. `index.html`: botão direito -> Open with Live Server (extensão do VS Code).
Live Server permite abrir arquivos HTML em um servidor local.
navegador padrão é aberto no endereço http://127.0.0.1:5500/index.html.

3. `index.html`: o [script] pode ser inserido no [head] ou [body], porém, é mais interessante no final do [body], depois de todos elementos, para não correr o risco do navegador ficar um tempo ocupado executando o código JS sem ter renderizado o conteúdo da página -> bad user xp.

4. `index.html`: cria um statement para registrar uma mensagem no console através do método log.
statement (declaração): pedaço de código que expressa uma ação a ser realizada.

5. `Navegador http://127.0.0.1:5500/index.html`: botão direito na tela -> Inspecionar -> aba Console -> mensagem do statement console.log é exibida.

6. `index.html`: uma aplicação real pode ter milhares de linhas, é interessante separar o código [script] do arquivo HTML.
Separation of concerns: HTML controla o conteúdo e JS o comportamento.

# JavaScript

- `VS Code`: JAVASCRIPTBASICS -> New File... -> index.js

7. `index.js`: retira o código do [script] do index.html e coloca dentro do index.js.
uma aplicação real pode ter centenas de arquivos JS.

8. `index.html`: cria atributo src (source) no [script] para referenciar o arquivo js no html.

# Node

9. `Navegador`: nodejs.org -> Download versão 18.17.1 LTS -> instalar
Node é um programa que inclui o interpretador (máquina virtual) JS V8 do Google, o mesmo utilizado no Google Chrome.

10. `Windows Command Prompt`: cd C:\Users\Xis\OneDrive\Documentos\VSCodeProjects\JavaScriptBasics -> node index.js -> retorna a mesma mensagem do console.

11. `VS Code`: New Terminal -> Command Prompt -> node index.js -> retorna a mesma mensagem do console.

# JavaScript: Variável (var/let) e Constante (const)

- em JS toda declaração de variável é elevada/içada (hoisting) ao topo do seu contexto de execução (if, for, while, function), ou seja, ao ser executado, um código roda primeiro as declarações dentro de cada contexto, para depois rodar o restante do código (é possível utilizar uma variável linhas antes de declará-la, pois na execução, o JS faz o hoisting).

- declarar uma variável através da keyword `var` permite com que você a acesse dentro de qualquer escopo do código.

- para declarar variáveis que serão utilizadas apenas dentro de um pequeno trecho do código, utilizamos a keyword `let`, introduzida no ECMAS6, com escopo de bloco (variável será acessível apenas dentro do seu contexto de execução).

- a declaração de constantes com a keyword `const` também tem escopo de bloco.

12. `index.js`: keyword let para declarar variável firstName e registra o conteúdo da variável no console (se nenhum valor for atribuído à variável, ela retorna undefined).
nome de variáveis em camel notation (1a minúscula, 2a e demais maiúsculas).

13. `index.js`: keyword let para declarar variáveis lastName, age, isApproved e selectedColor. Até poderiam ser declaradas na mesma linha do firstName, mas por boas práticas, sempre declarar cada variável em uma linha.

14. `index.js`: keyword const para declarar constante interestRate. Uma constante não pode ter o seu valor alterado, já uma variável sim.

# Tipos de dados
- Primitive/Value Types: string, number, boolean, symbol, undefined e null.
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
uma vez que JS é uma linguagem dinâmica, os elementos de um array podem ser de tipos diferentes e ser alterados a qualquer momento.

# Função

18. `index.js`: keyword function para declarar função greet com parâmetro name1 e name2.
função é um conjunto de declarações que realizam uma tarefa ou calculam um valor.

19. `index.js`: keyword function para declarar função square com parâmetro number.

# Objeto Literal (Object Literal)

20. `index.js`: keyword const para declarar objeto literal firstCircle com os elementos radius, location e draw em seus key-value pairs.

- se algum dos elementos do objeto for uma função, ela é chamada de método, e dizemos que um objeto com métodos possui comportamento (behavior).
- se quisermos criar um segundo objeto firstCircle, temos que duplicar todo o código.
- duplicar um objeto com métodos não é interessante, pois em uma eventual falha, o mesmo método terá que ser corrigido em múltiplos lugares.

# Função Fábrica (Factory Function)

21. `index.js`: keyword function para declarar a função fábrica chamada createCircle com parâmetros radius, x e y, retornando os key-value pairs.

- uma função retornando os key-value pairs de um objejto permite a criação de múltiplos objetos sem a necessidade de duplicar código.

# Função Construtora (Constructor Function)

22. `index.js`: keyword function para declarar a função construtora chamada CircleConstructor1 com parâmetros radius, x e y.

- a convenção de nomenclatura para construtores é a de se utilizar a primeira letra em maiúsculo, similar a classes em outras linguagens de programação, mas até 2015 JS não possuía classe.

# Class-Based Object-Oriented Languages (Python, Java, C++)
- classes permitem a criação de novos tipos de dados.
- classical inheritance: classe funciona como um molde para a criação de instâncias desta classe, chamadas de objetos.

# Prototype-Based Object-Oriented Languages  JavaScript, Lua, Cecil)
- prototypal inheritance: novos objetos são criados a partir de objetos preexistentes.
- ECMA introduziu em 2015 no JS uma pseudo-classical inheritance, que em questão de código (sintaxe) se parece muito com a classical inheritance, mas não muda a essência do JS, que é prototipada.

23. `index.js`: keyword this para setar as propriedades e métodos do objeto que está executando o código do construtor.

- o operador new automaticamente cria um objeto vazio, faz com que a keyword this da função construtora aponte para este objeto e retorna o objeto da função (é como se a função tivesse um - return this; - implícito).

- sem o operador new, por default, a keyword this aponta para o objeto global do ambiente utilizado para executar o código (um navegador possui objeto global chamado window e o node possui objeto global chamado global, por exemplo).

# Constructor Properties

24. `index.js`: console.log para apresentar as funções construtoras de cada objeto criado.

- ao criar um objeto através da sintaxe object literal, o JS engine utiliza a função construtora embutida Object() internamente. Por exemplo: o comando let x = {}; -> na verdade executa -> let x = new Object();

* Outros exemplos de built-in constructors no JS:
- new String(); -> porém, é mais simples através dos literals '', "", ``.
- new Boolean(); -> porém, é mais simples através dos literals true, false.
- new Number; -> porém, é mais simples através dos literals 1, 2, 3, ...

# Funções são Objetos em JavaScript

- 25. `index.js`: console.log para apresentar as propriedades e métodos da built-in function Function() acessadas pela função/objeto CircleFunctionConstructor.

- ao criar um objeto através da função CircleFunctionConstructor, o que o JS Engine na verdade executa está descrito da linha 152 a 163 do código.

26. `index.js`: o método call faz exatamente o que o código da linha 165 faz, cria um objeto vazio, referenciado pelo this da função e passa os argumentos.

27. `index.js`: o método apply passa os argumentos na forma de array, ao invés da forma explítida, ideal quando já se tem um array na aplicação que se deseja passar como argumento.

# Tipos de Dados
- Primitive/Value Types: string, number, boolean, symbol, undefined e null.
- Reference Types: object, function e array.

* em JS functions e arrays são objects, logo, podemos dizer que temos os dados primitivos e os objetos.

28. `index.js`: qdo o tipo primitivo b é igual ao tipo primitivo a, b assume o valor de a naquele momento.

29. `index.js`: qdo o tipo primitivo d é igual ao tipo referência (objeto) c, d assume o valor de c em qualquer momento (ambos apontam para mesmo endereço de memória).

# Adding/Removing Properties

30. `index.js`: criar propriedade perimeter para o fifthCircle atraves de dot notation ou bracket notation (exemplo de utilizacao nas linhas 34 e 35 do codigo ou qdo o nome da propriedade possuir caractere especial).

- uma vez que JS não é uma linguagem class-based, seus objetos são dinâmicos, ou seja, é possível adicionar/remover propriedades após sua definição (incluir um token passado pelo cliente ou remover um dado antes de passar o objeto ao cliente, por exemplo).

- em Python, C# ou Java, por exemplo, teríamos que alterar as classes para incluir propriedades aos objetos.

# Enumerating Properties and/or Methods

31. `index.js`: for/in loop permite iterar as propriedades e metodos de um objeto. bracket notation permite acessar os valores de cada chave.

31. `index.js`: keyword Object.keys permite acessar as propriedades e métodos de um objeto em forma de array (desta forma não é possível filtrar apenas propriedades ou métodos).

31. `index.js`: operador if/in permite verificar se uma determinada propriedade ou método está presente em um objeto.

# Abstraction - hide the details and show the essentials

- queremos implementar uma propriedade chamada defaultLocation e um método chamado computeOptimumLocation na função construtora CircleFunctionConstructorAbs, e chamá-la dentro da função draw, porém, não queremos que elas sejam acessíveis a quem consome o objeto, pois alterá-las pode bagunçar o objeto.

- além disso, qto mais propriedades/métodos públicos (public interface) houver em um objeto, maior será a complexidade de realizar futuras alterações/ajustes no código. Logo, qto mais propriedades/métodos privados (implementation details) for possível incluir em objetos, melhor.

- qdo utilizamos a keyword this dentro de um construtor para declarar variáveis/funções, elas se tornam propriedades/métodos do objeto, e qdo às declaramos sem a keyword this (apenas let ou const), estamos declarando variáveis/funções locais, que após deixarmos o contexto de execução, elas deixam de existir.

32. `index.js`: keyword let para declarar variável local defaultLocation e função local computeOptimumLocation, lembrando que uma função (neste caso draw) consegue acessar as variáveis/propriedades e funções/métodos de sua função principal (neste caso CircleFunctionConstructorAbs), conceito este chamado closure.

- conceito de scope é temporário: variáveis locais (também chamada de private members do objeto) de uma inner function só existem durante a sua execução.
- conceito de closure é definitivo: quais variáveis serão acessíveis pelas inner functions.

# Getters/Setters

- utilizando a função construtora CircleFunctionConstructorAbs como base, queremos acessar a variável local defaultLocation fora da função CircleFunctionConstructorGetSet.

- getter: função utilizada para ler (read-only) a propriedade de um objeto.
- setter: função utilizada para ler e editar a propriedade de um objeto.

33. `index.js`: keyword this para implementar um método chamado getDefaultLocation (getter), que retorna a variável local defaultlocation.

34. `index.js`: outra forma de acessar a variável local é através do built-in method Object.defineProperty(nome do objeto, nome da propriedade, key-value pairs).
desta forma, é possível acessar a defaultLocation diretamente para somente leitura através da keyword get e para edição através da keyword set.

# Exercício

- implementar um Stopwatch com os métodos start, stop, reset e a propriedade duration (tempo ligado).