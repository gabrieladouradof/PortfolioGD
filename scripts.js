const carousel = document.querySelector('.media-carousel');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let isDown = false;
let startX;
let scrollLeft;

// Função para atualizar a posição do carrossel
function updateCarouselPosition(position) {
  carousel.style.transform = `translateX(-${position}px)`;
}

// Eventos de arrastar com o mouse
carousel.addEventListener('mousedown', (e) => {
  isDown = true;
  startX = e.pageX - carousel.offsetLeft;
  scrollLeft = carousel.scrollLeft;
});

carousel.addEventListener('mouseleave', () => {
  isDown = false;
});

carousel.addEventListener('mouseup', () => {
  isDown = false;
});

carousel.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - carousel.offsetLeft;
  const walk = (x - startX) * 2; // Velocidade de rolagem
  carousel.scrollLeft = scrollLeft - walk;
});

// Controle de rotação com os botões
let scrollPosition = 0;
const scrollAmount = carousel.scrollWidth / 4; // Ajuste o valor conforme necessário

prevButton.addEventListener('click', () => {
  scrollPosition = Math.max(scrollPosition - scrollAmount, 0);
  updateCarouselPosition(scrollPosition);
});

nextButton.addEventListener('click', () => {
  scrollPosition = Math.min(scrollPosition + scrollAmount, carousel.scrollWidth - carousel.clientWidth);
  updateCarouselPosition(scrollPosition);
});
