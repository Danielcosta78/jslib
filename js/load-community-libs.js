function loadCommunityLibraries() {
  const container = document.querySelector(".community-libraries");
  
  if (!container) {
    console.error("Community libraries container not found!");
    return;
  }

  const communityLibCards = [
    // Seu array de bibliotecas aqui (o mesmo conteúdo que estava em community-libs.js)
  ];

  communityLibCards.forEach(cardHTML => {
    const wrapper = document.createElement("div");
    wrapper.innerHTML = cardHTML;
    const card = wrapper.firstElementChild;
    container.appendChild(card);
    
    // Adiciona event listeners para os botões de cópia
    const copyBtn = card.querySelector('.copy-btn');
    if (copyBtn) {
      copyBtn.addEventListener('click', function() {
        const linkBox = card.querySelector('.link-box');
        if (linkBox) {
          navigator.clipboard.writeText(linkBox.textContent.trim());
          
          const originalText = copyBtn.textContent;
          copyBtn.textContent = 'Copied!';
          setTimeout(() => {
            copyBtn.textContent = originalText;
          }, 2000);
        }
      });
    }
  });
}

// Carrega quando o DOM estiver pronto
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', loadCommunityLibraries);
} else {
  loadCommunityLibraries();
}
