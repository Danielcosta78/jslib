const officialLibCards = [
  `
  <div class="card">
    <h2>DomKit</h2>
    <div class="meta">
      <span><i class="fas fa-code"></i> UI Utilities</span>
      <span><i class="fas fa-star"></i> Official Release</span>
    </div>
    <p>Essential UI toolkit with toast notifications, modals, loading indicators, and more.</p>
    <p><small>Last <u>1.2.2</u><br>
    DomKit.toast("Message", 3000, { type: "success" }),<br>
    DomKit.toast("Message", 3000, { bgColor: "#2196f3", textColor: "#fff" }),<br>
    DomKit.modal("Content", "Title", { 
  showCancel: true,
  confirmText: "OK",
  cancelText: "Cancel",
  htmlContent: true // Supports HTML
}),<br>
DomKit.alert("Message", "Title"),<br>
DomKit.confirm("Proceed?", "Confirmation"),<br>
DomKit.prompt("Enter name:", "Input", {
  inputType: "text|password|email...",
  inputPlaceholder: "Default value...",
  inputDefault: "Prefilled text"
}),<br>
DomKit.loading(true, { 
  spinnerType: "circle", // or "dots"
  text: "Loading...",
  bgColor: "rgba(0,0,0,0.5)"
}),<br>
DomKit.loading(false), // Hide<br>

// Tooltips<br>
DomKit.tooltip(element, "Tooltip text", { 
  bgColor: "#333", 
  textColor: "#fff" 
}),<br>

// Dropdowns<br>
const dropdown = DomKit.dropdown(triggerElement, [
  { label: "Option 1", onClick: () => console.log(1) },
  { label: "Option 2 (disabled)", disabled: true }
], { bgColor: "#fff" });
dropdown.show(); // Programmatic control
dropdown.hide();
dropdown.destroy();<br>

// Tabs<br>
const tabs = DomKit.tabs(containerElement);
tabs.activate(1); // Switch to tab index 1
tabs.deactivateAll();
// Accordions
DomKit.accordion(containerElement, { 
  closeOthers: true // Auto-collapse other items
}),<br>

// Toast presets<br>
DomKit.toastTypes = {
  info: "#2196f3",
  success: "#4caf50",
  warning: "#ff9800",
  error: "#f44336"
};<br>

// Sizing<br>
DomKit.modalMaxWidth = "500px";
DomKit.toastMaxWidth = "300px";<br>

// Styles<br>
DomKit.loadingBgColor = "rgba(0,0,0,0.7)";
DomKit.tooltipBgColor = "#222";<br>

// Modal lifecycle<br>
DomKit.modal("...", "...", { 
  onOpen: () => console.log("Modal opened"),
  onClose: () => console.log("Modal closed") 
}),<br>

// Toast callback<br>
DomKit.toast("...", 3000, {
  onClose: () => console.log("Toast dismissed")
})
    </small></p>
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
    <p><small><u>1.2.2</u><br>
    // Core Animation Functions<br>
MegaAnimX(".element").fade(0.5, 300),<br>
MegaAnimX(".element").scale(1.2, 500),<br>
MegaAnimX(".element").scaleX(1.2, 500),<br>
MegaAnimX(".element").scaleY(1.2, 500),<br>
MegaAnimX(".element").rotate(45, 500),<br>
MegaAnimX(".element").translate(100, 50, 500),<br>
MegaAnimX(".element").move(100, 50, 500),<br>
MegaAnimX(".element").skew(10, 5, 500),<br>
MegaAnimX(".element").rotateX(45, 500),<br>
MegaAnimX(".element").rotateY(45, 500),<br>
MegaAnimX(".element").rotateZ(45, 500),<br>
MegaAnimX(".element").perspective("500px", 500),<br>
MegaAnimX(".element").transformOrigin("center", 500),<br>
MegaAnimX(".element").blur(5, 500),<br>
MegaAnimX(".element").shadow("0 5px 15px rgba(0,0,0,0.3)", 500),<br>
MegaAnimX(".element").border("1px solid red", 500),<br>
MegaAnimX(".element").round("10px", 500),<br>
MegaAnimX(".element").glow("red", 500),<br>
MegaAnimX(".element").bg("blue", 500),<br>
MegaAnimX(".element").color("white", 500),<br>
MegaAnimX(".element").font("Arial", 500),<br>
MegaAnimX(".element").size(100, 100, 500),<br>
MegaAnimX(".element").text("New text", 500),<br>
MegaAnimX(".element").html("&lt;div&gt;Content&lt;/div&gt;", 500),<br>

// Predefined Effects<br>
MegaAnimX(".element").bounce(500),<br>
MegaAnimX(".element").pulse(500),<br>
MegaAnimX(".element").shake(500),<br>
MegaAnimX(".element").flip(600),<br>
MegaAnimX(".element").flash(300),<br>
MegaAnimX(".element").slideInLeft(500),<br>
MegaAnimX(".element").slideInRight(500),<br>

// Visibility Controls<br>
MegaAnimX(".element").show(500),<br>
MegaAnimX(".element").hide(500),<br>
MegaAnimX(".element").toggle(500),<br>

// SVG Specific<br>
MegaAnimX(".element").strokeWidth(2, 500),<br>
MegaAnimX(".element").strokeDashoffset(100, 500),<br>
MegaAnimX(".element").fill("red", 500),<br>
MegaAnimX(".element").stroke("blue", 500),<br>

// Control Functions<br>
MegaAnimX(".element").pauseTransitions(),<br>
MegaAnimX(".element").resumeTransitions(500, "ease"),<br>
MegaAnimX(".element").resetStyles(),<br>
MegaAnimX(".element").stop(),<br>

// Event Handling<br>
MegaAnimX(".element").onStart((el) => console.log("Started", el)),<br>
MegaAnimX(".element").onEnd((el) => console.log("Ended", el)),<br>
MegaAnimX(".element").on("click", (el) => console.log("Clicked", el)),<br>
MegaAnimX(".element").off("click", handler),<br>

// Utility Functions<br>
MegaAnimX(".element").wait(1000),<br>
MegaAnimX(".element").measure(),<br>
MegaAnimX(".element").getDuration(),<br>
MegaAnimX(".element").keyframes("myAnimation", "0% {opacity:0} 100% {opacity:1}", 500),<br>
MegaAnimX(".element").then((el) => console.log("Animation complete", el)),<br>
MegaAnimX(".element").loop(5),<br>
MegaAnimX(".element").cloneTo(".other-element"),<br>
MegaAnimX(".element").custom({ opacity: 0.5, width: "100px" }, 500),<br>

// Configuration<br>
MegaAnimX(".element").duration(1000),<br>
MegaAnimX(".element").easing("ease-in-out")
</small></p>
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
