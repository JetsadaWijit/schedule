fetch('course.json')
    .then(response => {
        if (!response.ok) {
            throw new Error(`Failed to fetch data: ${response.statusText}`);
        }
        return response.json();
    })
    .then(data => {
        populateSchedule(data);
    })
    .catch(error => {
        console.error('Error fetching course data:', error);
    });

// Function to populate the schedule
function populateSchedule(courses) {
    const scheduleContainer = document.getElementById('schedule-container');

    // Loop through each day in the courses data
    for (const day of courses) {
        const dayDiv = document.createElement('div');
        dayDiv.classList.add('day');

        const dayTitle = document.createElement('h2');
        dayTitle.textContent = day.day;
        dayDiv.appendChild(dayTitle);

        for (const course of day.classes) {
            const classDiv = document.createElement('div');
            classDiv.classList.add('class');

            const courseName = document.createElement('p');
            courseName.classList.add('course');
            courseName.textContent = course.course;
            classDiv.appendChild(courseName);

            const time = document.createElement('p');
            time.classList.add('time');
            time.textContent = course.time;
            classDiv.appendChild(time);

            const room = document.createElement('p');
            room.classList.add('room');
            room.textContent = `Room: ${course.room}`;
            classDiv.appendChild(room);

            const number = document.createElement('p');
            number.classList.add('number');
            number.textContent = `No: ${course.number}`;
            classDiv.appendChild(number);

            dayDiv.appendChild(classDiv);
        }

        scheduleContainer.appendChild(dayDiv);
    }
}
