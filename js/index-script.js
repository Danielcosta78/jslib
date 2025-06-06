async function loadLibraries() {
  const response = await fetch('db.json');
  const libraries = await response.json();
  const list = document.getElementById('list');
  const searchInput = document.getElementById('search');
  
  let visibleItems = 30;
  const increment = 20;
  let filteredLibraries = [];
  let isLoading = false;

  function render(filter = '') {
    filteredLibraries = filter ? 
      libraries.filter(lib => lib.name.toLowerCase().includes(filter.toLowerCase())) : 
      [...libraries];
    
    list.innerHTML = '';
    
    const visible = filteredLibraries.slice(0, visibleItems);
    
    visible.forEach(lib => {
      const basePath = location.origin + location.pathname.replace(/\/index\.html$/, '').replace(/\/$/, '');
      const url = `${basePath}/${lib.file}`;
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

    if (filteredLibraries.length > visibleItems) {
      const loader = document.createElement('div');
      loader.className = 'loader';
      loader.textContent = `Showing ${visibleItems} of ${filteredLibraries.length} items (scroll to load more)`;
      list.appendChild(loader);
    }
  }

  function debounce(func, timeout = 300) {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => { func.apply(this, args); }, timeout);
    };
  }

  function handleScroll() {
    if (isLoading) return;
    
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    const threshold = 100;
    
    if (scrollTop + clientHeight >= scrollHeight - threshold) {
      if (visibleItems < filteredLibraries.length) {
        isLoading = true;
        
        setTimeout(() => {
          visibleItems += increment;
          render(searchInput.value);
          isLoading = false;
        }, 200);
      }
    }
  }

  function setupOfficialLibraries() {
    const officialCards = document.querySelectorAll('.official-libraries .card');
    
    officialCards.forEach(card => {
      const copyBtn = card.querySelector('.copy-btn');
      const libraryName = card.querySelector('h2').textContent.trim();
      
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
  }

  searchInput.addEventListener('input', debounce(() => {
    visibleItems = 30;
    render(searchInput.value);
  }));

  window.addEventListener('scroll', handleScroll);
  
  render();
  setupOfficialLibraries();
}

document.addEventListener('DOMContentLoaded', loadLibraries);
