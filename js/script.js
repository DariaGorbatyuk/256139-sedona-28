const btnOpenForm = document.querySelector('.search-hotels__btn');
const form = document.querySelector('.form-search');
const inpData = document.querySelectorAll('.form-search__data-inp');
const inpAdult = document.querySelector('.group-adults-inp');
const inpChildren = document.querySelector('.group-children-inp');

if (btnOpenForm){
  form.classList.add('hide');
}

let isStorageSupport = true;
let storageAdult = '';
let storageChildren = '';

try{
  storageAdult = localStorage.getItem('amountAdult');
  storageChildren = localStorage.getItem('amountChildren')
}catch(err){
  isStorageSupport = false;
}


btnOpenForm.addEventListener('click', function(){
   form.classList.toggle('hide');
  if(!form.classList.contains('hide')){
    inpData[0].focus();
    if (isStorageSupport){
      inpAdult.value = storageAdult;
      inpChildren.value = storageChildren;
    }
  }else{
    form.classList.remove("error");
  }
});

form.addEventListener('submit', function(evt){
  if(!inpAdult.value || !inpChildren.value || !inpData[0].value || !inpData[1].value){
    evt.preventDefault();
    form.classList.remove("error");
    form.offsetWidth = form.offsetWidth;
    form.classList.add("error");
  }else if (isStorageSupport){
     localStorage.setItem('amountAdult', inpAdult.value );
     localStorage.setItem('amountChildren', inpChildren.value);
   }
});
