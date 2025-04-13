function addCard() {
    const container = document.getElementById('card-container');
  
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <img src="https://picsum.photos/300/200?random=${Math.floor(Math.random() * 1000)}" alt="Random Image">
      <div class="card-content">
        <h3>Card Title</h3>
        <p class="card-text">This is a hidden paragraph that will show or hide when the button is clicked.</p>
        <button class="toggle-btn" onclick="toggleText(this)">Show More</button>
      </div>
      
    `;
  
    container.appendChild(card);
  }
  
  function toggleText(button) {
    const paragraph = button.previousElementSibling;
    const isVisible = paragraph.style.display === 'block';
  
    paragraph.style.display = isVisible ? 'none' : 'block';
    button.textContent = isVisible ? 'Show More' : 'Show Less';
  }
  