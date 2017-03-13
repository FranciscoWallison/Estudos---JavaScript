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