flatpickr("#datepicker", {
  dateFormat: "Y-m-d",
});
const now = new Date();

// Format the date as YYYY-MM-DD
const year = now.getFullYear();
const month = String(now.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed
const day = String(now.getDate()).padStart(2, "0");

const today = `${year}-${month}-${day}`;

// Set the default value of the input
document.getElementById("datepicker").value = today;
document.querySelector(".datepicker").value = today;
