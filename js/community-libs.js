const communityLibCards = [
  `
  <div class="card">
    <h2>ColorFade</h2>
    <div class="meta">
      <span><i class="fas fa-palette"></i> Color Animation</span>
      <span><i class="fas fa-user-friends"></i> Community</span>
    </div>
    <p>Smooth color transitions and gradients for UI elements.</p>
    <p><small>
      <u>2.1.0</u><br>
      
      // Basic color transitions<br>
      ColorFade(element).from("#ff0000").to("#00ff00").duration(1000).start();<br>
      
      // Gradient animations<br>
      ColorFade(element).gradient(["#ff0000", "#00ff00", "#0000ff"]).loop();<br>
      
      // Rainbow effect<br>
      ColorFade(element).rainbow(5000); // 5 second cycle<br>
      
      // Pulse effect<br>
      ColorFade(element).pulse("#ff0000", 2000); // 2 second pulse<br>
      
      // Advanced controls<br>
      const anim = ColorFade(element)<br>
        .from("#ffffff")<br>
        .to("#000000")<br>
        .duration(2000)<br>
        .easing("ease-in-out")<br>
        .onStart(() => console.log("Started"))<br>
        .onEnd(() => console.log("Completed"))<br>
        .start();<br>
      
      // Control running animations<br>
      anim.pause();<br>
      anim.resume();<br>
      anim.stop();<br>
      
      // Text color animations<br>
      ColorFade.text(element, "#ff0000", "#0000ff", 1000);<br>
      
      // Border color animations<br>
      ColorFade.border(element, "transparent", "#ff0000", 500);<br>
      
      // Multiple elements<br>
      ColorFade.all(".items").from("#fff").to("#000").stagger(100);<br>
    </small></p>
    <div class="link-box">
      &lt;script src="https://cdn.jsdelivr.net/npm/colorfade@2.1.0/dist/colorfade.min.js"&gt;&lt;/script&gt;
    </div>
    
    <div class="code-block">
      // Simple color transition<br>
      ColorFade("#button")<br>
        .from("#3498db")<br>
        .to("#2ecc71")<br>
        .duration(1000)<br>
        .start();<br><br>
      
      // Rainbow background<br>
      ColorFade("#header").rainbow(10000);
    </div>
    
    <button class="copy-btn">Copy CDN Link</button>
  </div>
  `,

  `
  <div class="card">
    <h2>FormValidator</h2>
    <div class="meta">
      <span><i class="fas fa-check-circle"></i> Form Validation</span>
      <span><i class="fas fa-user-friends"></i> Community</span>
    </div>
    <p>Lightweight form validation with customizable rules and error messages.</p>
    <p><small>
      <u>1.3.2</u><br>
      
      // Basic setup<br>
      const validator = new FormValidator("#myForm", {<br>
        rules: {<br>
          username: "required|min:3|max:20",<br>
          email: "required|email",<br>
          password: "required|min:6|confirmed"<br>
        },<br>
        messages: {<br>
          username: {<br>
            required: "Username is required",<br>
            min: "Username must be at least 3 characters"<br>
          }<br>
        }<br>
      });<br>
      
      // Validate on submit<br>
      validator.onSubmit((valid, fields) => {<br>
        if (valid) form.submit();<br>
      });<br>
      
      // Validate single field<br>
      validator.validateField("email");<br>
      
      // Custom validation rules<br>
      FormValidator.addRule("phone", value => {<br>
        return /^[\d\s\-()+]{10,20}$/.test(value);<br>
      }, "Please enter a valid phone number");<br>
      
      // Async validation<br>
      FormValidator.addAsyncRule("uniqueEmail", async (value) => {<br>
        const response = await fetch(`/check-email?email=${value}`);<br>
        return response.json().available;<br>
      }, "Email already in use");<br>
      
      // Custom error display<br>
      validator.setErrorDisplay((field, errors) => {<br>
        const errorElement = document.getElementById(`${field}-error`);<br>
        errorElement.textContent = errors.join(', ');<br>
      });<br>
      
      // Reset validation<br>
      validator.reset();<br>
      
      // Get validation state<br>
      validator.isValid(); // true/false<br>
      validator.getErrors(); // {field: [errors]}<br>
      
      // Events<br>
      validator.on("valid", field => console.log(`${field} is valid`));<br>
      validator.on("invalid", (field, errors) => console.log(errors));<br>
    </small></p>
    <div class="link-box">
      &lt;script src="https://cdn.jsdelivr.net/npm/formvalidator-js@1.3.2/dist/formvalidator.min.js"&gt;&lt;/script&gt;
    </div>
    
    <div class="code-block">
      // Basic form validation<br>
      const validator = new FormValidator("#signupForm", {<br>
        rules: {<br>
          email: "required|email",<br>
          password: "required|min:6"<br>
        }<br>
      });<br><br>
      
      // Custom error messages<br>
      validator.setMessage("password", "min", "Password too short (min 6 chars)");
    </div>
    
    <button class="copy-btn">Copy CDN Link</button>
  </div>
  `,

  `
  <div class="card">
    <h2>AjaxHelper</h2>
    <div class="meta">
      <span><i class="fas fa-network-wired"></i> HTTP Requests</span>
      <span><i class="fas fa-user-friends"></i> Community</span>
    </div>
    <p>Simplified AJAX requests with interceptors, retry logic and progress tracking.</p>
    <p><small>
      <u>3.0.1</u><br>
      
      // GET request<br>
      AjaxHelper.get("/api/data")<br>
        .then(response => console.log(response))<br>
        .catch(error => console.error(error));<br>
      
      // POST request<br>
      AjaxHelper.post("/api/save", {name: "John"})<br>
        .then(handleResponse);<br>
      
      // PUT request<br>
      AjaxHelper.put("/api/update/1", {name: "Updated"});<br>
      
      // DELETE request<br>
      AjaxHelper.delete("/api/remove/1");<br>
      
      // Request with config<br>
      AjaxHelper.request({<br>
        url: "/api/search",<br>
        method: "GET",<br>
        params: {q: "test"},<br>
        headers: {"X-Custom": "value"},<br>
        timeout: 5000<br>
      });<br>
      
      // File upload with progress<br>
      AjaxHelper.upload("/api/upload", fileInput.files[0], {<br>
        onProgress: percent => {<br>
          progressBar.style.width = `${percent}%`;<br>
        }<br>
      });<br>
      
      // Multiple concurrent requests<br>
      AjaxHelper.all([<br>
        AjaxHelper.get("/api/users"),<br>
        AjaxHelper.get("/api/posts")<br>
      ]).then(([users, posts]) => {<br>
        console.log(users, posts);<br>
      });<br>
      
      // Request retry<br>
      AjaxHelper.get("/api/unstable", {retry: 3});<br>
      
      // Global interceptors<br>
      AjaxHelper.interceptors.request.use(config => {<br>
        config.headers.Authorization = "Bearer token";<br>
        return config;<br>
      });<br>
      
      AjaxHelper.interceptors.response.use(<br>
        response => response,<br>
        error => {<br>
          if (error.status === 401) {<br>
            location.href = "/login";<br>
          }<br>
          return Promise.reject(error);<br>
        }<br>
      );<br>
      
      // Abort request<br>
      const controller = new AjaxHelper.AbortController();<br>
      AjaxHelper.get("/api/large", {signal: controller.signal});<br>
      controller.abort();<br>
      
      // Base URL<br>
      AjaxHelper.defaults.baseURL = "https://api.example.com";<br>
      
      // Timeout<br>
      AjaxHelper.defaults.timeout = 10000;<br>
      
      // CSRF token<br>
      AjaxHelper.defaults.headers.common["X-CSRF-TOKEN"] = "token";<br>
    </small></p>
    <div class="link-box">
      &lt;script src="https://cdn.jsdelivr.net/npm/ajax-helper@3.0.1/dist/ajaxhelper.min.js"&gt;&lt;/script&gt;
    </div>
    
    <div class="code-block">
      // Simple GET request<br>
      AjaxHelper.get("/api/products")<br>
        .then(data => renderProducts(data))<br>
        .catch(showError);<br><br>
      
      // POST with JSON<br>
      AjaxHelper.post("/api/users", {name: "John", age: 30});
    </div>
    
    <button class="copy-btn">Copy CDN Link</button>
  </div>
  `,

  // Adicione mais bibliotecas da comunidade conforme necessário
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
});
