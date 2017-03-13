##Sabemos que o navegador entende apenas HTML e que se colocarmos scripts diretamente no corpo da mensagem ele será interpretado como texto. Como resolvemos isso?
A tag ```javascript <script> ``` é responsável por nos ajudar a resolver este problema. Tudo que declaramos dentro da tag <script> é interpretado como Javascript quando o navegador passar por ali.
No caso abaixo:
```javascript
<script>
alert("Olá mundo");
</script>
```
Quando o navegador passar pela tag abaixo ele vai interprar o texto "alert("Olá mundo");" e irá executar a função alert(), que é responsável por exibir uma pop up com a mensagem Olá mundo.