var data = {
    "valid": {
        "username": "admin@admin.com",
        "password": "kryptonite",
        "response": "200"
    },
    "invalid": {
        "username": "foo",
        "password": "bar",
        "response": "Username or password is incorrect"
    }
};

var login = { 
    "url" : "/login",
    "next_url" : '/my-account/info',
    "locator" : {
        "id" : {
            "input_username" : "username",
            "input_password" : "password",
        },
        "css" : {
            "btn_login" : "login_btn",
            "res_error" : ".alert.alert-danger"
        } 
    },
 };

module.exports = {
  data,
  login
} 