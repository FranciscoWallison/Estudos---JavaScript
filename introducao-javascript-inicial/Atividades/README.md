## :mortar_board: Sabemos que o navegador entende apenas HTML e que se colocarmos scripts diretamente no corpo da mensagem ele será interpretado como texto. Como resolvemos isso?
A tag ``` <script> ``` é responsável por nos ajudar a resolver este problema. Tudo que declaramos dentro da tag ``` <script>  ``` é interpretado como Javascript quando o navegador passar por ali.
No caso abaixo:
```
<script>
alert("Olá mundo");
</script>
```
Quando o navegador passar pela tag abaixo ele vai interprar o texto "alert("Olá mundo");" e irá executar a função alert(), que é responsável por exibir uma pop up com a mensagem Olá mundo.

***
## :mortar_board: Ao abrir o HTML abaixo em um navegador, o que irá acontecer ? 
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
###### Será exibido apenas o texto do ```<h1>``` e um erro no console do desenvolvedor. :white_check_mark:
Sabemos que o navegador vai lendo de cima para baixo o contéudo do HTML e interpretando o que ele lê de acordo com as tags da página. Neste caso, ele irá ler a tag ``` <h1> ``` e irá exibir o seu contéudo com letras grandes, característico de um ``` <h1>``` .
Porém, ao ler a tag ``` <script> ``` o navegador entende que todo texto que está dentro da tag ```<script> ```deve ser lido como um Javascript, logo ele vai tentar interpretar a frase "Olá Mundo" como se fosse uma função Javascript válida, o que sabemos que não é, e então ele exibirá um erro de Unexpected Identifier, que nada mais é o que ele dizendo atráves do console de desenvolvedor que ele não entende "Olá mundo" como uma de suas funções.

Saber identificar e interpretar os erros do console é uma habilidade de todo bom desenvolvedor Javascript, então é bom começarmos a praticá-la desde já.

Se desejamos que uma mensagem seja exibida no console, devemos sempre chamar a função ```console.log()```, que é a função que recebe como parâmetro o contéudo da mensagem que queremos exibir no console.

***
## :mortar_board:  Marque as alternativas abaixo que contêm características ou funcionalidades do console de desenvolvedor do navegador:
###### Executar funções Javascript diretamente no console. :white_check_mark:
###### Exibir erros de códigos Javascript carregados pelo navegador. :white_check_mark:
###### Pode ser aberto com a tecla de atalho CTRL + SHIFT + J no Windows/Linux e CMD + ALT + J no Mac, :white_check_mark:
###### Ver os resultados de funções que imprimem no console, como a console.log(). :white_check_mark:
```
O console do desenvolvedor é uma ferramenta muito poderosa e versátil para o desenvolvedor Javascript. Com ele conseguimos rapidamente ser notificados de possíveis erros em nosso código, podemos executar funções, observar a saída de algumas funções e executar pequenos testes das funcionalidades do Javascript de modo rápido.

É uma boa prática sempre que estivermos testando nosso site ficar com o console aberto, para ficar monitorando possíveis erros em nosso código.

Como utilizar o console é algo bastante corriqueiro, podemos nos aproveitar dos atalhos CTRL + SHIFT + J ( Win/Linux) ou CMD + ALT + J (Mac) para ter acesso ao console de modo rápido.
```
***
## :mortar_board: Qual código abaixo importa corretamente um arquivo .js chamado contador.js que se encontra na mesma pasta de nosso arquivo HTML?
Sabemos que é importante fazer a separação de mundos HTML e Javascript, por isso criamos arquivos externos para guardar nosso código. Só que ao separar o Javascript em um arquivo externo, precisamos lembrar de importa-lo no HTML e para isso precisamos utilizar a tag ``` <script> ``` assim: 
```
<script src="contador.js"></script>
```

***
## :mortar_board: Qual opção abaixo substitui o hasheado (XXXX) por um código que exibe uma pop up com a mensagem bem vindo ?
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
## :mortar_board: O que contêm a variável ```document``` do Javacript ?
###### Ela é a representação do DOM ou Document Object Model, que é a representação da nossa página HTML para o navegador, que é utilizada pelo Javascript para manipular a página.:white_check_mark:
O document é uma variável muito importante do Javascript. Ela contêm o DOM ou Document Object Model, que é como o navegador enxerga o HTML utilizado por ele para renderizar a página.
O navegador, ao ler o seu arquivo HTML, cria uma cópia em memória daquele HTML e a partir dessa cópia ele vai desenhando a sua página, colocando as tags e aplicando os estilos. Esta cópia é o que chamamos de DOM uma representação em memória do HTML do seu arquivo, que o navegador usa para desenhar a página, e a variável document é quem contêm o DOM.

