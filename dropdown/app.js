const dropdownDiv = document.querySelector('.dropdown');

const dropdownMenu = document.querySelector('.dropdown-menu');



dropdownDiv.addEventListener('click', function(){
    dropdownMenu.classList.toggle('show');
})

