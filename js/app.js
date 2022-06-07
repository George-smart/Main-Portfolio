/*const controlBtns = document.querySelectorAll('.controls');
const controlBtn = document.querySelectorAll('.control');
const sections = document.querySelectorAll('.section');
const mainContainer = document.querySelector('.main-content');

( function(){
    function pageTransition() {
        Array.from(controlBtn).forEach(btn =>{
            btn.addEventListener('click', function(){
                let currentBtn = document.querySelectorAll('.active-btn')
                currentBtn[0].className = currentBtn[0].className.replace('active-btn', "")
                this.className += ' active-btn'
            })
        })
    }
    
    mainContainer.addEventListener('click', function(e){
        let id = e.target.dataset.id
        console.log(id)
        if(id) {
            // Remove Active class from Btn
            Array.from(controlBtns).forEach(btn =>{
                btn.classList.remove('active')
            })
        
            
            // Remove active class from previous Section
            Array.from(sections).forEach(section =>{
                section.classList.remove('active')
            })
            e.target.classList.add('active')

            // Add Active class to current Section
            let element = document.getElementById(id)
            element.classList.add('active')
        }
    });

    const themeBtn = document.querySelector('.theme-btn')
        themeBtn.addEventListener('click', () =>{
            document.body.classList.toggle('light-mode')
        })
    pageTransition();
    

})();*/

(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();
