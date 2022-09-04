const wrapper = document.getElementById('wrapper');

wrapper.addEventListener('click', (event) => {

  const isButton = event.target.nodeName === 'BUTTON';
  if (!isButton) {
    return;
  }
  

  let button = event.target;
  let temp = document.getElementById('temp');
  let emoji = button.innerHTML;
  

  temp.value = emoji;
  temp.select();
  document.execCommand("copy");
  
});

