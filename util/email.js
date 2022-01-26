const Mail = require('@sendgrid/mail') // install node-package


module.exports = class Email {
    constructor(user, url) {
        this.to = user.email;
        this.url = url;
        this.fromEmail = 'verification@eventx-online.com';
        this.fromName = 'EventX-online.com';
    }
}