function handleForm(e){
  e.preventDefault();
  const name=document.getElementById('name').value.trim();
  const email=document.getElementById('email').value.trim();
  const message=document.getElementById('message').value.trim();
  const result=document.getElementById('formResult');
  if(!name||!email||!message){
    result.textContent='Prašome užpildyti visus laukus.';
    result.style.color='crimson';return;
  }
  result.textContent='Žinutė išsaugota lokaliai (demo).';
  result.style.color='green';
  document.getElementById('contactForm').reset();
}
window.handleForm=handleForm;