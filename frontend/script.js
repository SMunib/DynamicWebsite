// Fetch dynamic greeting from the backend
fetch('/api/greeting')
  .then(response => response.json())
  .then(data => {
    document.getElementById('greeting').textContent = data.greeting;
  })
  .catch(error => console.error('Error fetching greeting:', error));

// Function to toggle dark/light theme
function toggleTheme() {
    document.body.classList.toggle('dark-theme');
}

// Event listener for theme toggle button
document.getElementById('themeToggle').addEventListener('click', toggleTheme);
