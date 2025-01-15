function rankeadaCalcular (vitorias,derrotas) {
    let saldoVitorias = vitorias - derrotas;
    const niveis = [
        {limite:10, nome: "Barro"},
        {limite:20, nome: "Bronze"},
        {limite:50, nome: "Prata"},
        {limite:80, nome: "Ouro"},
        {limite:90, nome: "Diamante"},
        {limite:100, nome: "Lendário"},
        {limite:Infinity, nome: "Imortal"}
    ];

    let nivelAtual = "Barro";
    for (const lvl of niveis) {
        if (saldoVitorias < lvl.limite) {
            nivelAtual = lvl.nome;
            break;
        }
    }

    console.log(`O Herói tem um saldo de ${saldoVitorias} e está no nível ${nivelAtual}`);
    

}

rankeadaCalcular(40, 20);