const officialLibCards = [
  `
  <div class="card">
    <h2>DomKit</h2>
    <div class="meta">
      <span><i class="fas fa-code"></i> UI Utilities</span>
      <span><i class="fas fa-star"></i> Official Release</span>
    </div>
    <p>Essential UI toolkit with toast notifications, modals, loading indicators, and more.</p>
    <p><small>
      Last <u>1.2.2</u><br>
    
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
      tabs.deactivateAll();<br>
  
      // Accordions<br>
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
      })<br>

      // Force all modals to close<br>
      DomKit.closeAllModals();<br>

      // Get active modal count<br>
      DomKit.activeModals();<br> 

      // Dynamic tooltip repositioning<br>
      tooltipInstance.updatePosition(); 
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
    <p><small>
      <u>1.2.2</u><br>
    
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
      MegaAnimX(".element").easing("ease-in-out")<br>
      
      // Visibility toggles<br>
      MegaAnimX(".menu").toggle();<br>         
      MegaAnimX(".tooltip").hide(200);<br>     

      // Keyframe animations<br>
      MegaAnimX(".logo").keyframes(
        "pulse", 
        "0% {transform: scale(1)} 50% {transform: scale(1.2)} 100% {transform: scale(1)}",
        1000
      );<br>

      // Direct style manipulation<br>
      MegaAnimX(".alert").custom({
        backdropFilter: "blur(5px)",
        "-webkit-mask-image": "linear-gradient(to right, transparent, black 20%)"
      }, 300);
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

  `
  <div class="card">
  <h2>myDatePro</h2>
  <div class="meta">
    <span><i class="fas fa-calendar-alt"></i> Date & Time Library</span>
    <span><i class="fas fa-star"></i> Official Release</span>
  </div>
  <p>Powerful, chainable date-time manipulation and formatting for modern apps</p>
  <p><small>
    <u>1.4.5</u><br>

    // Basic creation<br>
    myDatePro("2025-06-07").format("YYYY-MM-DD");<br>
    myDatePro().now(); // Current date/time<br>
    myDatePro("2025-06-07T12:00:00Z").toUTC(); // Convert to UTC<br>
    myDatePro("06/07/2025", "MM/DD/YYYY"); // Parse with specific format<br>

    // Addition/Subtraction<br>
    myDatePro().add(5, "days");<br>
    myDatePro().subtract(2, "months");<br>
    myDatePro().set("year", 2030); // Set year<br>

    // Start/End of periods<br>
    myDatePro().startOf("month"); // First day of month, 00:00:00<br>
    myDatePro().endOf("year"); // Last day of year, 23:59:59<br>

    // Business days<br>
    myDatePro().addBusinessDays(3); // Add 3 business days<br>
    myDatePro().subtractBusinessDays(2); // Subtract 2 business days<br>

    // Basic formatting<br>
    myDatePro().format("MM-DD-YYYY HH:mm:ss");<br>
    myDatePro().format("dddd, MMMM D, YYYY"); // "Saturday, June 7, 2025"<br>

    // Relative formatting<br>
    myDatePro().fromNow(); // "in 2 days", "3 months ago"<br>
    myDatePro().calendar(); // "Today at 2:30 PM", "Tomorrow at 9:00 AM"<br>

    // Special formats<br>
    myDatePro().toISOString(); // ISO 8601<br>
    myDatePro().format("Qo [quarter] YYYY"); // "2nd quarter 2025"<br>

    // Basic comparisons<br>
    myDatePro("2025-01-01").isBefore("2025-06-07");<br>
    myDatePro("2025-01-01").isAfter("2024-12-31");<br>
    myDatePro("2025-01-01").isSame("2025-01-01", "day");<br>

    // Ranges<br>
    myDatePro("2025-06-01").isBetween("2025-05-01", "2025-07-01");<br>

    // Special checks<br>
    myDatePro().isLeapYear(); // Is leap year?<br>
    myDatePro().isWeekend(); // Is weekend?<br>
    myDatePro().isBusinessDay(); // Is business day?<br>
    myDatePro().isHoliday("US"); // Is US holiday?<br>

    // Differences<br>
    myDatePro().diff("2025-12-31", "days");<br>
    myDatePro().diffInHours("2025-06-08");<br>
    myDatePro().diffInBusinessDays("2025-06-15", "US"); // Using US holidays<br>

    // Information<br>
    myDatePro().clone(); // Create a copy<br>
    myDatePro().isValid(); // Is date valid?<br>
    myDatePro().daysInMonth(); // Days in month<br>
    myDatePro().getWeek(); // ISO week number<br>
    myDatePro().weeksInYear(); // Weeks in year<br>

    // Locale configuration<br>
    myDatePro().locale("en"); // Set to English<br>
    myDatePro().format("LLLL"); // Full localized format<br>
    myDatePro().setDefaultCountry("US"); // Set US as default for holidays<br>

    // Timezone conversion<br>
    myDatePro().toUTC(); // To UTC<br>
    myDatePro().fromUTC(); // From UTC to local<br>
    myDatePro().toTimeZone(-5); // To UTC-5 (EST)<br>
    myDatePro().getTimezoneOffset(); // Offset in minutes<br>

    // Formatted duration<br>
    myDatePro().duration(3675); // "1h 1m 15s"<br>

    // Events<br>
    myDatePro().onChange((newVal) => console.log("Changed:", newVal));<br>
    myDatePro().on("update", () => console.log("Updated"));<br>
    myDatePro().off("update");<br>

    // Holiday management<br>
    myDatePro.setHolidays("US", ["01-01", "07-04", "12-25"]); // Set US holidays<br>
    myDatePro.getHolidays("US"); // Get US holidays<br>
    myDatePro.locales; // Available locales<br>
    myDatePro.countries; // Countries with holiday data<br>

    // Get information<br>
    myDatePro().getLocale(); // Current locale<br>
    myDatePro().getDefaultCountry(); // Default country for holidays
  </small></p>

  <div class="link-box">
    &lt;script src="https://danielcosta78.github.io/jslib/libs/mydatepro/1.4.5/mydatepro.min.js"&gt;&lt;/script&gt;
  </div>

  <div class="code-block">
    // Example usage<br>
    myDatePro("2025-06-07")<br>
    &nbsp;&nbsp;.add(1, "day").format("DD/MM/YYYY")<br><br>

    // Check difference<br>
    myDatePro("2025-12-31").diff("2025-01-01", "days")<br><br>

    // Set and format<br>
    myDatePro().set("month", 11).format("MMMM")
  </div>

  <button class="copy-btn">Copy CDN Link</button>
</div>
`,

`
<div class="card">
  <h2>DynamicForms</h2>
  <div class="meta">
    <span><i class="fas fa-check-circle"></i> Form Validation</span>
    <span><i class="fas fa-star"></i> Official Release</span>
  </div>
  <p>Comprehensive client-side form validation with customizable rules, multi-language support, and input masks.</p>
  <p><small>
    <u>1.6.2</u><br>
    
    // Initialize on a form with data-validate attribute<br>
    // Configurable framework and language via data-attributes<br>
    &lt;form data-validate data-framework="bootstrap" data-lang="en"&gt;<br>
    &nbsp;&nbsp;&lt;!-- Input fields with data-rule --&gt;<br>
    &lt;/form&gt;<br><br>

    // **Key Validation Rules (data-rule="ruleName[:param]")**<br>
    // required: Ensures field is not empty<br>
    // email: Validates email format<br>
    // min:5: Minimum 5 characters<br>
    // max:10: Maximum 10 characters<br>
    // number: Only digits allowed<br>
    // cpf: Brazilian CPF validation<br>
    // cnpj: Brazilian CNPJ validation<br>
    // match:password_field: Matches value of another field<br>
    // password: Min 8 chars, 1 uppercase, 1 lowercase, 1 number<br>
    // date: YYYY-MM-DD format<br>
    // url: Validates URL format<br>
    // cep: Brazilian CEP (ZIP code) format<br>
    // file: Required file<br>
    // file:1024: Max 1024KB file size<br>
    // file:type: File type allowed (e.g., image/jpeg, image/png)<br>
    // regex:^\d{3}$: Custom regex pattern<br>
    // unique:/api/check-unique: Async check against API endpoint<br><br>

    // **Examples of data-rule usage:**<br>
    &lt;input type="text" data-rule="required|email"&gt;<br>
    &lt;input type="password" data-rule="required|password"&gt;<br>
    &lt;input type="text" data-rule="min:5|max:20|regex:^[a-zA-Z ]+$"&gt;<br>
    &lt;input type="file" data-rule="file:500" data-file-types="image/jpeg,image/png,application/pdf"&gt;<br><br>

    // **Input Masking (data-mask)**<br>
    // data-mask="cpf": Automatically formats CPF (000.000.000-00)<br>
    // data-mask="cnpj": Automatically formats CNPJ (00.000.000/0000-00)<br>
    // data-mask="cep": Automatically formats CEP (00000-000)<br>
    // data-mask="phone": Formats phone numbers ((00) 00000-0000)<br>
    // data-mask="date": Formats date (YYYY-MM-DD)<br><br>

    // **Custom Events for deeper integration:**<br>
    // form.addEventListener("validation:valid", () => {<br>
    // &nbsp;&nbsp;console.log("Form is valid!");<br>
    // });<br>
    // form.addEventListener("validation:invalid", () => {<br>
    // &nbsp;&nbsp;console.log("Form has validation errors.");<br>
    // });<br>
    // form.addEventListener("validation:reset", () => {<br>
    // &nbsp;&nbsp;console.log("Form fields reset.");<br>
    // });<br>
  </small></p>
  <div class="link-box">
    &lt;script src="https://danielcosta78.github.io/jslib/libs/dynamicforms/1.6.2/dynamicforms.min.js"&gt;&lt;/script&gt;
  </div>
  
  <div class="code-block">
    // Apply multiple rules and a mask<br>
    &lt;input type="text" data-rule="required|email|min:5" data-mask="email"&gt;<br><br>
    
    // CPF validation with automatic mask<br>
    &lt;input type="text" data-rule="required|cpf" data-mask="cpf" placeholder="000.000.000-00"&gt;<br><br>
    
    // File upload with size and type limits<br>
    &lt;input type="file" data-rule="file:500" data-file-types="image/png,image/jpeg"&gt;
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
