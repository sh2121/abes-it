let inTimes = [];
let outTimes = [];

// Function to log in time
function logInTime() {
  const now = new Date();
  inTimes.push(now);
  alert(`In time logged: ${now}`);
}

// Function to log out time
function logOutTime() {
  const now = new Date();
  outTimes.push(now);
  alert(`Out time logged: ${now}`);
}

// Function to calculate the total duration
function calculateDuration() {
  if (inTimes.length === 0 || outTimes.length === 0 || inTimes.length !== outTimes.length) {
    alert('Please ensure there are matching in and out times.');
    return;
  }

  let totalDuration = 0; // in milliseconds

  for (let i = 0; i < inTimes.length; i++) {
    totalDuration += outTimes[i] - inTimes[i];
  }

  const totalHours = totalDuration / (1000 * 60 * 60); // convert milliseconds to hours

  let resultText = `Total Duration: ${totalHours.toFixed(2)} hours. `;
  if (totalHours >= 9) {
    resultText += 'Status: Full Time';
  } else if (totalHours >= 5) {
    resultText += 'Status: Half Time';
  } else {
    resultText += 'Status: Leave';
  }

  document.getElementById('result').innerText = resultText;
}
