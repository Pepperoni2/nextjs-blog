const Mail = require('@sendgrid/mail') // install node-package


module.exports = class Email {
    constructor(user, url) {    // constructer in 
        this.to = user.email;
        this.url = url;
        this.fromEmail = 'verification@eventx-online.com';      // Email-Address of the verification sender (sends the verification email)
        this.fromName = 'EventX-online.com';                    // same from one row above but simplified name
    }

    async sendMagicLink(){
        const MailOptions = {
            to: this.to,
            from: {                 // takes the values from the Email class
                email: this.fromEmail,
                name: this.fromName,
            },
            templateId: ' ',        // insert templateId from sendgrid dashboard
            dynamic_template_data:{
                url: this.url,
            },
        };

        await Mail.send(MailOptions).then(() => {}, console.error);     // sends mail to user | else display error in console
    }
};