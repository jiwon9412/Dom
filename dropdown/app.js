const dropdownDiv = document.querySelector('.dropdown');
const dropdownMenu = document.querySelector('.dropdown-menu');

const dropdownOptions = document.querySelectorAll('.dropdown-option');
const dropdownToggle = document.querySelector('.dropdown-toggle');
const nextBtn = document.querySelector('.next-button');



dropdownDiv.addEventListener('click', function(){
    dropdownMenu.classList.toggle('show');
})

dropdownOptions.forEach((item) => {
    item.addEventListener('click', function(){
        //console.log(item.textContent);
        dropdownToggle.textContent = item.textContent;
        dropdownToggle.classList.add('selected');
        nextBtn.disabled = false;
    })
})
