// Rent&Drive - scroll reveal, filtering and simple booking modal
document.addEventListener('DOMContentLoaded', () => {
  // Year
  document.getElementById('year').textContent = new Date().getFullYear();

  // IntersectionObserver for "popout" effect
  const cards = document.querySelectorAll('.car-card');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
      } else {
        // keep visible once shown — comment out if you want hide on scroll up
        // entry.target.classList.remove('in-view');
      }
    });
  }, { root: null, rootMargin: '0px', threshold: 0.18 });

  cards.forEach(c => io.observe(c));

  // Filter buttons
  const filters = document.querySelectorAll('.filter');
  filters.forEach(btn => {
    btn.addEventListener('click', () => {
      filters.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const f = btn.dataset.filter;
      document.querySelectorAll('.car-card').forEach(card => {
        if (f === 'all') {
          card.style.display = '';
        } else {
          card.style.display = card.classList.contains(f) ? '' : 'none';
        }
      });
    });
  });

  // Booking modal elements
  const modal = document.getElementById('bookingModal');
  const modalCar = document.getElementById('modalCar');
  const modalPrice = document.getElementById('modalPrice');
  const modalClose = document.getElementById('modalClose');
  const bookingForm = document.getElementById('bookingForm');
  const modalAlert = document.getElementById('modalAlert');

  function openModal(car, price) {
    modal.setAttribute('aria-hidden', 'false');
    modalCar.textContent = car;
    modalPrice.textContent = `$${price}/day`;
    // focus first input for accessibility
    setTimeout(() => document.getElementById('name').focus(), 80);
  }
  function closeModal() {
    modal.setAttribute('aria-hidden', 'true');
    bookingForm.reset();
    modalAlert.textContent = '';
  }

  // open-book buttons
  document.querySelectorAll('.open-book').forEach(btn => {
    btn.addEventListener('click', () => {
      const car = btn.dataset.car;
      const price = btn.dataset.price;
      openModal(car, price);
    });
  });

  // top CTAs
  document.getElementById('heroBook').addEventListener('click', () => {
    // open modal with first visible car as default
    const first = Array.from(document.querySelectorAll('.car-card')).find(c => c.style.display !== 'none');
    if (first) {
      openModal(first.querySelector('h3').textContent, first.dataset.price);
    } else {
      openModal('Toyota Camry', 49);
    }
  });
  document.getElementById('bookTop').addEventListener('click', () => document.getElementById('heroBook').click());

  // close modal
  modalClose.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  bookingForm.addEventListener('submit', (e) => {
    e.preventDefault();
    modalAlert.textContent = '';

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const pickup = document.getElementById('pickup').value;
    const ret = document.getElementById('return').value;

    if (!name || !email || !pickup || !ret) {
      modalAlert.textContent = 'Please fill in all required fields.';
      modalAlert.style.color = '#ffb4a2';
      return;
    }
    if (new Date(pickup) >= new Date(ret)) {
      modalAlert.textContent = 'Return must be after pickup.';
      modalAlert.style.color = '#ffb4a2';
      return;
    }

    // Simulate success (replace with real API integration)
    modalAlert.textContent = `Thanks ${name}! Your ${modalCar.textContent} is reserved. A confirmation was sent to ${email} (demo).`;
    modalAlert.style.color = '#b7f5d4';

    setTimeout(() => {
      closeModal();
    }, 1600);
  });

  // keyboard accessibility: Esc to close
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.getAttribute('aria-hidden') === 'false') {
      closeModal();
    }
  });

  // Reduce motion preference: if set, disable transitions/animations
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (reduce.matches) {
    document.querySelectorAll('*').forEach(el => el.style.transition = 'none');
  }
});