Por isso, quando dizemos que com o Javascript nos estamos manipulando o DOM, estamos manipulando o que o navegador renderizou. Então ao trocar algum texto do DOM, o navegador imediatamente desenha novamente aquele texto, pois o DOM é o que o navegador usa para desenhar o seu site.

Outra caracteristica interessante, é que como manipulamos o DOM , quando trocamos um texto de um ``` <h1> ```ou um estilo de um elemento, na verdade estamos alterando a representação em memória , o que faz com que o arquivo fonte que contêm seu HTML fique intacto!

***
## :mortar_board:  Sabemos que o document contêm a representação de todo o HTML da nossa página, porém na maioria dos casos estamos interessados em apenas uma parte do HTML e não em ele todo. Qual função podemos utilizar na variável document para especificar que queremos trazer apenas uma parte do HTML ?
###### document.querySelector();:white_check_mark:

Quando desejamos pegar apenas parte do HTML, devemos utilizar a função querySelector(). A função querySelector faz a busca através de seletores CSS para trazer o HTML que você está interessado. Por exemplo, no caso abaixo:
```<h1 class="titulo"> ```Meu primeiro site```</h1>```
Podemos buscar este ```<h1>``` passando o seletor CSS correto para a função querySelector. Utilizando o setor de tag, podemos buscar assim:

document.querySelector("h1");
E utilizando um seletor CSS de classe, ficaria assim:

``` document.querySelector(".titulo"); ```
Neste caso, ambas as funções retornaria o h1. Ter domínio dos seletores CSS é importante se você deseja trabalhar bem com o Javascript!

***
## :mortar_board: Temos o seguinte fragmento HTML:
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
###### var tdPeso = trPaciente.querySelector('.info-peso');:white_check_mark:
###### var tdAltura = trPaciente.querySelector('.info-altura');:white_check_mark:

Com JavaScript podemos obter um elemento pai, no caso trPaciente e dele realizar novas consultas para obter elementos filhos, como foi o caso das TD's de peso e altura.

***
## :mortar_board:  Mariana é dona de um restaurante que troca os pratos semanalmente. Os pratos são exibidos para seus clientes em seu site como uma tabela, como a abaixo:
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
## :mortar_board: Aprendemos que o cálculo do índice de massa corporal (IMC) é feito dividindo o nosso peso pela altura vezes a altura, o que pode ser representado pela seguinte fórmula na linguagem JavaScript:

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
## :mortar_board: Rogério era um programador da empresa Sentec Enterprises, e ele ficou responsável de fazer o site que exibe os indicadores de sua empresa, para mostrar para os clientes e possíveis investidores como a empresa havia desempenhado nos últimos anos.

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

###### O Rogério não está levando em conta a ordem dos operadores em Javascript. Se ele não disser que a multiplicação deve ser feita primeiro, envolvendo-a com parênteses, ele sempre vai obter o resultado errado, pois o Javascript vai ler sua conta da esquerda para a direita, e vai resolver primeiro o bloco vendas / clientesAbordados e depois multiplicar por mediaTentativasPorCliente.:white_check_mark:

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
## :mortar_board: Aprendemos a obter um elemento do Mundo HTML e trazê-lo para o mundo JavaScript para podermos acessa-lo aplicando as mais diversas lógicas de programação.
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

***
## :mortar_board: No sistema de RH do banco Finanção, as informações dos funcionários de uma determinada área eram apenas acessíveis aos gerentes daquela área Um código Javascript que verificava se um funcionário do setor de TI poderia ou não ter acesso aos dados funcionava como abaixo:
``` 
var setorTI = true;
var gerente = false;
if(setorTI == true || gerente == true){
    console.log("Acesso permitido");
}else{
    console.log("Acesso negado")
}
``` 
Com o tempo os funcionários observaram que a validação estava falha, pois pessoas que não deveriam ter acesso aos dados do setor TI estavam conseguindo mesmo assim.

Com base nos seus conhecimentos de Javascript e de lógica de programação, marque todas as opções abaixo que indicam quais funcionários tinham acesso as informações do setor de TI.

