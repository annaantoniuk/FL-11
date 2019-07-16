const emailNumber = 6;
const passwordNumber = 5;
let userEmail = prompt('Enter your email',' ');

    if (emailNumber > userEmail.length) {
        alert("I don't know any emails having name length less than 6 symbols")
    } else if (userEmail === 'user@gmail.com' || userEmail === 'admin@gmail.com') {
        let userPass = prompt('enter your password');
        if (userPass === null || userPass === '') {
            alert('Canceled.')
        } else {
            if (userEmail === 'user@gmail.com') {
                if (userPass === 'UserPass') {
                    let changePass = confirm('Do you want to change your password?');
                    if (changePass === false) {
                        alert('You have failed the change.')
                    } else {
                        let oldPass = prompt('Write the old password');
                        if (oldPass === userPass) {
                            let newPass = prompt('Enter you new password');
                            if (newPass.length < passwordNumber) {
                                alert('It’s too short password. Sorry.');
                            } else {
                                let confirmPass = prompt('Enter the password again');
                                if (confirmPass !== newPass) {
                                    alert('You wrote the wrong password.');
                                } else {
                                    alert('You have successfully changed your password.');
                                }
                            }
                        } else { 
                            alert('Wrong password');
                        }
                    }
                } else {
                    alert('Wrong password');
                }
            }
             if (userEmail === 'admin@gmail.com') {
                if (userPass === 'AdminPass') {
                    let changePass = confirm('Do you want to change your password?');
                    if (changePass === false) {
                        alert('You have failed the change.')
                    } else {
                        let oldPass = prompt('Write the old password');
                        if (oldPass === userPass) {
                            let newPass = prompt('Enter you new password');
                            if (newPass.length < passwordNumber) {
                                alert('It’s too short password. Sorry.');
                            } else {
                                let confirmPass = prompt('Enter the password again');
                                if (confirmPass !== newPass) {
                                    alert('You wrote the wrong password.');
                                } else {
                                    alert('You have successfully changed your password.');
                                }
                            }
                        } else { 
                            alert('Wrong password');
                        }
                    }
                } else {
                    alert('Wrong password');
                }
            } 
        }
    } else {
        alert('I don’t know you');
    }
else (userEmail === null) {
    alert('Canceled.')    
} 
