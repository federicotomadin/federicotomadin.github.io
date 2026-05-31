const SendEmail = () => {

    const email = document.getElementById('email').value
    const name = document.getElementById('name').value
    const message = document.getElementById('message').value
    const subject = document.getElementById('subject').value

    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "federicotomadin@gmail.com",
        Password: "0050A9C14AA6A451F838C3526F4E6AD56D76",
        To: "federicotomadin@gmail.com",
        From: "federicotomadin@gmail.com",
        Subject: subject,
        Body: "You are received from <strong>" + email + "</strong>wich his/her name is <strong>" +  name + "</strong> the next message <i>" + message + "</i>"
    }).then(
        message => alert(message)
    )
}
