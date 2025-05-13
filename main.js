function togglePopup(e) {
  e.stopPropagation(); // Prevents the click from reaching window
  const popup = document.getElementById('popup');
  popup.classList.toggle('hidden');
}

window.addEventListener('click', function (e) {
  const popupWrapper = document.querySelector('.popup-wrapper');
  if (!popupWrapper.contains(e.target)) {
    document.getElementById('popup').classList.add('hidden');
  }
});

// Prevent clicks inside the popup from closing it
document.addEventListener('DOMContentLoaded', () => {
  const popup = document.getElementById('popup');
  popup.addEventListener('click', (e) => e.stopPropagation());
});

document.addEventListener('DOMContentLoaded', () => {
    const wrapper = document.querySelector('.carousel-track-wrapper');
    const card = document.querySelector('.testimonial-card');
    const leftBtn = document.querySelector('.carousel-arrow.left');
    const rightBtn = document.querySelector('.carousel-arrow.right');
  
    const scrollAmount = card.offsetWidth + 200;
  
    leftBtn.addEventListener('click', () => {
      wrapper.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    });
  
    rightBtn.addEventListener('click', () => {
      wrapper.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });

    let isDragging = false;
let startX;
let scrollLeft;

wrapper.addEventListener('mousedown', (e) => {
  isDragging = true;
  wrapper.classList.add('dragging');
  startX = e.pageX - wrapper.offsetLeft;
  scrollLeft = wrapper.scrollLeft;
});

wrapper.addEventListener('mouseleave', () => {
  isDragging = false;
  wrapper.classList.remove('dragging');
});

wrapper.addEventListener('mouseup', () => {
  isDragging = false;
  wrapper.classList.remove('dragging');
});

wrapper.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  e.preventDefault();
  const x = e.pageX - wrapper.offsetLeft;
  const walk = (x - startX) * 1.5; // multiplier = scroll speed
  wrapper.scrollLeft = scrollLeft - walk;
});

  });

  