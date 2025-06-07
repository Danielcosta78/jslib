const communityLibCards = [
  `
  <div class="card">
    <h2>ChartMaster (Example)</h2>
    <div class="meta">
      <span><i class="fas fa-chart-bar"></i> Data Visualization</span>
      <span><i class="fas fa-user-friends"></i> Community</span>
    </div>
    <p>Lightweight charting library with 20+ chart types and responsive design.</p>
    <p><small>
      <u>2.3.1</u><br>
      
      // Basic Usage<br>
      const chart = new ChartMaster("#chart-container", {<br>
      &nbsp;&nbsp;type: "bar",<br>
      &nbsp;&nbsp;data: {<br>
      &nbsp;&nbsp;&nbsp;&nbsp;labels: ["Jan", "Feb", "Mar"],<br>
      &nbsp;&nbsp;&nbsp;&nbsp;datasets: [{<br>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;label: "Sales",<br>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;data: [120, 190, 140]<br>
      &nbsp;&nbsp;&nbsp;&nbsp;}]<br>
      &nbsp;&nbsp;}<br>
      });<br><br>
      
      // Available Chart Types<br>
      "bar", "line", "pie", "doughnut", "radar", "polar",<br>
      "bubble", "scatter", "area", "heatmap", "treemap"<br><br>
      
      // Configuration Options<br>
      responsive: true,<br>
      animationDuration: 1000,<br>
      colorScheme: "light" // or "dark"<br><br>
      
      // Methods<br>
      chart.updateData(newData);<br>
      chart.changeType("line");<br>
      chart.resize(width, height);<br>
      chart.download("chart.png");<br>
      chart.destroy();<br><br>
      
      // Events<br>
      chart.on("click", (data) => console.log(data));<br>
      chart.on("hover", (data) => console.log(data));<br>
    </small></p>
    <div class="link-box">
      &lt;script src="https://cdn.example.com/libs/chartmaster/2.3.1/chartmaster.min.js"&gt;&lt;/script&gt;
    </div>
    
    <div class="code-block">
      // Simple bar chart<br>
      new ChartMaster("#sales-chart", {<br>
      &nbsp;&nbsp;type: "bar",<br>
      &nbsp;&nbsp;data: {<br>
      &nbsp;&nbsp;&nbsp;&nbsp;labels: ["Q1", "Q2", "Q3", "Q4"],<br>
      &nbsp;&nbsp;&nbsp;&nbsp;datasets: [{<br>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;label: "Revenue",<br>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;data: [450, 600, 800, 720],<br>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;backgroundColor: "#4361ee"<br>
      &nbsp;&nbsp;&nbsp;&nbsp;}]<br>
      &nbsp;&nbsp;}<br>
      });
    </div>
    
    <button class="copy-btn">Copy CDN Link</button>
  </div>
  `,

  `
  <div class="card">
    <h2>FormValidator (Example)</h2>
    <div class="meta">
      <span><i class="fas fa-check-circle"></i> Form Validation</span>
      <span><i class="fas fa-user-friends"></i> Community</span>
    </div>
    <p>Comprehensive form validation library with 30+ built-in rules and custom validation support.</p>
    <p><small>
      <u>1.5.0</u><br>
      
      // Basic Setup<br>
      const validator = new FormValidator("#my-form");<br><br>
      
      // Built-in Validation Rules<br>
      required, email, url, number, integer, min, max,<br>
      minLength, maxLength, pattern, equalTo, notEqualTo,<br>
      creditCard, phone, date, time, color, fileType,<br>
      fileSize, checkboxRequired, selectRequired<br><br>
      
      // Custom Rules<br>
      validator.addRule("customRule", (value, param) => {<br>
      &nbsp;&nbsp;return value === param;<br>
      }, "Must match {param}");<br><br>
      
      // Validation Methods<br>
      validator.validate(); // Validate all fields<br>
      validator.validateField("#email"); // Validate single field<br>
      validator.isValid(); // Check if form is valid<br>
      validator.reset(); // Reset validation state<br>
      validator.destroy(); // Clean up<br><br>
      
      // Configuration Options<br>
      liveValidation: true, // Validate on input<br>
      errorClass: "error", // CSS class for errors<br>
      errorElement: "span", // Element for error messages<br>
      errorPosition: "after", // Where to insert errors<br>
      scrollToError: true // Scroll to first error<br><br>
      
      // Events<br>
      validator.on("valid", (field) => console.log(field));<br>
      validator.on("invalid", (field, errors) => console.log(errors));<br>
      validator.on("submit", (isValid) => console.log(isValid));<br>
    </small></p>
    <div class="link-box">
      &lt;script src="https://cdn.example.com/libs/formvalidator/1.5.0/formvalidator.min.js"&gt;&lt;/script&gt;
    </div>
    
    <div class="code-block">
      // Example form validation<br>
      const validator = new FormValidator("#signup-form", {<br>
      &nbsp;&nbsp;rules: {<br>
      &nbsp;&nbsp;&nbsp;&nbsp;"username": "required|minLength:4",<br>
      &nbsp;&nbsp;&nbsp;&nbsp;"email": "required|email",<br>
      &nbsp;&nbsp;&nbsp;&nbsp;"password": "required|minLength:8",<br>
      &nbsp;&nbsp;&nbsp;&nbsp;"confirm_password": "equalTo:#password"<br>
      &nbsp;&nbsp;},<br>
      &nbsp;&nbsp;messages: {<br>
      &nbsp;&nbsp;&nbsp;&nbsp;"username.required": "Username is required"<br>
      &nbsp;&nbsp;}<br>
      });
    </div>
    
    <button class="copy-btn">Copy CDN Link</button>
  </div>
  `,

  `
  <div class="card">
    <h2>AjaxHelper (Example)</h2>
    <div class="meta">
      <span><i class="fas fa-exchange-alt"></i> HTTP Requests</span>
      <span><i class="fas fa-user-friends"></i> Community</span>
    </div>
    <p>Simplified AJAX requests with promise-based API, interceptors, and timeout handling.</p>
    <p><small>
      <u>3.0.2</u><br>
      
      // Basic Requests<br>
      AjaxHelper.get("/api/data");<br>
      AjaxHelper.post("/api/save", { name: "John" });<br>
      AjaxHelper.put("/api/update/1", { name: "Jane" });<br>
      AjaxHelper.delete("/api/remove/1");<br>
      AjaxHelper.request({<br>
      &nbsp;&nbsp;url: "/api/custom",<br>
      &nbsp;&nbsp;method: "PATCH",<br>
      &nbsp;&nbsp;headers: { "X-Token": "abc123" }<br>
      });<br><br>
      
      // Response Handling<br>
      AjaxHelper.get("/api/data")<br>
      &nbsp;&nbsp;.then(response => console.log(response))<br>
      &nbsp;&nbsp;.catch(error => console.error(error));<br><br>
      
      // Global Configuration<br>
      AjaxHelper.defaults.baseURL = "/api";<br>
      AjaxHelper.defaults.timeout = 5000;<br>
      AjaxHelper.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";<br><br>
      
      // Interceptors<br>
      AjaxHelper.interceptors.request.use(config => {<br>
      &nbsp;&nbsp;config.headers.Authorization = "Bearer token";<br>
      &nbsp;&nbsp;return config;<br>
      });<br>
      
      AjaxHelper.interceptors.response.use(<br>
      &nbsp;&nbsp;response => response,<br>
      &nbsp;&nbsp;error => {<br>
      &nbsp;&nbsp;&nbsp;&nbsp;if (error.status === 401) {<br>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;// Handle unauthorized<br>
      &nbsp;&nbsp;&nbsp;&nbsp;}<br>
      &nbsp;&nbsp;&nbsp;&nbsp;return Promise.reject(error);<br>
      &nbsp;&nbsp;}<br>
      );<br><br>
      
      // Concurrent Requests<br>
      AjaxHelper.all([<br>
      &nbsp;&nbsp;AjaxHelper.get("/api/users"),<br>
      &nbsp;&nbsp;AjaxHelper.get("/api/posts")<br>
      ]).then(responses => console.log(responses));<br><br>
      
      // Cancellation<br>
      const source = AjaxHelper.CancelToken.source();<br>
      AjaxHelper.get("/api/data", { cancelToken: source.token });<br>
      source.cancel("Request canceled");<br><br>
      
      // Progress Tracking<br>
      AjaxHelper.post("/api/upload", formData, {<br>
      &nbsp;&nbsp;onUploadProgress: progressEvent => {<br>
      &nbsp;&nbsp;&nbsp;&nbsp;const percent = Math.round(<br>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(progressEvent.loaded * 100) / progressEvent.total<br>
      &nbsp;&nbsp;&nbsp;&nbsp;);<br>
      &nbsp;&nbsp;&nbsp;&nbsp;console.log(percent);<br>
      &nbsp;&nbsp;}<br>
      });
    </small></p>
    <div class="link-box">
      &lt;script src="https://cdn.example.com/libs/ajaxhelper/3.0.2/ajaxhelper.min.js"&gt;&lt;/script&gt;
    </div>
    
    <div class="code-block">
      // Example usage<br>
      AjaxHelper.get("/api/users")<br>
      &nbsp;&nbsp;.then(response => {<br>
      &nbsp;&nbsp;&nbsp;&nbsp;console.log(response.data);<br>
      &nbsp;&nbsp;})<br>
      &nbsp;&nbsp;.catch(error => {<br>
      &nbsp;&nbsp;&nbsp;&nbsp;console.error("Error:", error.message);<br>
      &nbsp;&nbsp;});<br><br>
      
      // With async/await<br>
      async function loadData() {<br>
      &nbsp;&nbsp;try {<br>
      &nbsp;&nbsp;&nbsp;&nbsp;const response = await AjaxHelper.get("/api/data");<br>
      &nbsp;&nbsp;&nbsp;&nbsp;// Handle response<br>
      &nbsp;&nbsp;} catch (error) {<br>
      &nbsp;&nbsp;&nbsp;&nbsp;// Handle error<br>
      &nbsp;&nbsp;}<br>
      }
    </div>
    
    <button class="copy-btn">Copy CDN Link</button>
  </div>
  `
];

window.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector(".community-libraries");

  if (!container) return;

  communityLibCards.forEach(cardHTML => {
    const wrapper = document.createElement("div");
    wrapper.innerHTML = cardHTML;
    const card = wrapper.firstElementChild;
    container.appendChild(card);
  });

  const communityCards = document.querySelectorAll('.community-libraries .card');
  
  communityCards.forEach(card => {
    const copyBtn = card.querySelector('.copy-btn');
    const libraryName = card.querySelector('h2').textContent.trim();
    const searchInput = document.getElementById('search');
    
    copyBtn.addEventListener('click', () => {
      searchInput.value = libraryName;
      const event = new Event('input');
      searchInput.dispatchEvent(event);
      
      searchInput.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
      
      searchInput.focus();
      
      const linkBox = card.querySelector('.link-box');
      navigator.clipboard.writeText(linkBox.textContent.trim());
      
      const originalText = copyBtn.textContent;
      copyBtn.textContent = 'Copied!';
      setTimeout(() => {
        copyBtn.textContent = originalText;
      }, 2000);
    });
  });
});