###### Todos os funcionários do setor de TI.:white_check_mark:
###### Qualquer funcionário que fosse gerente no banco. :white_check_mark:

Como a condição lógica testada é um OU ( representado pelas barrinhas || no Javascript ), caso uma condição OU a outra fosse atendida, o acesso as informações seriam liberadas. Basta apenas cumprir uma delas que o acesso seria permitido.
A primeira condição era ``` setorTI == true```  ou seja , se o funcionário fosse do setor de TI ele já teria o acesso, mesmo não sendo gerente.

A segunda condição era ``` gerente == true```  ou seja, se o funcionário fosse um gerente ele já ganharia o acesso, mesmo que não fosse do setor de TI.

No próximo exercício faremos a correção deste código para que ele dê acesso apenas aos gerentes do setor de TI.

***
:mortar_board:  ##Vimos que o banco Finanção está com uma falha na hora de verificar quem tem acesso a quais informações , qual alteração você faria no código abaixo para que apenas gerentes que são do departamento de TI tenham acesso ao dados de seus funcionários ?
``` 
var setorTI = true;
var gerente = false;
if(setorTI == true || gerente == true){
    console.log("Acesso permitido");
}else{
    console.log("Acesso negado")
}
``` 
:white_check_mark:
``` 
var setorTI = true;
var gerente = false;
if(setorTI == true && gerente == true){
    console.log("Acesso permitido");
}else{
    console.log("Acesso negado")
}
```

Basta apenas trocar a condição lógica de OU (||) para E (&&) assim , só quem vai ter o acesso permitido são as pessoas que são do setor de TI E também são gerentes.
Logo, o código final :

```
var setorTI = true;
var gerente = false;
if(setorTI == true && gerente == true){
    console.log("Acesso permitido");
}else{
    console.log("Acesso negado")
}
```

***
# Buscando os dados do primeiro paciente
Neste capítulo vamos calcular o IMC do primeiro paciente , buscando os seus dados de altura e peso, fazendo as validações necessárias e em seguida vamos preencher o IMC na tabela.

Em seu arquivo ```principal.js```, vá executando o passo a passo abaixo:

1- Vamos primeiro selecionar o primeiro paciente, que é uma ```<tr>``` com a nossa conhecida função ```document.querySelector()``` e salvar na variável paciente. Vamos usar o seletor de ```#id```:

```
var paciente = document.querySelector("#primeiro-paciente");
```

2- Agora com o paciente em mãos, podemos buscar dentro dele as informações que precisamos que são a altura e o peso da paciente. Vamos utilizar a função ```querySelector()``` desta vez para buscar dentro da váriavel paciente, pelo ```<td>``` que contêm a altura e o peso:

```
var tdPeso = paciente.querySelector(".info-peso");
var tdAltura = paciente.querySelector(".info-altura");
```

3- Mas sabemos que não estamos interessados nos ```<td>``` e sim no conteudo de texto de cada um deles, então vamos extraí-los:

```
var tdPeso = paciente.querySelector(".info-peso");
var tdAltura = paciente.querySelector(".info-altura");

var peso = tdPeso.textContent;
var altura = tdAltura.textContent;
```
4- Com os valores de peso e altura em mãos, podemos calcular o IMC. Não vamos nos esquecer dos parênteses também para que nossa conta seja feita como esperamos:

```
var imc = peso / (altura * altura);
```

5- Por último, com o IMC calculado devemos preencher a coluna de IMC do paciente selecionado com novo valor calculado. Vamos primeiro pegar o ```<td>``` que irá guardar o IMC:

```
var tdImc = paciente.querySelector(".info-imc");
```

6- Agora vamos colocar o valor calculado dentro do tdImc:

```
tdImc.textContent = imc;
```
Seu código deve estar assim:
```
var tdPeso = paciente.querySelector(".info-peso");
var tdAltura = paciente.querySelector(".info-altura");

var peso = tdPeso.textContent;
var altura = tdAltura.textContent;

var imc = peso / (altura * altura);
var tdImc = paciente.querySelector(".info-imc");
tdImc.textContent = imc;
```
Agora, ao recarregar a página, você verá que o IMC do primeiro paciente.

