const html = document.documentElement;
    const toggleBtn = document.getElementById('toggle-theme');
    const icon = document.getElementById('theme-icon');

    function updateIcon(theme) {
      icon.className = theme === 'dark' ? 'bi bi-sun-fill' : 'bi bi-moon-fill';
    }

    toggleBtn.addEventListener('click', () => {
      const currentTheme = html.getAttribute('data-bs-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      html.setAttribute('data-bs-theme', newTheme);
      updateIcon(newTheme);
    });

    // Inicializar ícono según el tema actual
    updateIcon(html.getAttribute('data-bs-theme') || 'light');
