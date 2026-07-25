// Preenche a data automaticamente no primeiro post se preciso
document.addEventListener("DOMContentLoaded", () => {
  const dateElement = document.getElementById("date");
  if (dateElement) {
    const today = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    dateElement.textContent = today.toLocaleDateString('pt-BR', options);
  }
});

// Sistema de reações para múltiplos posts
function reagir(botao, tipo) {
  const container = botao.parentElement;
  const btnLike = container.querySelector('.btn-like');
  const btnDislike = container.querySelector('.btn-dislike');
  
  const badgeLike = btnLike.querySelector('.count-badge');
  const badgeDislike = btnDislike.querySelector('.count-badge');

  let likes = parseInt(badgeLike.textContent);
  let dislikes = parseInt(badgeDislike.textContent);

  // Verifica qual botão já estava ativo na postagem
  const estadoAtual = container.getAttribute('data-voto');

  if (tipo === 'like') {
    if (estadoAtual === 'like') {
      likes--;
      container.removeAttribute('data-voto');
    } else {
      if (estadoAtual === 'dislike') dislikes--;
      likes++;
      container.setAttribute('data-voto', 'like');
    }
  } else if (tipo === 'dislike') {
    if (estadoAtual === 'dislike') {
      dislikes--;
      container.removeAttribute('data-voto');
    } else {
      if (estadoAtual === 'like') likes--;
      dislikes++;
      container.setAttribute('data-voto', 'dislike');
    }
  }

  badgeLike.textContent = likes;
  badgeDislike.textContent = dislikes;
}