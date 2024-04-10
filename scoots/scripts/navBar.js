const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('nav');

hamButton.addEventListener('click', () => {
    console.log('click');
    navigation.classList.toggle('show');
    hamButton.classList.toggle('show');
});