$(document).ready(function () {

    $("#register").click(function () {

        var userid = document.registration.userid.value;
        var pwd = document.registration.pwd.value;
        var firstName = document.registration.firstName.value;
        var lastName = document.registration.lastName.value;
        var email = document.registration.email.value;
        var birthDate = document.registration.birthDate.value;
        var country = document.registration.country.value;
        var gender = document.registration.gender.value;
        var age = document.registration.age.value;
        var career = document.registration.career.value;

        if (userid_validation(userid)) {
            if (password_validation(pwd)) {
                if (firstname_validation(firstName)) {
                    if (lastname_validation(lastName)) {

                        alert("Register Successfully!");

                        var user = {
                            "userid": "",
                            "pwd": "",
                            "firstName": "",
                            "lastName": "",
                            "email": "",
                            "birthDate": "",
                            "country": "",
                            "gender": "",
                            "age": "",
                            "career": "",
                            "comments":[]


                        };

                        user.userid = $("#userid").val();
                        user.pwd = $("#pwd").val();
                        user.firstName = $("#firstName").val();
                        user.lastName = $("#lastName").val();
                        user.email = $("#email").val();
                        user.birthDate = $("#birthDate").val();
                        user.country = $("#country").val();
                        user.gender = document.querySelector('input[name = "gender"]:checked').value;
                        user.age = $("#age").val();
                        user.career = document.querySelector('input[name = "career"]:checked').value;

                        var date = new Date();
                        date.setTime(date.getTime() + 3 * 24 * 60 * 60 * 1000);
                        var expires = "; expires=" + date.toGMTString();
                        var val = JSON.stringify(user);
                        var name = user.userid;
                        var stringa = name + "=" + val + expires + "; path=/";
                        document.cookie = stringa;
						var url = "userprofile.html?" + name;
						location.href = url;	
                    }
                }
            }
        } else {
            alert("Not successfully");
        }


        function userid_validation(userid) {
            var uidRegExp = /^[A-Za-z\d_-]{3,15}$/
            var uid_len = userid.length;

            if (uid_len == 0) {
                alert("Please input User ID");
                userid.focus();
                return false;
            }

            var valid = uidRegExp.test(userid);
            if (!valid) {
                alert("The User ID must have 3 - 15 characters, with only 0-9, a-z, A-Z, '_', or '-'.");
                userid.focus();
                return false;
            }


            var name = userid + "=";
            var ca = document.cookie.split(';');
            for (var i = 0; i < ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) == ' ') {
                    c = c.substring(1);
                }
                if (c.indexOf(name) == 0) {

                    alert("This User ID has existed, please use another one");
                    return false;
                }
            }




            return true;
        }

        function password_validation(password) {

            var psw_len = password.length;
            if (psw_len == 0) {
                alert("Please input Password");
                password.focus();
                return false;
            }


            return true;
        }

        function firstname_validation(firstname) {
            var firstnameRegExp = /^[a-z ,.'-]+$/i
            var firstname_len = firstname.length;
            if (firstname_len == 0) {
                alert("Please input First Name");
                firstname.focus();
                return false;
            }
            var valid = firstnameRegExp.test(firstname);

            if (!valid) {
                alert("Please enter the correct first name form");
                firstname.focus();
                return false;
            }

            return true;
        }

        function lastname_validation(lastname) {
            var lastnameRegExp = /^[a-z ,.'-]+$/i
            var lastname_len = lastname.length;
            if (lastname_len == 0) {
                alert("Please input Last Name");
                lastname.focus();
                return false;
            }
            var valid = lastnameRegExp.test(lastname);
            if (!valid) {
                alert("Please enter the correct last name form");
                lastname.focus();
                return false;
            }
            return true;
        }


    });

    function getCookie(cname) {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

});