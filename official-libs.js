const officialLibCards = [
  `
  <div class="card">
    <h2>DomKit</h2>
    <div class="meta">
      <span><i class="fas fa-code"></i> UI Utilities</span>
      <span><i class="fas fa-star"></i> Official Release</span>
    </div>
    <p>Essential UI toolkit with toast notifications, modals and loading indicators</p>
    <p><small>Last <u>1.2.2</u> - DomKit.toast("Hi",3000), DomKit.alert("Alert!"), DomKit.confirm("Confirm?").then(r=>console.log(r)), DomKit.prompt("Name?").then(t=>console.log(t)), DomKit.loading(true), DomKit.tooltip(el,"Tip"), DomKit.dropdown(el,[{label:"1",action:()=>{}},{label:"2",action:()=>{}}]), DomKit.tabs(container), DomKit.accordion(container).</small></p>
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

  `
  <div class="card">
    <h2>MegaAnimX</h2>
    <div class="meta">
      <span><i class="fas fa-code"></i> Animation Library</span>
      <span><i class="fas fa-star"></i> Official Release</span>
    </div>
    <p>Chainable animations with transforms, effects, SVG support and full control</p>
    
    <div class="link-box">
      &lt;script src="https://danielcosta78.github.io/jslib/libs/megaanimx/1.2.2/megaanimx.min.js"&gt;&lt;/script&gt;
    </div>
    
    <div class="code-block">
      // Basic animation chain<br>
      MegaAnimX(".box")<br>
      &nbsp;&nbsp;.fade(0.5).scale(1.5).rotate(45)<br><br>
      
      // 3D transform<br>
      MegaAnimX("#cube").rotateX(360).rotateY(180)<br><br>
      
      // Predefined effect<br>
      MegaAnimX("#item").bounce().glow("gold")
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
