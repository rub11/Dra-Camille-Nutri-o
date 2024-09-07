function moveCarousel(direction) {
    const carousel = document.querySelector('.carousel-items');
    const itemWidth = document.querySelector('.itens-box').offsetWidth;
    carousel.scrollBy({ left: itemWidth * direction, behavior: 'smooth' });
  }

 
