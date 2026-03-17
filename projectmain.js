
document.getElementById('bookNowBtn').addEventListener('click', function () {
  var myModal = new bootstrap.Modal(document.getElementById('reservationModal'));
  myModal.show();
});

// Simple Reservation Submit
function submitReservation() {
  alert("Thank you! Your reservation has been submitted.");
  // Close modal after submission
  var reservationModal = bootstrap.Modal.getInstance(document.getElementById('reservationModal'));
  reservationModal.hide();
}


function scrollToReservation() {
    document.getElementById("e").scrollIntoView({ behavior: "smooth" });
  }

function submitReservation() {
   const data = {
    name: document.getElementById("name").value,
    phone: document.getElementById("phone").value,
    email: document.getElementById("email").value,
    date: document.getElementById("date").value,
    time: document.getElementById("time").value,
    guests: document.getElementById("guests").value,
    requests: document.getElementById("requests").value
  };

  fetch("http://127.0.0.1:8000/api/reserve/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(result => {
    alert("Reservation saved successfully!");
  })
  .catch(error => {
    alert("Error saving reservation");
    console.log(error);
  });

}
