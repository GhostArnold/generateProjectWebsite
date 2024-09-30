const galleryItems = document.querySelectorAll('.gallery-item');

      galleryItems.forEach((item) => {
        item.addEventListener('click', () => {
          const overlay = item.querySelector('.gallery-overlay');
          if (overlay.classList.contains('in-view')) {
            overlay.classList.remove('in-view');
          } else {
            overlay.classList.add('in-view');
          }
        });
      });