class formaBolo{
     constructor(saborMassa, saborRecheio) {
          this.saborMassa = saborMassa;
          this.saborRecheio = saborRecheio;
     }

     escrever(){
          console.log(`Um delicioso bolo de ${this.saborMassa} com recheio de ${this.saborRecheio}`);
     }

     assar(){
          console.log("Assando o bolo...");
     }
}

let boloFesta = new formaBolo("chocolate", "Nutella");

let boloPremium = new formaBolo("baunilha", "morango");

boloPremium.saborMassa = "floresta negra"
boloFesta.escrever(); // Um delicioso bolo de chocolate com recheio de Nutella
boloPremium.escrever(); // Um delicioso bolo de baunilha com recheio de morango 
boloFesta.assar(); // Assando o bolo... 
