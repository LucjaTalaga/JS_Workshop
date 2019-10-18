document.addEventListener("DOMContentLoaded", function() {

    const images = document.querySelectorAll('#gallery img');
    console.log(images);
    const hideButton = document.querySelector('#hideButton');
    console.log(hideButton);
    const showButton = document.querySelector('#showButton');
    console.log(showButton);
    const input = document.querySelector('#tagInput');

    hideButton.addEventListener("click", function () {
        console.log(input.value);
        //input.value = "";
        for(i=0; i<images.length; i++){
            let imgDataSet = images[i].dataset.tag;
            if(imgDataSet.indexOf(input.value) !== -1) {
                images[i].classList.add("invisible");
            }
        }
        input.value = "";
    })

    showButton.addEventListener("click", function () {
        //input.value = "";
        for(i=0; i<images.length; i++){
            let imgDataSet = images[i].dataset.tag;
            if(imgDataSet.indexOf(input.value) !== -1) {
                images[i].classList.remove("invisible");
            }
        }
        input.value = "";
    })



});