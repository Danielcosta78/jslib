const officialLibCards = [
  `
  <div class="card">
    <h2>DomKit</h2>
    <div class="meta">
      <span><i class="fas fa-code"></i> UI Utilities</span>
      <span><i class="fas fa-star"></i> Official Release</span>
    </div>
    <p>Essential UI toolkit with toast notifications, modals and loading indicators</p>
    
    <div class="link-box">
      &lt;script src="https://danielcosta78.github.io/jslib/libs/domkit/1.0.2/domkit.min.js"&gt;&lt;/script&gt;
    </div>
    
    <div class="code-block">
      // Toast notification<br>
      DomKit.toast("Operation successful!");<br><br>
      
      // Confirmation modal<br>
      DomKit.modal("Confirm action?", "Warning");<br><br>
      
      // Loading indicator<br>
      DomKit.loading(true); // Show<br>
      DomKit.loading(false); // Hide
    </div>
    
    <button class="copy-btn">Copy CDN Link</button>
  </div>
  `,

  // ...
];

window.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector(".official-libraries");

  if (!container) return;

  officialLibCards.forEach(cardHTML => {
    const wrapper = document.createElement("div");
    wrapper.innerHTML = cardHTML;
    const card = wrapper.firstElementChild;
    container.appendChild(card);
  });
});
