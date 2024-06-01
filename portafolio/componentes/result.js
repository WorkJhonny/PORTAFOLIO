/*const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const searchResults = document.getElementById('searchResults');

searchButton.addEventListener('click', (event) => {
  event.preventDefault(); // Evitar el envío del formulario
  const searchQuery = searchInput.value.trim();
  if (searchQuery) {
    // Aquí puedes agregar la lógica para realizar la búsqueda
    console.log('Búsqueda:', searchQuery);
    // Actualizar el elemento div con los resultados de la búsqueda
    searchResults.textContent = `Resultados de la búsqueda para "${searchQuery}":`;
    // Aquí puedes agregar más lógica para mostrar los resultados de la búsqueda
  } else {
    searchResults.textContent = ''; // Limpiar los resultados si no hay búsqueda
  }
});*/

/*segundo*/
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const searchResults = document.getElementById('searchResults');
const content = document.body.innerText; // Obtener todo el contenido de texto de la página

searchButton.addEventListener('click', (event) => {
  event.preventDefault(); // Evitar el envío del formulario
  const searchQuery = searchInput.value.trim().toLowerCase();
  if (searchQuery) {
    const matches = []; // Array para almacenar las coincidencias

    // Dividir el contenido en líneas
    const lines = content.split('\n');

    // Buscar la palabra en cada línea
    lines.forEach(line => {
      const lowercaseLine = line.toLowerCase();
      if (lowercaseLine.indexOf(searchQuery) !== -1) {
        matches.push(line);
      }
    });

    // Mostrar las coincidencias en el elemento searchResults
    searchResults.innerHTML = '';
    if (matches.length > 0) {
      matches.forEach(match => {
        const p = document.createElement('p');
        p.textContent = match;
        searchResults.appendChild(p);
      });
    } else {
      searchResults.textContent = `No se encontraron coincidencias para "${searchQuery}".`;
    }
  } else {
    searchResults.textContent = ''; // Limpiar los resultados si no hay búsqueda
  }
});
/*const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const searchResults = document.getElementById('searchResults');

// Array con las URLs de todas las páginas de tu sitio web
const pages = [
  'index.html',
  'layout/habilidades.html',
  'layout/competencias.html',
  'layout/education.html',
  'layout/business.html',
  'layout/tech.html',
  'layout/certificaciones.html',
  'layout/person.html'
];

searchButton.addEventListener('click', (event) => {
  event.preventDefault(); // Evitar el envío del formulario
  const searchQuery = searchInput.value.trim().toLowerCase();
  if (searchQuery) {
    const matches = []; // Array para almacenar las coincidencias

    // Función para cargar el contenido de cada página y buscar la palabra
    const loadPage = (url) => {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', url, true);
      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
          const content = xhr.responseText;
          const lines = content.split('\n');
          lines.forEach(line => {
            const lowercaseLine = line.toLowerCase();
            if (lowercaseLine.indexOf(searchQuery) !== -1) {
              matches.push(`${url}: ${line}`);
            }
          });

          // Cargar la siguiente página si hay más
          const nextIndex = pages.indexOf(url) + 1;
          if (nextIndex < pages.length) {
            loadPage(pages[nextIndex]);
          } else {
            // Mostrar las coincidencias en el elemento searchResults
            searchResults.innerHTML = '';
            if (matches.length > 0) {
              matches.forEach(match => {
                const p = document.createElement('p');
                p.textContent = match;
                searchResults.appendChild(p);
              });
            } else {
              searchResults.textContent = `No se encontraron coincidencias para "${searchQuery}".`;
            }
          }
        }
      };
      xhr.send();
    };

    // Iniciar la carga de la primera página
    loadPage(pages[0]);
  } else {
    searchResults.textContent = ''; // Limpiar los resultados si no hay búsqueda
  }
});*/