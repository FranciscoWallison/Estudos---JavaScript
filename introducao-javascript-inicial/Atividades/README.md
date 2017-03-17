:mortar_board: ##Sabemos que o navegador entende apenas HTML e que se colocarmos scripts diretamente no corpo da mensagem ele será interpretado como texto. Como resolvemos isso?
A tag ``` <script> ``` é responsável por nos ajudar a resolver este problema. Tudo que declaramos dentro da tag ``` <script>  ``` é interpretado como Javascript quando o navegador passar por ali.
No caso abaixo:
```
<script>
alert("Olá mundo");
</script>
```
Quando o navegador passar pela tag abaixo ele vai interprar o texto "alert("Olá mundo");" e irá executar a função alert(), que é responsável por exibir uma pop up com a mensagem Olá mundo.

***
:mortar_board: ##Ao abrir o HTML abaixo em um navegador, o que irá acontecer ? 
```
<html>
    <head>
    </head>
    <body>
        <h1>Minha página com Javascript</h1>
        <script>
            Olá mundo!
        </script>
    </body>
</hmtl>
```
######Será exibido apenas o texto do ```<h1>``` e um erro no console do desenvolvedor. :white_check_mark:
Sabemos que o navegador vai lendo de cima para baixo o contéudo do HTML e interpretando o que ele lê de acordo com as tags da página. Neste caso, ele irá ler a tag ``` <h1> ``` e irá exibir o seu contéudo com letras grandes, característico de um ``` <h1>``` .
Porém, ao ler a tag ``` <script> ``` o navegador entende que todo texto que está dentro da tag ```<script> ```deve ser lido como um Javascript, logo ele vai tentar interpretar a frase "Olá Mundo" como se fosse uma função Javascript válida, o que sabemos que não é, e então ele exibirá um erro de Unexpected Identifier, que nada mais é o que ele dizendo atráves do console de desenvolvedor que ele não entende "Olá mundo" como uma de suas funções.

Saber identificar e interpretar os erros do console é uma habilidade de todo bom desenvolvedor Javascript, então é bom começarmos a praticá-la desde já.

Se desejamos que uma mensagem seja exibida no console, devemos sempre chamar a função ```console.log()```, que é a função que recebe como parâmetro o contéudo da mensagem que queremos exibir no console.

***
:mortar_board: ##Marque as alternativas abaixo que contêm características ou funcionalidades do console de desenvolvedor do navegador:
######Executar funções Javascript diretamente no console. :white_check_mark:
######Exibir erros de códigos Javascript carregados pelo navegador. :white_check_mark:
######Pode ser aberto com a tecla de atalho CTRL + SHIFT + J no Windows/Linux e CMD + ALT + J no Mac, :white_check_mark:
######Ver os resultados de funções que imprimem no console, como a console.log(). :white_check_mark:
```
O console do desenvolvedor é uma ferramenta muito poderosa e versátil para o desenvolvedor Javascript. Com ele conseguimos rapidamente ser notificados de possíveis erros em nosso código, podemos executar funções, observar a saída de algumas funções e executar pequenos testes das funcionalidades do Javascript de modo rápido.

É uma boa prática sempre que estivermos testando nosso site ficar com o console aberto, para ficar monitorando possíveis erros em nosso código.

Como utilizar o console é algo bastante corriqueiro, podemos nos aproveitar dos atalhos CTRL + SHIFT + J ( Win/Linux) ou CMD + ALT + J (Mac) para ter acesso ao console de modo rápido.
```
***
:mortar_board: ##Qual código abaixo importa corretamente um arquivo .js chamado contador.js que se encontra na mesma pasta de nosso arquivo HTML?
Sabemos que é importante fazer a separação de mundos HTML e Javascript, por isso criamos arquivos externos para guardar nosso código. Só que ao separar o Javascript em um arquivo externo, precisamos lembrar de importa-lo no HTML e para isso precisamos utilizar a tag ``` <script> ``` assim: 
```
<script src="contador.js"></script>
```

***
:mortar_board: ##Qual opção abaixo substitui o hasheado (XXXX) por um código que exibe uma pop up com a mensagem bem vindo ?
```
XXXX mensagem = "Seja bem vindo ao meu site!"

XXXX(mensagem);
```
###### ```var``` e ```alert``` respectivamente. :white_check_mark:

Queremos declarar a variável mensagem, por isso devemos utilizar a palavra var para criar esta entidade:
``` var mensagem = "Seja bem vindo ao meu site!" ```
e logo em seguida desejamos exibir uma pop-up, logo é necessário utilizar a função alert que é responsável por isso:
``` alert(mensagem); ```

