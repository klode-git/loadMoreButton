let hiddenImages = document.getElementsByClassName('hidden');
let button = document.getElementById('button');

button.addEventListener('click', () => {
  for(let i = 0; i < hiddenImages.length; i++) {
    if(hiddenImages[i].style.display == 'none') {
      hiddenImages[i].style.display = 'block';
      button.textContent = 'LOAD LESS';
    } else {
      hiddenImages[i].style.display = 'none';
      button.textContent = 'LOAD MORE';
    }
  }

}) 