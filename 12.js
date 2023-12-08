
  function isNumeric(value) {
    return /^\d+$/.test(value);
  }

  function applyStyles(number) {
    const resultContainer = document.getElementById('resultContainer');
    if (number <= 3) {
      resultContainer.style.fontWeight = 'bold';
      resultContainer.style.textDecoration = 'none';
      resultContainer.style.fontStyle = 'normal';
    } else if (number > 3 && number <= 6) {
      resultContainer.style.fontWeight = 'bold';
      resultContainer.style.textDecoration = 'underline';
      resultContainer.style.fontStyle = 'normal';
    } else {
      resultContainer.style.fontWeight = 'normal';
      resultContainer.style.textDecoration = 'none';
      resultContainer.style.fontStyle = 'italic';
    }
  }

  function storeData() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const twoDigitInput = document.getElementById('number').value;

    if (!isNumeric(twoDigitInput) || twoDigitInput.length !== 2) {
      alert('Įveskite tinkamą dviženklį skaičių.');
    } else {
      const twoDigitNumber = parseInt(twoDigitInput);
      const randomMultiplier = Math.floor(Math.random() * 10) + 1; 

      const multipliedResult = twoDigitNumber * randomMultiplier;
      const subtractedResult = multipliedResult - Math.sqrt(multipliedResult);
      const finalResult = Math.round(subtractedResult);

      const userData = {
        firstName: firstName,
        lastName: lastName,
        number: twoDigitNumber
      };

    
      const resultContainer = document.getElementById('resultContainer');
      resultContainer.innerHTML = `
      <p>Vardas: ${userData.firstName}</p>
      <p>Pavardė: ${userData.lastName}</p>
      <p>Dviženklis skaičius: ${userData.number}</p>
      <p>Atsitiktinis skaičius: ${randomMultiplier}</p>
      <p>Galutinis rezultatas: ${finalResult}</p>
      `;

      applyStyles(randomMultiplier); 
    }
  }

