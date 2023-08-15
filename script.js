const textContainer = document.getElementById('text-container');
const textFileUrl = "D:\html\HTML\NJ_website\text123.txt";

fetch(textFileUrl)
  .then(response => response.text())
  .then(text => {
    textContainer.textContent = text;
  })
  .catch(error => {
    console.error('Error fetching text file:', error);
  });