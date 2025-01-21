function rankeadaCalcular(vitorias, derrotas) {
    let saldoVitorias = vitorias - derrotas;
    let level;

    if (saldoVitorias < 10) {
        level = 'Ferro';    
    } else if (saldoVitorias >= 11 && saldoVitorias <= 20) {
        level = 'Bronze';
    } else if (saldoVitorias >= 21 && saldoVitorias <= 50) {
        level = 'Prata';
    } else if (saldoVitorias >= 51 && saldoVitorias <= 80) {
        level = 'Ouro';
    } else if (saldoVitorias >= 81 && saldoVitorias <= 90) {
        level = 'Diamante';
    } else if (saldoVitorias >= 91 && saldoVitorias <= 100) {
        level = 'Lendário';
    } else if (saldoVitorias >= 101) {
        level = 'Imortal';
    }

    console.log(`O Herói tem de saldo de ${saldoVitorias} está no nível de ${level}`);
}


rankeadaCalcular(85, 20);
