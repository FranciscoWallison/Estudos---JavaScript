##Sabemos que o navegador entende apenas HTML e que se colocarmos scripts diretamente no corpo da mensagem ele será interpretado como texto. Como resolvemos isso?
A tag ``` <script> ``` é responsável por nos ajudar a resolver este problema. Tudo que declaramos dentro da tag ``` <script>  ``` é interpretado como Javascript quando o navegador passar por ali.
No caso abaixo:
```
<script>
alert("Olá mundo");
</script>
```
Quando o navegador passar pela tag abaixo ele vai interprar o texto "alert("Olá mundo");" e irá executar a função alert(), que é responsável por exibir uma pop up com a mensagem Olá mundo.

***
##Ao abrir o HTML abaixo em um navegador, o que irá acontecer ? 
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
##Marque as alternativas abaixo que contêm características ou funcionalidades do console de desenvolvedor do navegador:
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