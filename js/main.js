    //FOR FOOTER FORM SUBMIT POPUP AND MINOR FIXES

    const form = document.querySelector("#form");
    const emailField = document.querySelector("#form--input_email");
    const submitButton = document.querySelector("#form--input_submit");
    const submitMessage = document.querySelector("#submitted--message");
    const emptyMessage = document.querySelector("#form--empty_message");
    const popupCloseButton = document.querySelector("#popup--close_button");

    //function that runs when submit button is pressed
    form.addEventListener("submit", function (event) {
      event.preventDefault(); //to prevent page reloading when button is clicked

      if (emailField.value == "") {
        emptyMessage.classList.add("empty");
        setTimeout(() => {
          emptyMessage.classList.remove("empty");
        }, 7000);
      } else {
        form.reset(); //to reset the email field of the form when submitted
        emptyMessage.classList.remove("empty"); //so that both empty message and submitted message dont show up at the same time
        copiedMessage.classList.remove("activate-message"); // to close any other popup before activating this one
        submitMessage.classList.add("activate-message");
        setTimeout(() => {
          submitMessage.classList.remove("activate-message");
        }, 3000);
      }
    });

    //FOR CONTACT TEXT COPYING TO CLIPBOARD !!

    const contactText = document.querySelectorAll(".contacts--text");
    const copiedMessage = document.querySelector("#copied--message");

    //functions to copy respective things to clipboard
    function copyNumber() {
      navigator.clipboard.writeText("+9779876543210");
    }
    function copyEmail() {
      navigator.clipboard.writeText("chronova@gmail.com");
    }

    //activating popup whenever contact-texts are clicked
    contactText.forEach((span) => {
      span.addEventListener("click", () => {
        // to close any other popup before activating this one
        submitMessage.classList.remove("activate-message");         
        copiedMessage.classList.add("activate-message");
        setTimeout(() => {
          copiedMessage.classList.remove("activate-message");
        }, 3000);
      });
    });

    //function when popup close button is pressed
    function closePopup() {
      submitMessage.classList.remove("activate-message");
      copiedMessage.classList.remove("activate-message");
    }

