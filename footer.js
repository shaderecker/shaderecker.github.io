var el = document.getElementById('footer');
  el.style.display = 'none';

function expandFooter() {
    var el = document.getElementById('footer');
    if (el.style.display === 'none') {
        el.style.display = 'inherit';
    } else {
        el.style.display = 'none';
    }
}