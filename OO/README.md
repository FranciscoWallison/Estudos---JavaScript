Claro! Vamos montar um exemplo bem simples de **orientação a objetos (OO)** em JavaScript puro, com:

- uma **classe**
- **atributos públicos e privados**
- **métodos**
- uso de **instância**

---

### 🐶 Exemplo: Classe `Cachorro`

```js
class Cachorro {
  // Atributo privado com #
  #idade;

  // Construtor com parâmetros
  constructor(nome, idade) {
    this.nome = nome;      // público
    this.#idade = idade;   // privado
  }

  // Método público
  latir() {
    console.log(`${this.nome} diz: Au au!`);
  }

  // Método público que acessa atributo privado
  mostrarIdade() {
    console.log(`${this.nome} tem ${this.#idade} anos.`);
  }

  // Método público que modifica o atributo privado
  envelhecer() {
    this.#idade++;
  }
}
```

---

### 🧪 Usando a classe

```js
const dog = new Cachorro("Rex", 3);

dog.latir();               // Rex diz: Au au!
dog.mostrarIdade();        // Rex tem 3 anos

dog.envelhecer();
dog.mostrarIdade();        // Rex tem 4 anos

console.log(dog.nome);     // Rex (público)
console.log(dog.#idade);   // ❌ ERRO! '#' é privado
```

---

### 🧠 O que aprendemos aqui?

| Conceito | Explicação |
|---------|------------|
| `class` | Define uma estrutura de objeto com atributos e métodos |
| `constructor` | Inicializa os valores ao criar uma nova instância |
| `this.nome` | Atributo público (pode ser acessado de fora) |
| `#idade` | Atributo privado (só pode ser usado dentro da classe) |
| Métodos | São funções que pertencem à classe, como `latir()` ou `envelhecer()` |
| `new` | Cria uma nova instância da classe |

---