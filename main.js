var carta1 = {
    nome: "Joey",
    imagem: "https://criticalhits.com.br/wp-content/uploads/2020/12/joey-comida-friends-910x683.jpeg",
    atributos: {
      inteligência: 1,
      gula: 10,
      humor: 10
    }
  };
  
  var carta2 = {
    nome: "Phoebe",
    imagem: "https://i.pinimg.com/originals/70/ba/36/70ba3603733c38c8ad3d830bb052d228.jpg",
    atributos: {
      inteligência: 3,
      gula: 4,
      humor: 10
    }
  };
  
  var carta3 = {
    nome: "Ross",
    imagem: "https://jpimg.com.br/uploads/2017/10/ROSS.jpg",
    atributos: {
      inteligência: 10,
      gula: 5,
      humor: 3
    }
  };
  
  var carta4 = {
    nome: "Rachel",
    imagem: "https://i.pinimg.com/originals/2d/06/6b/2d066b701acb2aae6debd163f43105e8.jpg",
    atributos: {
      inteligência: 6,
      gula: 4,
      humor: 9
    }
  };
  
  var carta5 = {
    nome: "Chandler",
    imagem: "https://i.pinimg.com/originals/f4/6f/c4/f46fc48c22f5eeefe629df6b0592a34e.jpg",
    atributos: {
      inteligência: 7,
      gula: 5,
      humor: 10
    }
  };
  
  var carta6 = {
    nome: "Monica",
    imagem: "https://64.media.tumblr.com/c3468f1b43d820dc0bde24d013b52d6b/a2617be67f0b428f-48/s400x600/8641fd0a59215f83de5f5d652a6641710d142790.png",
    atributos: {
      inteligência: 8,
      gula: 9,
      humor: 2
    }
  };
  
  var cartaMaquina;
  var cartaJogador;
  var cartas = [carta1, carta2, carta3, carta4, carta5, carta6];
  // 0          1           2
  
  function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * 6);
    cartaMaquina = cartas[numeroCartaMaquina];
  
    var numeroCartaJogador = parseInt(Math.random() * 6);
    while (numeroCartaJogador == numeroCartaMaquina) {
      numeroCartaJogador = parseInt(Math.random() * 6);
    }
    cartaJogador = cartas[numeroCartaJogador];
    console.log(cartaJogador);
  
    document.getElementById("btnSortear").disabled = true;
    document.getElementById("btnJogar").disabled = false;
    exibirCartaJogador();
  }
  
  function obtemAtributoSelecionado() {
    var radioAtributo = document.getElementsByName("atributo");
    for (var i = 0; i < radioAtributo.length; i++) {
      if (radioAtributo[i].checked) {
        return radioAtributo[i].value;
      }
    }
  }
  
  function jogar() {
    console.log("chamou");
    var atributoSelecionado = obtemAtributoSelecionado();
    var divResultado = document.getElementById("resultado");
  
    if (
      cartaJogador.atributos[atributoSelecionado] >
      cartaMaquina.atributos[atributoSelecionado]
    ) {
      htmlResultado = "<p class='resultado-final'>Venceu</p>";
    } else if (
      cartaJogador.atributos[atributoSelecionado] <
      cartaMaquina.atributos[atributoSelecionado]
    ) {
      htmlResultado = "<p class='resultado-final'>Perdeu</p>";
    } else {
      htmlResultado = "<p class='resultado-final'>Empatou</p>";
    }
    divResultado.innerHTML = htmlResultado;
  
    document.getElementById("btnJogar").disabled = true;
    exibirCartaMaquina();
  }
  
  function exibirCartaJogador() {
    var divCartaJogador = document.getElementById("carta-jogador");
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
    // divCartaJogador.style.backgroundImage = "url(" + cartaJogador.imagem + ")"
    var moldura =
      '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    var tagHTML = "<div id='opcoes' class='carta-status'>";
  
    var opcoesTexto = "";
    for (var atributo in cartaJogador.atributos) {
      opcoesTexto +=
        "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>";
    }
    var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`;
  
    divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
  }
  
  function exibirCartaMaquina() {
    var divCartaMaquina = document.getElementById("carta-maquina");
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
    // divCartaJogador.style.backgroundImage = "url(" + cartaJogador.imagem + ")"
    var moldura =
      '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    var tagHTML = "<div id='opcoes' class='carta-status'>";
  
    var opcoesTexto = "";
    for (var atributo in cartaMaquina.atributos) {
      opcoesTexto +=
        "<p type='text' name='atributo' value='" +
        atributo +
        "'>" +
        atributo +
        " " +
        cartaMaquina.atributos[atributo] +
        "</p>";
    }
    var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;
  
    divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
  }
  