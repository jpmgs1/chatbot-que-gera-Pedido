const banco = require("../banco");

function execute(user, msg) {

  let addQtd = `*Digite a quantidade para continuar:* \n\n`;

  addQtd += `----------------------------------------------\n`;

  addQtd += "*#* - Para voltar ao menu anterior"

  let arrayMsgRetorno = [];
  arrayMsgRetorno.push({stage: 5});

  arrayMsgRetorno.push({texto: addQtd});


  // arrayMsgRetorno.push({texto: "*Digite a quantidade para continuar:*"});
  // arrayMsgRetorno.push({texto: "*#* - Para voltar ao menu anterior"});

  banco.db[user].produtoEscolhido = msg;
  
  //Altera o estado para o menu de opções
  // banco.db[user].stage = 5;

  return arrayMsgRetorno;
}

exports.execute = execute;
