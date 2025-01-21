class heroi {
     constructor(nome, idade, classe, ataque) {
          this.nome = nome;
          this.idade = idade;
          this.classe = classe;
          this.ataque = ataque;
          this.tiposAtaques = ["magia", "espada", "artes marciais", "shuriken"];

          switch (this.classe) {
               case "Mago":
                   this.ataque = this.tiposAtaques[0];
                   break;
               case "Guerreiro":
                   this.ataque = this.tiposAtaques[1];
                   break;
               case "Monge":
                   this.ataque = this.tiposAtaques[2];
                   break;
               case "Ninja":
                   this.ataque = this.tiposAtaques[3];
                   break;
               default:
                   console.error("Classe desconhecida:", this.classe);
           }
     }

     atacar() {
          console.log(`O ${this.classe} atacou usando ${this.ataque}`);
     }
}

const meuHeroi = new heroi("Arthur", 30, "Ninja");
;meuHeroi.atacar();