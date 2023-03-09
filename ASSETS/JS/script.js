function getData() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phoneNumber").value;
  let subject = document.getElementById("subject").value;
  let message = document.getElementById("message").value;

  if (name == "") {
    return alert("nama harus di isi");
  } else if (email == "") {
    return alert("email harus di isi");
  } else if (phone == "") {
    return alert("telpon harus di isi");
  } else if (subject == "") {
    return alert("pesan harus di isi");
  } else if (message == "") {
    return alert("alamat harus di isi");
  }

  const emailReceiver = "alwirazaq022@gmail.com";

  let a = document.createElement("a");
  a.href = `mailto:${emailReceiver}?subject=${subject}&body=Hello my name is ${name}, alamat saya ${message}, untuk menghubungi saya di ${phone}`;
  a.click();
}