
let form = document.forms.addTransaction;

let ct = 'vip'

let inpV = document.querySelector('.vallet')
let inpP = document.querySelector('.price')
let inpC = document.querySelector('.categorie')

form.onsubmit = (event) => {
  event.preventDefault();
  if(inpV.value.length === 0) {
    inpV.style.borderColor = 'red' 
  } else {
    inpV.style.borderColor = 'black' 
  }
  if(inpP.value < 99) {
    inpP.style.borderColor = 'red' 
    return
  } else {
    inpP.style.borderColor = 'black' 
  }
  if(inpC.value != ct || inpC.value.length === 0) {
    inpC.style.borderColor = 'red' 
    return
  } else {
    inpC.style.borderColor = 'black' 
    let tr = {
      vallet: inpV.value,
      price: inpP.value,
      categorie: inpC.value
    }
    let fm = new FormData(form)
    
    fm.forEach((value, key) => {
      tr[key] = value
    })
    console.log('Успешно!');
    console.log(tr);
  }
}
