document.addEventListener('DOMContentLoaded', (event) => {
    // Select the 'people' container using its new ID
    const peopleContainer = document.getElementById('peopleContainer');

    // Fetch contacts from the backend PHP script
    fetch('data.php')
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                console.error('Error fetching contacts:', data.error);
                return;
            }
            peopleContainer.innerHTML = ''; // Clear existing content
            
            // Iterate over the contacts and create a card for each
            data.forEach(data => {
                const card = document.createElement('div');
                // Give the cards a unique class, e.g., 'executive-card'
                card.classList.add('matExe'); 

                card.innerHTML = `
                <img src=${data.Image} alt=${data.Name} style="aspect-ratio:4/5">
                <h4 style="text-align:center;">${data.Name}</h4>
                <ul>
                  <li>Status: <br />${data.Status}</li><br />
                  <li>Program of Study: <br /> ${data.Program}</li><br />
                  <li>Engineering Interest: <br />${data.Interest}</li><br />
                  <li>Email: <br /><a href="mailto:${data.Email}">${data.Email}</a></li>
                </ul>
                `;

                peopleContainer.appendChild(card); // Append the card directly to the people div
            });
        })
        .catch(error => console.error('Error:', error));
});
