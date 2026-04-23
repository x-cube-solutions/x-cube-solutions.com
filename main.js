// Scroll animations
function handleScrollAnimations() {
  var els = document.querySelectorAll('.fade-up');
  els.forEach(function(el) {
    var rect = el.getBoundingClientRect();
    if (rect.top <= window.innerHeight * 0.92) {
      el.classList.add('visible');
    }
  });
}

// Contact type selector
function selectType(el, type) {
  document.querySelectorAll('.contact-type').forEach(function(t) {
    t.classList.remove('active');
  });
  el.classList.add('active');
  var d = document.getElementById('type-display');
  if (d) d.value = type;
}

window.addEventListener('scroll', handleScrollAnimations);
window.addEventListener('load', function() {
  setTimeout(handleScrollAnimations, 100);
});
