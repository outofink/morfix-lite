document.getElementById('main').addEventListener('click', function(e) {
  if (e.target.tagName !== 'H3' && e.target.tagName !== 'MAIN') return;
  const query = document.getElementById('search');
  query.focus();
});
