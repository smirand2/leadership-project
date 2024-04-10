function handleSubmit(event) {
    event.preventDefault();
    let data = new FormData(event.target);
    let value = data.get('name');
    console.log({value});
  }
  
  const form = document.querySelector('form');
  form.addEventListener('submit', handleSubmit);
  