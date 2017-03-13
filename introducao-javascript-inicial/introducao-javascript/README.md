##Sabemos que o navegador entende apenas HTML e que se colocarmos scripts diretamente no corpo da mensagem ele será interpretado como texto. Como resolvemos isso?
A tag ``` <script> ``` é responsável por nos ajudar a resolver este problema. Tudo que declaramos dentro da tag ``` <script>  ``` é interpretado como Javascript quando o navegador passar por ali.
No caso abaixo:
```
<script>
alert("Olá mundo");
</script>
```
Quando o navegador passar pela tag abaixo ele vai interprar o texto "alert("Olá mundo");" e irá executar a função alert(), que é responsável por exibir uma pop up com a mensagem Olá mundo.

-------------------------------------------------------------------------------------------------------------------------------
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
#Será exibido apenas o texto do ```<h1>``` e um erro no console do desenvolvedor.
Sabemos que o navegador vai lendo de cima para baixo o contéudo do HTML e interpretando o que ele lê de acordo com as tags da página. Neste caso, ele irá ler a tag ``` <h1> ``` e irá exibir o seu contéudo com letras grandes, característico de um ``` <h1>``` .
Porém, ao ler a tag ``` <script> ``` o navegador entende que todo texto que está dentro da tag ```<script> ```deve ser lido como um Javascript, logo ele vai tentar interpretar a frase "Olá Mundo" como se fosse uma função Javascript válida, o que sabemos que não é, e então ele exibirá um erro de Unexpected Identifier, que nada mais é o que ele dizendo atráves do console de desenvolvedor que ele não entende "Olá mundo" como uma de suas funções.

Saber identificar e interpretar os erros do console é uma habilidade de todo bom desenvolvedor Javascript, então é bom começarmos a praticá-la desde já.

Se desejamos que uma mensagem seja exibida no console, devemos sempre chamar a função ```console.log()```, que é a função que recebe como parâmetro o contéudo da mensagem que queremos exibir no console.