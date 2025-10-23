// script.js
const track = document.querySelector('.slide-track');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const images = document.querySelectorAll('.slide-track img');

let index = 0;
const visibleCount = 5;
const total = images.length;

function updateSlider() {
  const slideWidth = images[0].clientWidth + 10; // 10 = margin hai bên
  track.style.transform = `translateX(${-index * slideWidth}px)`;
}

// Chuyển sang ảnh kế tiếp
function nextSlide() {
  if (index < total - visibleCount) {
    index++;
  } else {
    index = 0;
  }
  updateSlider();
}

// Chuyển sang ảnh trước
function prevSlide() {
  if (index > 0) {
    index--;
  } else {
    index = total - visibleCount;
  }
  updateSlider();
}

// Tự động chạy
let autoSlide = setInterval(nextSlide, 3000); // 3 giây/lần

// Khi người dùng bấm nút
nextBtn.addEventListener('click', () => {
  nextSlide();
  resetAutoSlide();
});

prevBtn.addEventListener('click', () => {
  prevSlide();
  resetAutoSlide();
});

function resetAutoSlide() {
  clearInterval(autoSlide);
  autoSlide = setInterval(nextSlide, 3000);
}
