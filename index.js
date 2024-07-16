const modal = document.getElementById('modal')                          // get modal element - container for the modal
const modalCloseBtn = document.getElementById('modal-close-btn')        // get modal close button - display 'disabled' close button
const consentForm = document.getElementById('consent-form')             // get consent form element - consists of name and email inputs
const modalText = document.getElementById('modal-text')                 // get modal text element - main message in modal
const declineBtn = document.getElementById('decline-btn')               // get decline button - displays decline button
const modalChoiceBtns = document.getElementById('modal-choice-btns')    // get modal choice buttons element - container for buttons in modal

// loads modal in 1.5 seconds
setTimeout(() => {
    modal.style.display = 'inline'                                      // changes modal element display to 'inline'
}, 1500)

// click event for modal close button removes modal
modalCloseBtn.addEventListener('click', () => {
    modal.style.display = 'none'                                        // changes modal element display to 'none' 
})

// mouseenter event for decline button changes parent class
declineBtn.addEventListener('mouseenter', () => {
    modalChoiceBtns.classList.toggle('modal-choice-btns-reverse')       // toggle choice buttons class that reverses flex direction
})

// form submit event for consent form 
consentForm.addEventListener('submit', (e) => {
    e.preventDefault()                                                  // prevent default page reloading

    const consentFormData = new FormData(consentForm)                   // get the form data from consent form
    const fullName = consentFormData.get('fullName')                    // extract specific input field data from form data

    modalText.innerHTML = `
        <div class="modal-inner-loading">
            <img src="assets/loading.svg" class="loading" />
            <p id="upload-text">Uploading your data to the dark web...</p>
        </div>    
    `                                                                   // set modal text content to uploading message

    // change upload text element content to simulate transaction in 1.5 seconds
    setTimeout(() => {
        document.getElementById('upload-text').innerText = `
            Making the sale...
        `                                                               // get and modify upload text element
    }, 1500)                                                     

    // change modal inner element content to final message
    setTimeout(() => {
        document.getElementById('modal-inner').innerHTML = `
            <h2>Thanks <span class="modal-display-name">${fullName}</span>, you sucker! </h2>
            <p>We just sold the rights to your eternal soul.</p>
            <div class="idiot-gif">
                <img src="assets/pirate.gif" />
            </div>
        `                                                               // get and modify modal inner element
    modalCloseBtn.disabled = false                                      // enable the modal close button
    }, 3000)
})