***
:mortar_board:  ##Já estamos conseguindo calcular o IMC, porém falta validar os dados que vem da tabela. Vamos lá:
1- O primeiro passo é fazer uma verificação do peso, vamos estabelecer que um peso é inválido se ele for menor ou igual a 0 quilos **OU** maior que 1000 quilos. Para isto, vamos utilizar um if para checar o peso, e a condição lógica de **OU** (||):
```
if(peso <= 0 || peso > 1000){
    console.log("Peso inválido");
}
```

2- Não basta apenas exibir no console a validação. Vamos escrever na coluna do IMC também o erro de peso inválido:
```
if(peso <= 0 || peso > 1000){
    console.log("Peso inválido");
    tdImc.textContent = "Peso inválido!";
}
```
3- Vamos repetir a mesma lógica para a altura, só que considerando inválido uma altura menor ou igual a 0 metros ou maior ou igual a 3 metros.
```
if(altura <= 0 || altura >= 3){
    console.log("Altura inválida");
    tdImc.textContent = "Altura inválida!";
}
```

4- Agora não basta verificar se a altura ou o peso estão errados, só devemos calcular o IMC se ambos passarem na validação. Para isto, vamos criar duas variáveis, **pesoEhValido** e **alturaEhValida**, iniciar seus valores como **true**. Caso as validações falhem , trocaremos este valor para **false:**
```
var alturaEhValida = true;
var pesoEhValido = true;

if(peso <= 0 || peso > 1000){
    console.log("Peso inválido");
    tdImc.textContent = "Peso inválido!";
    pesoEhValido = false;
}

if(altura <= 0 || altura >= 3){
    console.log("Altura inválida");

    tdImc.textContent = "Altura inválida!";
    alturaEhValida = false;
}
```

5- Agora vamos fazer um lógica para apenas calcular o IMC se o peso **E** a altura forem válidos. Vamos utilizar o operador lógico de **E** (&&):
```
var alturaEhValida = true;
var pesoEhValido = true;

if(peso <= 0 || peso > 1000){
    console.log("Peso inválido");
    tdImc.textContent = "Peso inválido!";
    pesoEhValido = false;
}

if(altura <= 0 || altura >= 3){
    console.log("Altura inválida");
    tdImc.textContent = "Altura inválida!";
    alturaEhValida = false;
}

if(pesoEhValido && alturaEhValida){
    var imc = peso / ( altura * altura);    
    tdImc.textContent = imc;
}
```

O seu código final deve estar assim:

```
var tdPeso = paciente.querySelector(".info-peso");
var tdAltura = paciente.querySelector(".info-altura");

var tdImc = paciente.querySelector(".info-imc");

var peso = tdPeso.textContent;
var altura = tdAltura.textContent;

var alturaEhValida = true;
var pesoEhValido = true;

if(peso <= 0 || peso > 1000){
    console.log("Peso inválido");
    tdImc.textContent = "Peso inválido!";
    pesoEhValido = false;
}

if(altura <= 0 || altura >= 3){
    console.log("Altura inválida");
    tdImc.textContent = "Altura inválida!";
    alturaEhValida = false;
}

if(pesoEhValido && alturaEhValida){
    var imc = peso / ( altura * altura);    
    tdImc.textContent = imc;
}
```

***
:mortar_board:  ##Jéssica criou um aplicativo de finanças para ter um melhor controle de seus gastos, visto que ela estava gastando muito com eletrônicos.
Ela queria ver qual a porcentagem de sua renda era destinada a cada categoria de gastos e para isto ela usava um simples cálculo:

```
var despesaCategoria = 1532;
var rendaTotal = 6255;

var porcentagemCategoria = (despesaCategoria/rendaTotal) * 100;

console.log(porcentagemCategoria);
```

Jéssica viu que ela não tinha interesse em saber a porcentagem com tantas casa decimais , como neste exemplo que iria ficar um número muito feio (24.49240607513989). Para o caso dela, **uma** casa decimal seria o suficiente.

Qual alteração no código dela faria com que o número de casas decimais ficasse limitado a uma casa decimal ?
***
:white_check_mark:
######
```
var despesaCategoria = 1532;
var rendaTotal = 6255;

var porcentagemCategoria = despesaCategoria/rendaTotal * 100;

console.log(porcentagemCategoria.toFixed(1));
```
Podemos controlar o número de casas decimais exibidas através da função **```.toFixed()```**.
A função ```toFixed()``` deve ser usadas em números, logo se queremos transformar o porcentagemCategoria em um número com apenas uma casa decimal, devemos fazer:
```
porcentagemCategoria.toFixed(1);
```
O número passado entre parêntenses deve ser o número de casas decimais para formatar o ```porcentagemCategoria```.

