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

window.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector(".community-libraries #community-list");

  if (!container) return;

  communityLibCards.forEach(cardHTML => {
    const wrapper = document.createElement("div");
    wrapper.innerHTML = cardHTML;
    const card = wrapper.firstElementChild;
    container.appendChild(card);
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const communityCopyButtons = document.querySelectorAll('.community-libraries .copy-btn');
  const searchInput = document.getElementById('search');
  
  communityCopyButtons.forEach(button => {
    button.addEventListener('click', function() {
      const card = this.closest('.card');
      const title = card.querySelector('h2').textContent;
      
      searchInput.value = title;
      searchInput.focus();
      
      const inputEvent = new Event('input', { bubbles: true });
      searchInput.dispatchEvent(inputEvent);
      
      const originalText = this.textContent;
      this.textContent = 'Copied!';
      setTimeout(() => {
        this.textContent = originalText;
      }, 2000);
    });
  });
});