***
:mortar_board: ##O que contêm a variável ```document``` do Javacript ?
######Ela é a representação do DOM ou Document Object Model, que é a representação da nossa página HTML para o navegador, que é utilizada pelo Javascript para manipular a página.:white_check_mark:
O document é uma variável muito importante do Javascript. Ela contêm o DOM ou Document Object Model, que é como o navegador enxerga o HTML utilizado por ele para renderizar a página.
O navegador, ao ler o seu arquivo HTML, cria uma cópia em memória daquele HTML e a partir dessa cópia ele vai desenhando a sua página, colocando as tags e aplicando os estilos. Esta cópia é o que chamamos de DOM uma representação em memória do HTML do seu arquivo, que o navegador usa para desenhar a página, e a variável document é quem contêm o DOM.

Por isso, quando dizemos que com o Javascript nos estamos manipulando o DOM, estamos manipulando o que o navegador renderizou. Então ao trocar algum texto do DOM, o navegador imediatamente desenha novamente aquele texto, pois o DOM é o que o navegador usa para desenhar o seu site.

Outra caracteristica interessante, é que como manipulamos o DOM , quando trocamos um texto de um ``` <h1> ```ou um estilo de um elemento, na verdade estamos alterando a representação em memória , o que faz com que o arquivo fonte que contêm seu HTML fique intacto!

***
:mortar_board:  ##Sabemos que o document contêm a representação de todo o HTML da nossa página, porém na maioria dos casos estamos interessados em apenas uma parte do HTML e não em ele todo. Qual função podemos utilizar na variável document para especificar que queremos trazer apenas uma parte do HTML ?
######document.querySelector();:white_check_mark:

Quando desejamos pegar apenas parte do HTML, devemos utilizar a função querySelector(). A função querySelector faz a busca através de seletores CSS para trazer o HTML que você está interessado. Por exemplo, no caso abaixo:
```<h1 class="titulo"> ```Meu primeiro site```</h1>```
Podemos buscar este ```<h1>``` passando o seletor CSS correto para a função querySelector. Utilizando o setor de tag, podemos buscar assim:

document.querySelector("h1");
E utilizando um seletor CSS de classe, ficaria assim:

``` document.querySelector(".titulo"); ```
Neste caso, ambas as funções retornaria o h1. Ter domínio dos seletores CSS é importante se você deseja trabalhar bem com o Javascript!

***
:mortar_board:  ##Temos o seguinte fragmento HTML:
```

<table>
    <thead>
        <tr>
            <th>Nome</th>
            <th>Peso(kg)</th>
            <th>Altura(m)</th>
            <th>Gordura Corporal(%)</th>
            <th>IMC</th>
        </tr>
    </thead>
    <tbody id="tabela-pacientes">
        <tr class="paciente" id="primeiro-paciente">
            <td class="info-nome">Paulo</td>
            <td class="info-peso">100</td>
            <td class="info-altura">2.00</td>
            <td class="info-gordura">10</td>
            <td class="info-imc">0</td>
        </tr>
    </tbody>
</table>

```

Em seguida, temos o código que busca a tr que guarda os dados de um paciente. Usaremos um seletor de ID para a função document.querySelector:
```
var trPaciente = document.querySelector('#primeiro-paciente');
```

Qual das opções abaixo acessa corretamente a partir de trPaciente o peso e a altura?
######var tdPeso = trPaciente.querySelector('.info-peso');:white_check_mark:
######var tdAltura = trPaciente.querySelector('.info-altura');:white_check_mark:

Com JavaScript podemos obter um elemento pai, no caso trPaciente e dele realizar novas consultas para obter elementos filhos, como foi o caso das TD's de peso e altura.

***
:mortar_board:  ##Mariana é dona de um restaurante que troca os pratos semanalmente. Os pratos são exibidos para seus clientes em seu site como uma tabela, como a abaixo:
```
<table>
<thead>
    <th>Salada</th>
    <th>Prato Principal</th>
    <th>Acompanhamento</th>
<thead>
<tbody>
    <tr class="prato-do-dia" id="segunda">
        <td class='salada'>Alface e Tomate</td>
        <td class='principal'>Frango Grelhado</td>
        <td class='acompanhamento'>Arroz e Feijão preto</td>        
    </tr>
    ...Outros dias da semana
    <tr class="prato-do-dia" id="sexta">
        <td class='salada'>Salada de Batata</td>
        <td class='principal'>Macarrão com molho branco</td>
        <td class='acompanhamento'>Milho, ervilha e brócolis</td>        
    </tr>
</tbody>
```
Se Mariana deseja exibir o prato de cada dia em uma outra área de sua página, da forma abaixo:
```
Prato do dia!
Alface e Tomate
Frango Grelhado
Arroz e Feijão Preto
```
Qual código abaixo extrai as informações de um dia da tabela, por exemplo a sexta-feira, e imprime no console no formato que Mariana deseja?