***
:mortar_board:  ##João está montando um script em Javascript que deve pegar todos os nomes dos produtos de um e-commerce.

O HTML da lista é como o abaixo:

```
<ul class="lista-produtos">
    <li class="produto">Web cam</li>
    <li class="produto">Microfone</li>
    <li class="produto">Fundo verde</li>
    <li class="produto">Notebook</li>
</ul>
```

E o script do João é o seguinte:
```
var produtos = document.querySelector("produto");

for( var i=0 ; i < produtos.length ; i++){
    var produto = produtos[i];
    var nomeDoProduto = produto.textContent;
    console.log(nomeDoProduto);
}
```
***
:white_check_mark:
######


**João está utilizando a função errada, como ele quer selecionar diversos elementos, ele deve usar a função ```querySelectorAll()```**.

**João esqueceu de colocar o ```.nomeClass``` no seletor de sua função querySelector()**.

João cometeu dois erros ao querer selecionar todos os produtos da lista.
O primeiro foi o uso da função de seleção errada, afinal se ele queria selecionar todos os ```produtos``` ele deveria utilizar a função ```querySelectorAll()```, que retornar um array com todo mundo que atende critério de seleção.

O segundo erro foi no parâmetro da função seletora, se ele deseja buscar por todos os produtos que tem **classe** produto, ele deve utilizar o seletor de **classe** que é **```ponto```**.

```
var produtos = document.querySelectorAll(".produto");

for( var i=0 ; i < produtos.length ; i++){
    var produto = produtos[i];
    var nomeDoProduto = produto.textContent;
    console.log(nomeDoProduto);
}
```

***
:white_check_mark:
###### Qual dos códigos abaixo altera a cor da letra do paragrafo abaixo para a cor azul ?

```
<p id="latim"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>


<script>
    var paragrafo = document.querySelector("#latim");
    // Código aqui!
</script>
```

:white_check_mark:
```
paragrafo.style.color = "blue";
```

Se queremos modificar um **estilo** de um elemento selecionado com o Javascript, devemos primeiro acessar a propriedade **style** , que contêm todos os estilos daquele elemento. Depois que temos a propriedade **.style** em mãos, devemos especificar qual estilo desejamos alterar , que neste caso é a cor do texto ou seja o estilo **color**.
```
paragrafo.style.color;
```
Só que não basta pegar o estilo, devemos atribuir a ele um novo valor, como neste caso desejamos alterar para a cor azul, vamos colocá-lo com valor de **blue:
```
paragrafo.style.color = "blue";
```
O interessante é que podemos colocar como valor, qualquer valor que seria válido no CSS, então se quiséssemos poderíamos utilizar o código RGB para representar a cor:
```
paragrafo.style.color = "rgb(0,0,255)";
```
Ambos os códigos obtêm o mesmo resultado!

***
:white_check_mark:
######
E se mudarmos de ideia e ao ao invés da **cor** do parágrafo do último exercício ser azul, quisermos deixar o **fundo** dele azul ?

```
<p id="latim"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>


<script>
    var paragrafo = document.querySelector("#latim");
    // Código aqui!
</script>
```
:white_check_mark:
```
paragrafo.style.backgroundColor = "blue";
```
Já vimos que para alterar um estilo de um elemento devemos acessar a propriedade ```style``` em seguida o 
estilo que queremos modificar. Porém , quando o nome do estilo possuí 
duas palavras no CSS, como é o caso de ```background-color```, devemos representá-lo com o 
estilo camelCase, que é a primeira palavra em mínusulo e a letra inicial de cada palavra seguinte em 
maiúsculo, transformando ```background-color``` em **```backgroundColor```**.
Ou seja, para alterar a cor de fundo do parágrafo para azul, devemos utilizar o seguinte código abaixo:
```
<script>
    var paragrafo = document.querySelector("#latim");
    paragrafo.style.backgroundColor = "blue";
</script>
```
Isto é válido para qualquer propriedade do CSS que tenha duas palavras, 
como background-color, font-size, font-style, border-radius...etc!

***
:white_check_mark:
######
Qual propriedade abaixo nos dá acesso a lista das classes de um HTML selecionado pela função querySelector ?

