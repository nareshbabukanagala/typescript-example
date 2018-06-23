class Login {
    constructor() {
        this.userName = element(by.model('Auth.user.name'));
        this.password = element(by.name('password'));
        this.userName2 = element(by.id('formly_1_input_username_0'));
        this.login = element(by.buttonText('Login'));
    }

    loginfun(user,pass,user2){
    	this.userName.clear();
    	this.userName.sendKeys(user);
    	this.password.sendKeys(pass);
    	this.userName2.sendKeys(user2);
    	this.login.click();
    }
}
module.exports = new Login();