```
var pratoDoDia = document.querySelector("#sexta");
var salada = pratoDoDia.querySelector(".salada").textContent;
var principal = pratoDoDia.querySelector(".principal").textContent;
var acompanhamento = pratoDoDia.querySelector(".acompanhamento").textContent;

console.log("Prato do dia!");
console.log(salada);
console.log(principal);
console.log(acompanhamento); 
```
:white_check_mark:

A melhor estratégia neste caso, como queremos buscar os pratos de um dia específico é primeiro buscar a ```<tr>``` que contêm os pratos deste dia, fazendo o uso da função ```document.querySelector```:
``` var pratoDoDia = document.querySelector("#sexta"); ```

Em seguida, vamos buscar dentro desta ``` <tr> ```  por os pratos específicos, então vamos utilizar a função querySelector na própria ``` <tr> ``` , afinal a função ``` querySelector() ```  é especialista em buscar, seja na página inteira quando utilizamos-a buscando no document (document.querySelector) ou quando queremos fazer uma busca em elemento específico que foi pré selecionado , como é o caso agora:

```
var salada = pratoDoDia.querySelector(".salada").textContent;
var principal = pratoDoDia.querySelector(".principal").textContent;
var acompanhamento = pratoDoDia.querySelector(".acompanhamento").textContent;
```
Já aproveitamos e imendamos na função seletora a propriedade textContent , afinal estamos interessados é no nome do prato que está escrito dentro da tag html, e não na tag em si!

Em seguida, basta apenas imprimirmos como foi solicitado:

```
console.log("Prato do dia!");
console.log(salada);
console.log(principal);
console.log(acompanhamento);
```

***
:mortar_board:  ##Aprendemos que o cálculo do índice de massa corporal (IMC) é feito dividindo o nosso peso pela altura vezes a altura, o que pode ser representado pela seguinte fórmula na linguagem JavaScript:

```
alert(78 / (1.71 * 1.71));
```

No entanto, para melhoramos a legibilidade e manutenção deste código, podemos utilizar variáveis.

Quais opções abaixo possuem o mesmo resultado da instrução anterior com o auxílio de variáveis?
```
var peso = 78;
var altura = 1.71;
var imc = peso / (altura * altura);
alert(imc);

```
Veja que uma simples instrução quando desmembrada em variáveis necessita da atenção do desenvolvedor.

***
:mortar_board:  ##Rogério era um programador da empresa Sentec Enterprises, e ele ficou responsável de fazer o site que exibe os indicadores de sua empresa, para mostrar para os clientes e possíveis investidores como a empresa havia desempenhado nos últimos anos.

O indicador é calculado como a imagem abaixo:
```
taxa de sucesso = nº vendas / nº clientes abordados X média de tentativas por cliente  
```
Rogério conseguiu obter os valores de vendas, clientes abordados e média de tentativas por cliente corretamente, porém quando ele realiza o cálculo ele não obtêm o valor esperado. Veja o exemplo que ele está trabalhando:
```
var vendas = 10;
var clientesAbordados = 25;
var mediaTentativasPorCliente = 4;

var taxa = 0;

taxa = vendas / clientesAbordados *  mediaTentativasPorCliente;
console.log(taxa);
```
O valor que ele esperava obter era ```0.1```, afinal a conta é simples, basta dividir 10 (vendas) , por 100 ( clientesAbordados x mediaTentativasPorCliente). Porém sempre que ele imprime o resultado no console, aparece o valor de ``` 1.6 ```, mostrando um indicador muito mais alto do que ele deveria ser!

Qual das afirmativas abaixo explica o resultado estranho que Rogério está obtendo ?

######O Rogério não está levando em conta a ordem dos operadores em Javascript. Se ele não disser que a multiplicação deve ser feita primeiro, envolvendo-a com parênteses, ele sempre vai obter o resultado errado, pois o Javascript vai ler sua conta da esquerda para a direita, e vai resolver primeiro o bloco vendas / clientesAbordados e depois multiplicar por mediaTentativasPorCliente.:white_check_mark:

