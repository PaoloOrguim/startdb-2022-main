class Forca {
  constructor(resposta) {
    this.palavra = []
    for (let i = 0; i < resposta.length; i++) this.palavra.push('_');
    this.resposta = resposta.toLowerCase();
    this.letrasChutadas = [];
    this.vidas = 6;
  }


  chutar(letra) {
    if (letra.length != 1) {
      console.log("Entrada inválida");
    } else {
      letra = letra.toLowerCase();
      if (this.letrasChutadas.includes(letra)) {
        console.log("Letra ja foi chutada");
      } else {
        this.letrasChutadas.push(letra);
        if (this.resposta.includes(letra)) {
          for (let i = 0; i < this.resposta.length; i++) {
            if (this.resposta[i] == letra) this.palavra[i] = letra;
          }
        } else {
          this.vidas--;
        }
      }
    }

  }

  buscarEstado() {
    if (!this.palavra.includes('_')) return "ganhou";
    if (this.vidas == 0) return "perdeu";
    return "aguardando chute";
  } // Possiveis valores: "perdeu", "aguardando chute" ou "ganhou"

  buscarDadosDoJogo() {
    return {
      letrasChutadas: this.letrasChutadas, // Deve conter todas as letras chutadas
      vidas: this.vidas, // Quantidade de vidas restantes
      palavra: this.palavra // Deve ser um array com as letras que já foram acertadas ou o valor "_" para as letras não identificadas
    }
  }
}

module.exports = Forca;
