// Function to save the attendance data
function saveAttendance(event) {
   event.preventDefault(); // Prevent form submission

    const modeSelect = document.getElementById('mode');
    const datetimeInput = document.getElementById('datetime');

    const mode = modeSelect.value;//modeselect is a reference to the html page whereas mode is the selected value
    const datetime = datetimeInput.value;
    
    const attendanceData = {mode,datetime};

  // Save attendance data to local storage or perform other operations as needed
  // Example: Save data to an array
    attendance.push(attendanceData);
    console.log('attendance');

  // Clear the form inputs
  modeSelect.value = 'entry'; // Set the default value for mode
    datetimeInput.value = '';

  // Update the attendance list
    updateAttendanceList();

    console.log('Attendance saved:', attendanceData);
}

// Function to update the attendance list
function updateAttendanceList() {
    const attendanceList = document.getElementById('attendanceList');

  // Clear the list
    attendanceList.innerHTML = '';

  // Create a new list item for each attendance entry
    /*attendance.forEach(function(data) {
    const listItem = document.createElement('div');
    listItem.textContent = `Mode: ${data.mode}, Datetime: ${data.datetime}`;
    attendanceList.appendChild(listItem);
    });*/
}

// Array to store attendance data
const attendance = [];

// Add event listener to the form submit event
const attendanceForm = document.getElementById('attendanceForm');
attendanceForm.addEventListener('submit', saveAttendance);
