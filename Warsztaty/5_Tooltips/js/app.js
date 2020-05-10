/*
 <span class="tooltipText">Text tooltipa</span>
 */
document.addEventListener("DOMContentLoaded", function() {

    const  toolTip = document.querySelectorAll('.tooltip');

    let toolTipText = document.createElement('span');
    toolTipText.classList.add("tooltipText");

    for (let i = 0; i < toolTip.length; i++) {
        toolTip[i].addEventListener("mouseover", function(){        
            toolTipText.innerText = this.dataset.text;
            this.appendChild(toolTipText);
        });
        toolTip[i].addEventListener("mouseout", function(){
            this.removeChild(toolTipText);
        });
    }
});