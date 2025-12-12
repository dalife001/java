const input = document.getElementById('query');
input.addEventListener('input', (event) => {
    document.getElementById('searchForm').addEventListener('submit', async function(event) {
        event.preventDefault();
        const query = document.getElementById('query').value.trim();
        const resultsDiv = document.getElementById('results');
        resultsDiv.innerHTML = '';
        if (!query) return;
        try {
            const response = await fetch(`https://api.tvmaze.com/search/shows?q=${encodeURIComponent(query)}`);
            const data = await response.json();
            console.log(data); 
            if (Array.isArray(data) && data.length > 0) {
                data.forEach(item => {
                    const show = item.show;
                    const article = document.createElement('article');

                    const h2 = document.createElement('h2');
                    h2.textContent = show.name;
                    article.appendChild(h2);

                    const a = document.createElement('a');
                    a.href = show.url;
                    a.textContent = 'Show details';
                    a.target = '_blank';
                    article.appendChild(a);

                    const img = document.createElement('img');
                    if (show.image && show.image.medium) {
                        img.src = show.image.medium;
                    } else {
                        img.src = 'https://placehold.co/210x295?text=Not%20Found';
                    }
                    img.alt = show.name;
                    article.appendChild(img);

                    const summaryDiv = document.createElement('div');
                    summaryDiv.innerHTML = show.summary || 'No summary.';
                    article.appendChild(summaryDiv);

                    resultsDiv.appendChild(article);
                });
            } else {
                resultsDiv.textContent = 'No results found.';
            }
        } catch (error) {
            resultsDiv.textContent = 'Error fetching data.';
            console.error(error);
        }
    });
});
