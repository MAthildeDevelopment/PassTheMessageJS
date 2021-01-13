const form = document.querySelector('#message-form');
const input = document.querySelector('#message');
const lastMessage = document.querySelector('.message-content');

form.addEventListener("submit", function(e) {

    if(input.value == '') {
        let alert = document.querySelector('.feedback');
        alert.classList.add('show');
        setTimeout(() => {
            alert.classList.remove('show');
        }, 2000);
    }


    let message = input.value;
    lastMessage.innerHTML = message;
    console.log(message);
    e.preventDefault();
    input.value = '';



        

});

