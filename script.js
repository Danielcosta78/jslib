async function loadLibraries() {
  const response = await fetch('db.json');
  const libraries = await response.json();
  const list = document.getElementById('list');
  const searchInput = document.getElementById('search');

  function render(filter = '') {
    list.innerHTML = '';
    libraries
      .filter(lib => lib.name.toLowerCase().includes(filter.toLowerCase()))
      .forEach(lib => {
        const url = `${location.origin}${location.pathname.replace(/\/$/, '')}/${lib.file}`;
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
          <h2>${lib.name} <small>v${lib.version}</small></h2>
          <p>${lib.description}</p>
          <div class="link-box">${url}</div>
          <button onclick="navigator.clipboard.writeText('${url}')">Copy Link</button>
          <button onclick="window.open('${url}', '_blank')">Open</button>
        `;
        list.appendChild(card);
      });
  }

  searchInput.addEventListener('input', () => render(searchInput.value));
  render();
}

loadLibraries();

document.querySelectorAll('.official-libraries .card').forEach(card => {
  card.addEventListener('click', function(e) {
    
    if (e.target.closest('.copy-btn')) return;
    
    const libraryName = this.querySelector('h2').textContent.toLowerCase();
    const searchInput = document.getElementById('search');
    
    searchInput.value = libraryName;
    searchInput.dispatchEvent(new Event('input'));
    searchInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
    searchInput.focus();
  });
});
