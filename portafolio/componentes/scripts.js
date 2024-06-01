const searchInput = document.getElementById('searchInput');
  const searchButton = document.getElementById('searchButton');

  searchButton.addEventListener('click', (event) => {
    event.preventDefault(); // Evitar el envío del formulario
    const searchQuery = searchInput.value.trim();
    if (searchQuery) {
      // Aquí puedes agregar la lógica para realizar la búsqueda
      console.log('Búsqueda:', searchQuery);
      // Por ejemplo, podrías redirigir a una página de resultados de búsqueda
      // window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
    }
  });