const communityLibCards = [
  `
  <div class="card">
    <h2>Community Library 1</h2>
    <div class="meta">
      <span><i class="fas fa-code"></i> Category</span>
      <span><i class="fas fa-user"></i> Contributor Name</span>
    </div>
    <p>Description of what this library does and its key features.</p>
    <p><small>
      Version: <u>1.0.0</u><br>
      // Example usage:<br>
      CommunityLib.init();<br>
      CommunityLib.doSomethingCool();
    </small></p>
    <div class="link-box">
      &lt;script src="https://cdn.example.com/community-lib-1.min.js"&gt;&lt;/script&gt;
    </div>
    
    <div class="code-block">
      // Basic usage example<br>
      const instance = new CommunityLib(options);<br>
      instance.run();
    </div>
    
    <button class="copy-btn">Copy CDN Link</button>
  </div>
  `,
  
  // Adicione mais bibliotecas da comunidade conforme necessário
  `
  <div class="card">
    <h2>Example</h2>
    <div class="meta">
      <span><i class="fas fa-chart-bar"></i> Data Visualization</span>
      <span><i class="fas fa-user"></i> ChartMaster</span>
    </div>
    <p>Lightweight charting library with beautiful defaults and easy configuration.</p>
    <p><small>
      Version: <u>2.3.1</u><br>
      // Create a chart:<br>
      AwesomeCharts.create('#chart-container', {<br>
      &nbsp;&nbsp;type: 'bar',<br>
      &nbsp;&nbsp;data: [12, 19, 3, 5, 2, 3]<br>
      });
    </small></p>
    <div class="link-box">
      &lt;script src="https://cdn.example.com/awesome-charts.min.js"&gt;&lt;/script&gt;
    </div>
    
    <div class="code-block">
      // Pie chart example<br>
      AwesomeCharts.create('#pie-chart', {<br>
      &nbsp;&nbsp;type: 'pie',<br>
      &nbsp;&nbsp;data: [12, 19, 3],<br>
      &nbsp;&nbsp;colors: ['#FF6384', '#36A2EB', '#FFCE56']<br>
      });
    </div>
    
    <button class="copy-btn">Copy CDN Link</button>
  </div>
  `
];

async function loadCommunityLibraries() {
  const container = document.querySelector(".community-libraries #community-list");
  const searchInput = document.getElementById('search');
  const searchContainer = document.querySelector(".search-container");
  
  if (!container || !searchInput || !searchContainer) return;

  // 1. Configuração do lazy loading
  const batchSize = 5;
  let currentIndex = 0;
  let isLoading = false;

  // 2. Função para extrair texto original
  function getOriginalText(element) {
    const clone = element.cloneNode(true);
    Array.from(clone.children).forEach(child => child.remove());
    return clone.textContent.trim();
  }

  // 3. Carrega um lote de cards
  async function loadBatch() {
    if (isLoading || currentIndex >= communityLibCards.length) return;
    isLoading = true;

    const batchEnd = Math.min(currentIndex + batchSize, communityLibCards.length);
    const fragment = document.createDocumentFragment();

    for (let i = currentIndex; i < batchEnd; i++) {
      const wrapper = document.createElement("div");
      wrapper.innerHTML = communityLibCards[i];
      const card = wrapper.firstElementChild;
      
      // Armazena o título original
      const titleElement = card.querySelector('h2');
      card.dataset.originalTitle = getOriginalText(titleElement);
      
      fragment.appendChild(card);
    }

    container.appendChild(fragment);
    setupBatchButtons(currentIndex, batchEnd);
    currentIndex = batchEnd;
    isLoading = false;

    // Carrega próximo lote após pequeno delay
    if (currentIndex < communityLibCards.length) {
      await new Promise(resolve => setTimeout(resolve, 100));
      loadBatch();
    }
  }

  // 4. Configura os botões de cópia
  function setupBatchButtons(start, end) {
    const cards = container.querySelectorAll('.card');
    for (let i = start; i < end && i < cards.length; i++) {
      const card = cards[i];
      const copyBtn = card.querySelector('.copy-btn');
      const linkBox = card.querySelector('.link-box');

      copyBtn.addEventListener('click', () => {
        // Atualiza o input com nome original (sem focar/selecionar)
        searchInput.value = card.dataset.originalTitle;
        searchInput.dispatchEvent(new Event('input', { bubbles: true }));
        
        // Posiciona o input na viewport (sem animação de scroll)
        searchContainer.scrollIntoView({ behavior: 'smooth, block: 'nearest' });
        
        // Copia apenas o link CDN (limpo)
        const cleanLink = linkBox.textContent
          .replace(/<script.*?>|<\/script>/gi, '')
          .trim();
        
        navigator.clipboard.writeText(cleanLink);
      });
    }
  }

  // 5. Inicia carregamento
  await loadBatch();
}

// Inicia quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', loadCommunityLibraries);
