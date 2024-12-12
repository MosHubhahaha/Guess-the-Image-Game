
// Array of image objects with image URL and correct answer
const images = [
  {
    src: './images/animals/chicken.webp',
    answer: 'Chicken',
  },
  {
      src: './images/animals/cat1.webp',
      answer:"Cat"
  },
  {
      src: './images/animals/dog1.webp',
      answer:"Dog"
  },
  {
      src: './images/animals/ant.webp',
      answer:"Ant"
  },
  {
      src: './images/animals/bird.webp',
      answer:"Bird"
  },
  {
      src: './images/animals/lion.webp',
      answer:"Lion"
  },
  {
      src: './images/animals/tiger.webp',
      answer:"Tiger"
  },
  {
      src: './images/animals/turtle.webp',
      answer:"Turtle"
  },
  {
      src: './images/animals/snake.webp',
      answer:"Snake"
  },
  {
      src: './images/animals/dear.webp',
      answer:"Dear"
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
