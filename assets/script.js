const sections = document.querySelectorAll('.fade');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, {
    threshold:0.1,
    rootMargin:"-50px 0px -50px 0px"

});
sections.forEach(section => {
  observer.observe(section);
});