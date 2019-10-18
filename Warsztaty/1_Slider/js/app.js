document.addEventListener("DOMContentLoaded", function() {
    const nextButton = document.querySelector('#nextPicture');
    const prevButton = document.querySelector('#prevPicture');
    console.log(nextButton, prevButton);
    const list = document.querySelectorAll('.slider li');
    let imageIndex = 0;
    console.log(list.length);
    console.log(imageIndex);
    list[imageIndex].classList.add("visible");

    nextButton.addEventListener("click", function () {
        if(imageIndex>=0 && imageIndex<list.length-1) {
            list[imageIndex].classList.remove("visible");
            imageIndex++;
            list[imageIndex].classList.add("visible");
        }
        else{
            list[imageIndex].classList.remove("visible");
            imageIndex = 0;
            list[imageIndex].classList.add("visible");
        }
    })

    prevButton.addEventListener("click", function () {
        if(imageIndex>0 && imageIndex<list.length) {
            list[imageIndex].classList.remove("visible");
            imageIndex--;
            list[imageIndex].classList.add("visible");
        }
        else {
            list[imageIndex].classList.remove("visible");
            imageIndex= list.length-1;
            list[imageIndex].classList.add("visible");
        }
    })

});