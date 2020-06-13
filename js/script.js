'use strict';
const btnOpenForm = document.querySelector('.search-hotels__btn');
const form = document.querySelector('.form-search');

btnOpenForm.addEventListener('click', function(){
  form.classList.toggle('hide');

});

