<script>
    const botao = document.getElementById('botaoTema');

    botao.addEventListener('click', () => {
      // Alterna a classe 'tema-escuro' no <body>
      document.body.classList.toggle('tema-escuro');

      // Atualiza o texto do botão conforme o estado atual
      const estaEscuro = document.body.classList.contains('tema-escuro');
      botao.textContent = estaEscuro ? 'Ativar tema claro' : 'Ativar tema escuro';
    });
  </script>
</body>
</html>
