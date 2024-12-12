
// Array of image objects with image URL and correct answer
const images = [
  {
    src: './images/things/blackboard.webp',
    answer: 'blackboard',
  },
  {
      src: './images/things/chair.webp',
      answer:"Chair"
  },
  {
      src: './images/things/eraser.webp',
      answer:"eraser"
  },
  {
      src: './images/things/fan.webp',
      answer:"Fan"
  },
  {
      src: './images/things/pencil.webp',
      answer:"Pencil"
  },
  {
      src: './images/things/table.webp',
      answer:"Table"
  },
];

let currentImageIndex = 0;
let guessCount = 0;

function nextImage() {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  const currentImage = images[currentImageIndex];
  document.getElementById('image').src = currentImage.src;
  document.getElementById('answer').value = '';
  document.getElementById('result').textContent = '';
}


function checkAnswer() {
  const userAnswer = document.getElementById('answer').value.trim();
  const currentImage = images[currentImageIndex];
  const resultText = document.getElementById('result');
  const modal = document.querySelector(".modal")

  if (userAnswer === "") {
resultText.textContent = 'กรุณาใส่คำตอบ!';
resultText.style.color = 'orange';
return;
}
  
  if (userAnswer.toLowerCase() === currentImage.answer.toLowerCase()) {
      resultText.textContent = 'Correct! 🎉';
      resultText.style.color = 'green';
      guessCount++;
  } else {
      resultText.textContent = `Wrong! The correct answer is ${currentImage.answer}.`;
    resultText.style.color = 'red';
  }

  if (guessCount === images.length) {
      modal.style.display="flex"
      modal.style.pointerEvents="all";
  }
}

// Initialize the first image when the page loads
window.onload = nextImage;