:white_check_mark:
```
.classList
```
Quando selecionamos um elemento com as funções de querySelector, elas nos devolvem um objetos que tem algumas propriedades especiais, que falam sobre as características do HTML selecionado. Uma dessas propriedades é a **.classList**, que como o nome indica nos mostras **classes** que aquele HTML tem.
Se você experimentar fazer como abaixo:
```
<h1 class="titulo principal azul"> Sou o titulo principal! </h1>
```
E no Javascript pedir para imprimir o classList deste ```<h1>```:
```
var titulo = document.querySelector("h1");
console.log(titulo.classList);
```

Você verá no seu console que será exibido um array do Javascrit com todas as classes daquele ```<h1>```:
```
//resultado
["titulo","principal","azul"]
```

***
:white_check_mark:
######

Rômulo deseja que todos os H2's de sua página tenham a classe "titulo", que modifica a fonte dos H2's e deixa eles com um destaque específico.
Qual dos códigos abaixo implementa uma solução em Javascript para que todos os ```<h2>``` da página ganhem a classe "titulo"?

:white_check_mark:
```
var titulos = document.querySelectorAll("h2");

for(var i = 0 ; i <  titulos.length ; i++){
    var titulo = titulos[i];
    titulo.classList.add("titulo");
}
```

A função responsável por adicionar uma classe é a função **```.add()```**, que recebe como parâmetro o nome da classe que queremos adicionar!
Só devemos lembrar de chamar está função depois de acessar a propriedade **```.classList```**, que é contêm as classes do HTML selecionado. Então, para resolver o problema de Rômulo, devemos utilizar o código abaixo:
```
var titulos = document.querySelectorAll("h2");

for(var i = 0 ; i <  titulos.length ; i++){
    var titulo = titulos[i];
    titulo.classList.add("titulo");
}
```
***
:white_check_mark:
######
Por que **não** é uma boa prática alterar diretamente um estilo de um elemento utilizando a propriedades .style do Javascript ?

:white_check_mark:

```
Pois é melhor alterar estilos adicionando ou removendo classes de elementos, pois assim conseguimos alterar visual com o Javascript, mas o estilo que vai ser aplicado fica no CSS, pois se um dia este estilo precisar ser modificado, só precisamos alterará-lo no CSS, em vez de todos os locais aonde ele é alterado pelo Javascript.
```

```
Pois é importante manter a separação de código, aonde a alteração de visuais, estilo e embelezamento ficam no CSS e o Javascript fica responsável por manipular o DOM e adicionar o dinâmismo na página.
```

```
Para melhorar a manutenibilidade do código, afinal se nos começarmos a alterar estilos dentro do Javascript, e este código se espalhar por diversas partes, e pode ser que nossas alterações de estilo fiquem inconsistentes ou difíceis de manter por estarem espalhadas em arquivos .js diferentes.
```

O Javascript é uma linguagem extremamente poderosa, sendo capaz de manipular tudo de um elemento, desde seu conteúdo de texto até mesmo suas classes e seus estilos.
O problema é que , como diria o tio Ben, **com grande poderes vêm grandes responsabilidades**, então é preciso pensar um pouco antes de fazer certas alterações em nossos elementos com Javascript.

Imagine o cenário abaixo:
```
<h1 class="titulo"> Um título </h1>

<p class="intro"> Um paragráfo!</p>

<h2 class="sub-titulo> Um outro titulo! </h2>

<p class="corpo"> Um outro paragráfo!</p>
```
E o arquivo ```.js```:
```
var titulo = document.querySelector(".titulo");
var subTitulo = document.querySelector(".subTitulo");
var intro = document.querySelector(".intro");
var corpo = document.querySelector(".corpo");
// Algumas linhas de código js...

titulo.style.color = "grey";

// Mais algumas linhas de código js...
subTitulo.style.color = "grey";

if(titulo.textContent == "Alerta!"){
    intro.style.color == "red";
}

// Mais algumas linhas de código js...

if(subTitulo.textContent == "Aviso!"){
    intro.style.color == "red";
}
```

Neste código de exemplo, estamos trocando a cor dos titulos e subtitulos para cinza, e a cor dos parafrafos para vermelho caso os titulos e subtitulos sejam "Alerta!" ou "Aviso!", respectivamente.

Se por acaso o designer de nosso website resolver que vermelho é uma cor muito ruim para a leitura e não está combinando com o resto do design do site, e desejar alterar a cor agora para um laranja.

