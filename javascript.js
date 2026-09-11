// getElementById tenta buscar o id "botaoTema", mas não o encontra no HTML e retorna null
const botao = document.getElementById('botaoTema');

// Lança o erro: Uncaught TypeError: Cannot read properties of null (reading 'addEventListener')
botao.addEventListener('click', () => {
  // Alterna a classe 'tema-escuro' no <body>
  document.body.classList.toggle('tema-escuro');

  // Atualiza o texto do botão conforme o estado atual
  const estaEscuro = document.body.classList.contains('tema-escuro');
  botao.textContent = estaEscuro ? 'Ativar tema claro' : 'Ativar tema escuro';
});
