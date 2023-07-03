import throttle from "lodash.throttle";

const form = document.querySelector('.feedback-form');
form.addEventListener('input', throttle(handlerInput, 500));
form.addEventListener('click', load);
form.addEventListener('submit', handlerSubmit);

const user = {};
refs.feedbackForm.addEventListener('submit', onSubmitForm);
refs.feedbackForm.addEventListener('input', throttle(onInputForm, 500));
localStorageHistory();

function handlerInput(evt) {
    user[evt.target.name] = evt.target.value;
    localStorage.setItem("feedback-form-state", JSON.stringify(user));
    }

    function handlerSubmit() {
        localStorage.clear()
        }
        
        function load (evt) {
            try {
            
            const savedSettings = localStorage.getItem("feedback-form-state");
            const parsedSettings = JSON.parse(savedSettings)
        
            form.elements.email.value = parsedSettings.email 
            form.elements.message.value = parsedSettings.message  
        
          } catch (error) {
            console.error("Get state error: ", error.message);
          }
        };