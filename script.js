let postbtn = document.querySelector('.post');
let textArea = document.getElementById('newpost');
let feedArea = document.getElementById('feedArea');
let feed = document.querySelector('.feed');
postbtn.addEventListener('click', function () {
    console.log("postbtn has been clicked");

})

postbtn.addEventListener('click', function (e) {

    const newpost = textArea.value;
    // textArea.value ='';
    console.log(newpost);
    let ticketCont = document.createElement("textArea");
    ticketCont.className = "ticket";
    ticketCont.innerHTML = `
                            <div class="ticket-area">${newpost}</div>
                            `
    console.log(ticketCont)
    ticketCont.value = newpost;
});




