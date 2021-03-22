
let popup = document.querySelector('.popup');
let openPopupBtn = document.querySelector('.profile__edit-button');

let closePopupBtn = popup.querySelector('.popup__closebutton');

let popupСontainer = popup.querySelector('.popup__container');

let nameInput = popupСontainer.querySelector('[name="name"]');

let jobInput = popupСontainer.querySelector('[name="job"]');

let nameNew = document.querySelector('.profile__text1');

let jobNew = document.querySelector('.profile__text2');



function openPopup() {
  popup.classList.add('popup_openclose')
  nameInput.value =  nameNew.textContent 
  jobInput.value = jobNew.textContent
}



function closePopup() {
  popup.classList.remove('popup_openclose')
}


openPopupBtn.addEventListener('click', openPopup);


closePopupBtn.addEventListener('click', closePopup);


function formSubmitHandler (evt) {
  evt.preventDefault();   
  nameNew.textContent = nameInput.value 
  jobNew.textContent = jobInput.value   
  closePopup();                            
}

popupСontainer.addEventListener('submit', formSubmitHandler);

