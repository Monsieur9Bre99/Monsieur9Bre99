// And finally, a little script for the login/registration system

// Variables declarations

        let container = document.querySelector('.container');

        let button = document.querySelector('.btnLog_popup');

        let closeBtn = document.querySelector('.close');

        let login = document.querySelector('.login-link');

        let register = document.querySelector('.register-link');

        register.addEventListener('click', () => {
            container.classList.add('active')
        });

        login.addEventListener('click', () => {
            container.classList.remove('active')
        });

        button.addEventListener('click', () => {
            container.classList.add('popup')
        });

        closeBtn.addEventListener('click', () => {
            container.classList.remove('popup')
        });