Assim como nós calculávamos o IMC, Rogério cometeu um simples erro que estragou o resultado de sua conta. Ele não levou em conta os parênteses e por isso o Javascript executou sua conta de modo errado, veja:
```
taxa = vendas / clientesAbordados *  mediaTentativasPorCliente;
```
Como não dissemos para o Javascript que a multiplicação deveria ser feita primeiro, ele entende que não há uma prefêrencia entre os operadores de divisão e multiplicação e começa a fazer a conta da esquerda para a direita, realizando primeiro este bloco:
```
vendas / clientesAbordados
//Resultado 
10 / 25 = 0.4
```
Que nos dá como resultado o número 0.4. Em seguida, o Javascript dá continuidade ao cálculo e faz próxima operação, que é a multiplicação:
```
0.4 *  mediaTentativasPorCliente;
// Resultado
0.4 * 4 = 1.6
```

Que era o resultado estranho que Rogério estava obtendo! Se queremos consertar este erro, basta apenas adicionarmos os parênteses quando estamos realizando a multiplicação que assim como na Matemática,tudo é resolvido na ordem desejada! Veja:
```
taxa = vendas / (clientesAbordados *  mediaTentativasPorCliente);
```
Faça o teste em seu navegador e veja a diferença que um simples parêntese pode fazer!

***
:mortar_board:  ##Aprendemos a obter um elemento do Mundo HTML e trazê-lo para o mundo JavaScript para podermos acessa-lo aplicando as mais diversas lógicas de programação.
Por exemplo, vamos revisar o código que extrai de uma página o peso e a altura para calcular o IMC. Primeiro, temos o um fragmento do HTML
```
<table>
    <thead>
        <tr>
            <th>Nome</th>
            <th>Peso(kg)</th>
            <th>Altura(m)</th>
            <th>Gordura Corporal(%)</th>
            <th>IMC</th>
        </tr>
    </thead>
    <tbody id="tabela-pacientes">
        <tr class="paciente" id="primeiro-paciente">
            <td class="info-nome">Paulo</td>
            <td class="info-peso">100</td>
            <td class="info-altura">2.00</td>
            <td class="info-gordura">10</td>
            <td class="info-imc">0</td>
        </tr>
    </tbody>
</table>
```

Segundo, o código JavaScript que manipula esse HTML:

```
var trPaciente = document.querySelector('#primeiro-paciente');
var tdPeso = trPaciente.querySelector('.info-peso');
var tdAltura = trPaciente.querySelector('.info-altura');

var peso = tdPeso.textContent;
var altura = tdAltura.textContent;

var imc = peso / ( altura * altura);
```

No entanto, não podemos simplesmente realizar o cálculo às cegas. Precisamos primeiro verificar se o peso e altura trazidos do mundo HTML são válidos. Não queremos magoar ninguém calculando um IMC indevido, certo? Aprendemos em lógica de programação a trabalharmos com a instrução ```if``` que espera receber ```true``` ou ```false```. Sendo assim, podemos realizar críticas em nosso código da seguinte forma:

```
var trPaciente = document.querySelector('#primeiro-paciente');
var tdPeso = trPaciente.querySelector('.info-peso');
var tdAltura = trPaciente.querySelector('.info-altura');
var tdImc = trPaciente.querySelector('.info-imc');

var peso = tdPeso.textContent;
var altura = tdAltura.textContent;

var pesoEhValido = true; // assumindo de boa fé que o peso é válido
var alturaEhValida = true; // assumindo de boa fé que a altura é válida

if(peso <=0 || peso >= 1000) {
   pesoEhValido = false;
}

if(altura <= 0 || altura >= 3.00) {
  alturaEhValida = false;
}

if(pesoEhValido && alturaEhValida) {
   var imc = peso / ( altura * altura); 
}
```

Apesar do código acima ser funcional, em nenhum momento ele esta exibindo o IMC calculado na página, muito menos as mensagens de erro caso peso ou altura sejam inválidos. Qual das opções abaixo exibe o IMC , inclusive as mensagens de erro?

``` 

if(peso <=0 || peso >= 1000) {
   pesoEhValido = false;
   tdPeso.textContent = 'peso inválido';
}

if(altura <= 0 || altura >= 3.00) {
  alturaEhValida = false;
  tdAltura.textContent = 'altura inválida';
}

if(pesoEhValido && alturaEhValida) {
   var imc = peso / ( altura * altura);
   tdImc.textContent = imc; 
}
``` 

:white_check_mark:

Veja que já somos capazes de capturar informações na página e ainda executar um monte de críticas para verificar a integridade dos dados antes de executamos nossa lógica com eles.
