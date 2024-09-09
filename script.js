let newsList = [];
let currentPage = 1;
const itemsPerPage = 3; // Show 3 news articles per page

const fetchNewsBtn = document.querySelector('#fetchNews');
const mainContainer = document.querySelector('#news-container');
const paginationContainer = document.querySelector('#pagination-container');
const searchingInput = document.querySelector('#search');
const sortingItem = document.querySelector('#sorting');

// Fetch news from JSON file or API and render them
fetchNewsBtn.addEventListener('click', () => {
  fetch('news.json') // Replace 'news.json' with the actual API URL if needed
    .then(response => response.json())
    .then(data => {
      newsList = data; // Assign fetched data to newsList
      displayNews();
    })
    .catch(error => console.error('Error fetching news:', error));
});

// Display news based on current page, search, and sort criteria
function displayNews() {
  mainContainer.innerHTML = "";
  
  let filteredNews = newsList.filter(news =>
    news.title.toLowerCase().includes(searchingInput.value.toLowerCase())
  );

  // Sort news by title
  if (sortingItem.value === 'asc') {
    filteredNews.sort((a, b) => a.title.localeCompare(b.title));
  } else {
    filteredNews.sort((a, b) => b.title.localeCompare(a.title));
  }

  // Paginate news articles
  let paginatedNews = filteredNews.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  // Create news cards
  paginatedNews.forEach(news => {
    let container = document.createElement('div');
    container.style.border = '1px solid #ddd';
    container.style.borderRadius = '8px';
    container.style.padding = '10px';
    container.style.margin = '5px';
    container.style.textAlign = 'left';
    container.style.backgroundColor = '#fff';

    let title = document.createElement('div');
    title.textContent = `Title: ${news.title}`; 
    title.style.fontWeight = 'bold';
    
    let author = document.createElement('div');
    author.textContent = `Author: ${news.author || 'Venu'}`; 
    
    let date = document.createElement('div');
    date.textContent = `Published: ${new Date(news.publishedAt).toLocaleDateString()}`; 
    
    let description = document.createElement('div');
    description.textContent = `Description: ${news.description}`;
    
    let readMore = document.createElement('a');
    readMore.href = news.url;
    readMore.textContent = 'Read more';
    readMore.target = '_blank';
    readMore.style.color = '#007bff';

    container.appendChild(title);
    container.appendChild(author);
    container.appendChild(date);
    container.appendChild(description);
    container.appendChild(readMore);

    mainContainer.appendChild(container);
  });

  displayPagination(filteredNews.length);
}

// Handle search input to filter news
searchingInput.addEventListener('input', () => {
  currentPage = 1; // Reset to first page on search
  displayNews();
});

// Handle sorting change to sort news
sortingItem.addEventListener('change', () => {
  displayNews();
});

// Display pagination controls based on total items
function displayPagination(totalItems) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  paginationContainer.innerHTML = "";

  for (let i = 1; i <= totalPages; i++) {
    let pageButton = document.createElement('button');
    pageButton.textContent = i;
    pageButton.style.margin = '5px';
    pageButton.style.padding = '10px 15px';
    pageButton.style.border = '1px solid #007bff';
    pageButton.style.backgroundColor = '#007bff';
    pageButton.style.color = 'white';
    pageButton.style.cursor = 'pointer';
    pageButton.style.borderRadius = '4px';
    
    if (i === currentPage) {
      pageButton.style.backgroundColor = '#28a745'; // Highlight the current page
      pageButton.style.borderColor = '#28a745';
    }

    pageButton.addEventListener('click', () => {
      currentPage = i;
      displayNews();
    });

    paginationContainer.appendChild(pageButton);
  }
}
