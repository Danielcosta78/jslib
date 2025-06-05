const officialLibCards = [
  `
  <div class="card">
    <h2>DomKit</h2>
    <div class="meta">
      <span><i class="fas fa-code"></i> UI Utilities</span>
      <span><i class="fas fa-star"></i> Official Release</span>
    </div>
    <p>Essential UI toolkit with toast notifications, modals and loading indicators</p>
    <p><small>Last <u>1.2.2</u>
    DomKit.toast("Message", 3000, { type: "success" }),
    DomKit.toast("Message", 3000, { bgColor: "#2196f3", textColor: "#fff" }),
    DomKit.modal("Content", "Title", { 
  showCancel: true,
  confirmText: "OK",
  cancelText: "Cancel",
  htmlContent: true // Supports HTML
}),
DomKit.alert("Message", "Title"),
DomKit.confirm("Proceed?", "Confirmation"),
DomKit.prompt("Enter name:", "Input", {
  inputType: "text|password|email...",
  inputPlaceholder: "Default value...",
  inputDefault: "Prefilled text"
}),
DomKit.loading(true, { 
  spinnerType: "circle", // or "dots"
  text: "Loading...",
  bgColor: "rgba(0,0,0,0.5)"
}),
DomKit.loading(false), // Hide
// Tooltips
DomKit.tooltip(element, "Tooltip text", { 
  bgColor: "#333", 
  textColor: "#fff" 
}),

// Dropdowns
const dropdown = DomKit.dropdown(triggerElement, [
  { label: "Option 1", onClick: () => console.log(1) },
  { label: "Option 2 (disabled)", disabled: true }
], { bgColor: "#fff" });

dropdown.show(); // Programmatic control
dropdown.hide();
dropdown.destroy();

// Tabs
const tabs = DomKit.tabs(containerElement);
tabs.activate(1); // Switch to tab index 1
tabs.deactivateAll();

// Accordions
DomKit.accordion(containerElement, { 
  closeOthers: true // Auto-collapse other items
}),
// Toast presets
DomKit.toastTypes = {
  info: "#2196f3",
  success: "#4caf50",
  warning: "#ff9800",
  error: "#f44336"
};

// Sizing
DomKit.modalMaxWidth = "500px";
DomKit.toastMaxWidth = "300px";

// Styles
DomKit.loadingBgColor = "rgba(0,0,0,0.7)";
DomKit.tooltipBgColor = "#222";
// Modal lifecycle
DomKit.modal("...", "...", { 
  onOpen: () => console.log("Modal opened"),
  onClose: () => console.log("Modal closed") 
}),

// Toast callback
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
    <p><small><u>1.2.2</u>
    // Core Animation Functions
MegaAnimX(".element").fade(0.5, 300),
MegaAnimX(".element").scale(1.2, 500),
MegaAnimX(".element").scaleX(1.2, 500),
MegaAnimX(".element").scaleY(1.2, 500),
MegaAnimX(".element").rotate(45, 500),
MegaAnimX(".element").translate(100, 50, 500),
MegaAnimX(".element").move(100, 50, 500),
MegaAnimX(".element").skew(10, 5, 500),
MegaAnimX(".element").rotateX(45, 500),
MegaAnimX(".element").rotateY(45, 500),
MegaAnimX(".element").rotateZ(45, 500),
MegaAnimX(".element").perspective("500px", 500),
MegaAnimX(".element").transformOrigin("center", 500),
MegaAnimX(".element").blur(5, 500),
MegaAnimX(".element").shadow("0 5px 15px rgba(0,0,0,0.3)", 500),
MegaAnimX(".element").border("1px solid red", 500),
MegaAnimX(".element").round("10px", 500),
MegaAnimX(".element").glow("red", 500),
MegaAnimX(".element").bg("blue", 500),
MegaAnimX(".element").color("white", 500),
MegaAnimX(".element").font("Arial", 500),
MegaAnimX(".element").size(100, 100, 500),
MegaAnimX(".element").text("New text", 500),
MegaAnimX(".element").html("<div>Content</div>", 500),

// Predefined Effects
MegaAnimX(".element").bounce(500),
MegaAnimX(".element").pulse(500),
MegaAnimX(".element").shake(500),
MegaAnimX(".element").flip(600),
MegaAnimX(".element").flash(300),
MegaAnimX(".element").slideInLeft(500),
MegaAnimX(".element").slideInRight(500),

// Visibility Controls
MegaAnimX(".element").show(500),
MegaAnimX(".element").hide(500),
MegaAnimX(".element").toggle(500),

// SVG Specific
MegaAnimX(".element").strokeWidth(2, 500),
MegaAnimX(".element").strokeDashoffset(100, 500),
MegaAnimX(".element").fill("red", 500),
MegaAnimX(".element").stroke("blue", 500),

// Control Functions
MegaAnimX(".element").pauseTransitions(),
MegaAnimX(".element").resumeTransitions(500, "ease"),
MegaAnimX(".element").resetStyles(),
MegaAnimX(".element").stop(),

// Event Handling
MegaAnimX(".element").onStart((el) => console.log("Started", el)),
MegaAnimX(".element").onEnd((el) => console.log("Ended", el)),
MegaAnimX(".element").on("click", (el) => console.log("Clicked", el)),
MegaAnimX(".element").off("click", handler),

// Utility Functions
MegaAnimX(".element").wait(1000),
MegaAnimX(".element").measure(),
MegaAnimX(".element").getDuration(),
MegaAnimX(".element").keyframes("myAnimation", "0% {opacity:0} 100% {opacity:1}", 500),
MegaAnimX(".element").then((el) => console.log("Animation complete", el)),
MegaAnimX(".element").loop(5),
MegaAnimX(".element").cloneTo(".other-element"),
MegaAnimX(".element").custom({ opacity: 0.5, width: "100px" }, 500),

// Configuration
MegaAnimX(".element").duration(1000),
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
