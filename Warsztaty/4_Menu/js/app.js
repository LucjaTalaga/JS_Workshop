document.addEventListener("DOMContentLoaded", function() {

    const mainListElements = document.querySelectorAll('.nav>ul>li');
    console.log(mainListElements);
    for(let i=0; i<mainListElements.length; i++){
        mainListElements[i].addEventListener("mouseover", function () {
            let subList = mainListElements[i].querySelector('ul');
            if(subList !== null){
                subList.style.display = 'block';
            }
        })

        mainListElements[i].addEventListener("mouseout", function () {
            let subList = mainListElements[i].querySelector('ul');
            if(subList !== null){
                subList.style.display = 'none';
            }
        } );
    }

});