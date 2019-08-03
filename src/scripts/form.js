const labelTitles = document.querySelectorAll('.form_label-title');
const formLabel = document.querySelectorAll('.form_label');
const formInput = document.querySelectorAll('.form_input');
const formIcons = document.querySelectorAll('.form_label-icon');
const mainForm = document.querySelector('#form');

for (let i = 0; i < formInput.length; i++) {

  formInput[i].onfocus = function () {
    labelTitles[i].classList.add('form_label-title--active');
    formIcons[i].classList.add('form_label-icon--active');
    formLabel[i].classList.remove('form_label--error');
  };

  formInput[i].onblur = function () {
    if (!formInput[i].value) {
      labelTitles[i].classList.remove('form_label-title--active');
      formIcons[i].classList.remove('form_label-icon--active');
    }
  };

  mainForm.addEventListener('submit', function (e) {
    if (!formInput[i].value) {
      e.preventDefault()
      formIcons[i].classList.add('form_label-icon--error');
      formLabel[i].classList.add('form_label--error');
      setTimeout(errorClassNone, 2000);
    }
  });

  function errorClassNone() {
    formIcons[i].classList.remove('form_label-icon--error');
  }
};


/*********************************Обработка и отправка формы*******************************************/
$('#form').on('submit', submitForm);

function submitForm(e) {
  e.preventDefault();

  var form = $(e.target),
    data = form.serialize(),
    url = form.attr('action');

  var request = $.ajax({
    type: 'POST',
    url: url,
    data: data
  });


  request.done(function (msg) {
    formPopup.classList.add('form_popup--active');
    formPopupText.textContent = 'Сообщение отправлено!'
  });

  request.fail(function (jqXHR, textStatus) {
    formPopup.classList.add('form_popup--active');
    formPopupText.textContent = 'Произошла ошибка! Сообщение не отправлено.'
  })
};

var formPopup = document.querySelector('.form_popup');
var formPopupText = document.querySelector('.form_popup-text');
const formPopupBtn = document.querySelector('.form_popup-btn');

formPopupBtn.addEventListener('click', function () {
  formPopup.classList.remove('form_popup--active');
  $("form")[0].reset();
});