const nameInput = document.getElementById("name");
const ageInput = document.getElementById("age");
const gender = document.querySelectorAll('input[name="gender"]');
const favColor = document.getElementById("colors");
const submitBtn = document.getElementById("submit");

submitBtn.addEventListener("click", function () {
  const nameField = nameInput.value.trim();
  const selectedGender = document.querySelector('input[name="gender"]:checked');

  if (nameField == "") {
    alert("Name is a required field");
    return;
  }

  if (!selectedGender) {
    alert("Please select a gender");
    return;
  }

  try {
    let expiryDate = new Date("1/1/2027");
    let currentVisits = 1;

    if (hasCookie("visits") && hasCookie("userName")) {
			const storedName = getCookie("userName");

			if (nameField == storedName) {
				currentVisits = Number(getCookie("visits")) + 1;
			} else {
				currentVisits = 1;
			}
    }

    setCookie("userName", nameInput.value, expiryDate);
    setCookie("age", ageInput.value, expiryDate);
    setCookie("visits", currentVisits, expiryDate);
    setCookie("gender", selectedGender, expiryDate);
    setCookie("favColor", favColor.value, expiryDate);


		location.replace("greet.html");
  } catch (e) {
		console.error(error);
		alert("Error saving data: " + error.message);
	}
});
