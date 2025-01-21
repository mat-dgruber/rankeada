/* function calcularRank(vitorias, derrotas) {
    const saldoVitorias = vitorias - derrotas;
    const niveis = [
        { limite: 10, nome: 'Ferro' },
        { limite: 20, nome: 'Bronze' },
        { limite: 50, nome: 'Prata' },
        { limite: 80, nome: 'Ouro' },
        { limite: 90, nome: 'Diamante' },
        { limite: 100, nome: 'Lendário' },
        { limite: Infinity, nome: 'Imortal' }
    ];

    let nivel = 'Ferro';
    for (const n of niveis) {
        if (vitorias < n.limite) {
            nivel = n.nome;
            break;
        }
    }

    console.log(`O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`);
}

// Exemplo de uso da função

calcularRank(40, 20);
**/


function calcularRank(vitorias, derrotas) {
    const saldoVitorias = vitorias - derrotas;
    const niveis = [
        { limite: 10, nome: 'Ferro' },
        { limite: 20, nome: 'Bronze' },
        { limite: 50, nome: 'Prata' },
        { limite: 80, nome: 'Ouro' },
        { limite: 90, nome: 'Diamante' },
        { limite: 100, nome: 'Lendário' },
        { limite: Infinity, nome: 'Imortal' }
    ];

    const nivel = niveis.find(n => vitorias < n.limite).nome;

    console.log(`O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`);
}

calcularRank(40, 20);