Agora, nós programadores, vamos ter que percorrer todo o código Javascript que pode ter centenas de linhas de código e estar em vários arquivos diferentes, e procurar por toda vez que trocamos o style de um parágrafo para uma outra cor. Imagine o trabalho que isso seria? E isto num exemplo simples! Extrapole este caso para o Facebook, se ele desejar trocar a cor do balão de notificações de vermelho para amarelo! Imagine em quantos locais não existem notificações no Facebook!

Alterar um estilo diretamente pelo Javascript é muito perigoso, pois adiciona muita complexidade na hora de dar manuntenção ao código! Mas isto também não significa que não podemos alterar um estilo através do Javascript, mas só que isso deve ser feito de uma modo mais inteligente, através das classes!

Quando colocamos uma classe em um elemento, estamos dizendo que ela pode ganhar um estilo, mas este estilo está definido no CSS, que é quem deve ser responsável por ditar cores e as caracteristicas visuais dos elementos, não o Javascript! Se no nosso exemplo, implementarmos o mesmo código só que pensando com classes:
```
titulo.classList.add("titulos");

// Mais algumas linhas de código js...
subTitulo.classList.add("titulos")

if(titulo.textContent == "Alerta!"){
    intro.classList.add("mensagem-importante");
}

// Mais algumas linhas de código js...

if(subTitulo.textContent == "Aviso!"){
    intro..classList.add("mensagem-importante");
}
```
Quando o designer solicitar uma alterção de cor do parágrafo ou dos titulos, basta em buscar em meu CSS as classes correspondentes e alterá-las! Veja:
```
/index.css
.titulos{
    color: gray;
}

.mensagem-importante{
    //alteração de apenas uma linha!
    color: orange;
}
```
Assim, nosso código fica bem organizado, com cada parte fazendo sua responsabilidade e não perdemos nosso recurso de poder alterar estilos utilizando o Javascript, só deixamos bem claro que este estilo fica no CSS e manipulamos ele através de classes!

***
:white_check_mark:
######
Finalizando Capitulo 3
Neste capítulo aprendemos a lidar uma coleção de elementos do HTML e vimos:
Como selecionar diversos elementos com a função querySelectorAll()
Relembramos um método clássico de iteração com o for
Vimos como manipular estilos com a propriedade .style
Vimos que devemos utilizar camelCase quando queremos modificar uma propriedade que tenha duas palavras, como a background-color
A boa prática de não alterar o estilo diretamente no Javascript e sim modificar as classes dos elementos com a propriedade .classList

***
:white_check_mark:
###### Maria está ansiosa em descobrir a razão do seu código não ter funcionado. É um código simples, que exibe um alerta assim que um botão é clicado. Ela escreveu assim:

```
<button id="botao">clique-me</button>
<script>

    var botao = document.querySelector('#botao');

    function botaoHandler() {

        alert('Botão clicado');
    }

    botao.addEventListener('click', botaoHandler());
</script>
```
O problema está nessa linha:
```
botao.addEventListener('click', botaoHandler());
```

Ao invés de associar a função ```botaoHandler``` para o evento ```click```, o que foi associado foi o retorno da função, pois ele foi passada usando parênteses. Como a função não retornada nada, o código que será executado quando o botão for clicado será nada. Para corrigir, basta removermos os parênteses:
```
botao.addEventListener('click', botaoHandler);
```

***
:white_check_mark:
###### Menu: Quando perde o foco me mostrar o conteudo do menur 
```
<nav class="navbar navbar-default" id="navbartop">
  <div class="container-fluid">
    <ul class="nav navbar-nav navbar-right">
        <li><a href="#">Link</a></li>
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a>
          <ul class="dropdown-menu">

            <li><a href="#">Action</a></li>
            <li><a href="#">Another action</a></li>
            <li><a href="#">Something else here</a></li>
            <li role="separator" class="divider"></li>
            <li><a href="#">Separated link</a></li>
          </ul>
        </li>
      </ul>
  </div>
</nav>
```
###### JS:
```
$(function(){
        var nav = $('#navbartop');
        $(window).scroll(function () {
                if ($(this).scrollTop() > 100) { // '100' Define a altura em px
                        nav.addClass("navbar-fixed-top");
                } else {
                        nav.removeClass("navbar-fixed-top");
                }
        });
});
```
