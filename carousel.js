document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.carousel-track');
    const slides = Array.from(track.children);
    const nextButton = document.querySelector('.carousel-button.next');
    const prevButton = document.querySelector('.carousel-button.prev');
    const dotsContainer = document.querySelector('.carousel-dots');
  
    // Create dots
    slides.forEach((_, index) => {
      const dot = document.createElement('button');
      dot.classList.add('dot');
      if (index === 0) dot.classList.add('active');
      dotsContainer.appendChild(dot);
    });
  
    const dots = Array.from(dotsContainer.children);
    let currentSlide = 0;
  
    // Move to slide
    const moveToSlide = (index) => {
      track.style.transform = `translateX(-${index * 100}%)`;
      dots.forEach(dot => dot.classList.remove('active'));
      dots[index].classList.add('active');
      currentSlide = index;
    };
  
    // Auto advance slides
    const autoAdvance = () => {
      currentSlide = (currentSlide + 1) % slides.length;
      moveToSlide(currentSlide);
    };

    // Start auto-sliding timer
    const slideInterval = setInterval(autoAdvance, 3000);

    // Pause auto-sliding when user interacts with controls
    const pauseAutoSlide = () => {
      clearInterval(slideInterval);
    };
  
    // Next button
    nextButton.addEventListener('click', () => {
      pauseAutoSlide();
      currentSlide = (currentSlide + 1) % slides.length;
      moveToSlide(currentSlide);
    });
  
    // Previous button
    prevButton.addEventListener('click', () => {
      pauseAutoSlide();
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      moveToSlide(currentSlide);
    });
  
    // Dot navigation
    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        pauseAutoSlide();
        moveToSlide(index);
      });
    });
  });
