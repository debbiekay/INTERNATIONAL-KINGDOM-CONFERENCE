document.getElementById("form").addEventListener("submit", submitForm);

function submitForm(event) {
  event.preventDefault();
  var formData = new FormData(event.target);
  var formObject = {};
  formData.forEach(function(value, key) {
    formObject[key] = value;
  });

  fetch(
    "1qiTxC8a3yoA1ah2tbWS8x-xJQibqDvXQqL-OlH4EHYIEEiepgkCIUrfZ",
    {
      method: "POST",
      body: JSON.stringify(formObject),
    }
  )
  .then(res => {
    if (res.ok) {
      alert("Hello, you've successfully registered for INTERNATIONAL KINGDOM, God bless you and see you there!!");
    } else {
      // Handle error if needed
    }
  })
  .catch(err => console.log(err));

  event.target.reset();
}