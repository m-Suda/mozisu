const $textarea = document.getElementById('input-area');
const $inputText = document.getElementById('length-char');

$textarea.addEventListener('keydown', el => {
    countLength(el.target.value);
});

$textarea.addEventListener('keyup', el => {
    countLength(el.target.value);
});

function countLength(str) {
    $inputText.value = [...str].length;
}