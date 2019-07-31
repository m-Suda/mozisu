const $textarea = document.getElementById('input-area');
const $inputText = document.getElementById('length-char');

$textarea.addEventListener('keydown', el => {
  $inputText.value = [...el.target.value].length;
});

$textarea.addEventListener('keyup', el => {
  $inputText.value = [...el.target.value].length;
});