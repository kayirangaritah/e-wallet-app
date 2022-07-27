

const email = localStorage.getItem("email");


const emailHolder = document.getElementById("email");

const sendBtn = document.getElementById("sendBtn");
const recEmail = document.getElementById("rec_email");
const amount = document.getElementById("amount");
const pin = document.getElementById("pin");
const balanceHolder = document.getElementById("balance");

emailHolder.innerHTML = email;

db.collection("balance").doc(email)
    .onSnapshot((doc) => {
        balanceHolder.innerHTML = doc.data().amount;
    });


sendBtn.addEventListener("click", (e)=> {
    e.preventDefault();

    db.collection("transaction").add({
        senderEmail: email,
        recipientEmail: recEmail.value,
        amount: amount.ariaValueMax,
        transaction: "Send",
        createdAt: new Date()
    })
    .then(res => {
        alert(`${amount.value} RWF sent to ${email.value}successfully.`)
    })
    .catch(err=> {
        alert(err.message)
    })
})