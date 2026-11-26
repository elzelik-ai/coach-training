// הופעה עדינה של מקטעים בגלילה, פעם אחת בלבד.
// המחלקה js נוספת כבר בראש העמוד. בלי JavaScript, הכל מוצג כרגיל.
document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.rv');
  if (!('IntersectionObserver' in window)) {
    items.forEach(el => el.classList.add('in'));
    return;
  }
  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.12 });
  items.forEach(el => io.observe(el));
});

// הגדלת צילומי מסך של המלצות
document.addEventListener('DOMContentLoaded', () => {
  const box = document.querySelector('.lightbox');
  if (!box || !box.showModal) return;
  const img = box.querySelector('img');
  document.querySelectorAll('.shot').forEach(b => b.addEventListener('click', () => {
    img.src = b.querySelector('img').src;
    box.showModal();
  }));
  box.querySelector('.lightbox__close').addEventListener('click', () => box.close());
  box.addEventListener('click', e => { if (e.target === box) box.close(); });
});
