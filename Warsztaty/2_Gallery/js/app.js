/*
 <div class="fullScreen">
   <img src="./images/wrong.png">
   <button class="close">Close</button>
 </div>
 */

document.addEventListener("DOMContentLoaded", function() {

    const list = document.querySelectorAll('.gallery li');
    console.log(list);
    const body = document.querySelector('body');
    console.log(body);


    for (let i =0; i<list.length; i++){
        list[i].addEventListener("click", function () {
            let image = this.firstElementChild.getAttribute("src");
            let fullScreen = document.createElement('div');
            fullScreen.classList.add("fullScreen");
            let selectedImage = document.createElement('img');
            selectedImage.setAttribute("src", image);
            let button = document.createElement('button');
            button.classList.add("close");
            button.innerText = "Close";
            fullScreen.appendChild(selectedImage);
            fullScreen.appendChild(button);
            body.appendChild(fullScreen);
            button.addEventListener("click", function () {
                body.removeChild(fullScreen);
            })

    })
    }





});