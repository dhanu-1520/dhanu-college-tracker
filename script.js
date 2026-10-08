const overviewStats = [
  { label: 'Attendance', value: '87%', icon: '✓' },
  { label: 'Assignments', value: '08', icon: '✦' },
  { label: 'Classes', value: '24', icon: '▣' }
];

const performanceBars = [
  { label: 'DBMS', value: 92 },
  { label: 'Java', value: 85 },
  { label: 'AI', value: 78 },
  { label: 'Web Dev', value: 90 }
];

const timetableData = [
  { time: '8:30 - 9:30', course: 'Database Systems', faculty: 'Dr. Nair', room: 'A-204', attendance: '96%', status: 'good' },
  { time: '9:40 - 10:40', course: 'Java Programming', faculty: 'Prof. Rao', room: 'LAB-3', attendance: '88%', status: 'good' },
  { time: '11:00 - 12:00', course: 'Computer Networks', faculty: 'Ms. Isha', room: 'B-101', attendance: '80%', status: 'warn' },
  { time: '1:30 - 2:30', course: 'Web Development', faculty: 'Mr. Sen', room: 'C-310', attendance: '92%', status: 'good' },
  { time: '2:40 - 3:40', course: 'AI Basics', faculty: 'Dr. Mehta', room: 'B-205', attendance: '74%', status: 'warn' }
];

const upcomingItems = [
  { title: 'DBMS quiz', time: 'Tomorrow • 10:00 AM', type: 'Urgent', color: 'purple' },
  { title: 'Java lab report', time: 'Thu • 5:00 PM', type: 'Due', color: 'green' },
  { title: 'Seminar attendance', time: 'Fri • 1:00 PM', type: 'Track', color: 'purple' }
];

const overviewContainer = document.getElementById('overviewStats');
const timetableBody = document.getElementById('timetableBody');
const performanceBarsContainer = document.getElementById('performanceBars');
const upcomingContainer = document.getElementById('upcomingItems');

overviewStats.forEach((stat) => {
  const node = document.createElement('div');
  node.className = 'stat-card';
  node.innerHTML = `
    <div class="stat-card__meta">
      <span>${stat.label}</span>
      <strong>${stat.value}</strong>
    </div>
    <div class="stat-card__icon">${stat.icon}</div>
  `;
  overviewContainer.appendChild(node);
});

performanceBars.forEach((item) => {
  const wrapper = document.createElement('div');
  wrapper.className = 'progress-item';
  wrapper.innerHTML = `
    <div class="progress-item__meta">
      <span>${item.label}</span>
      <strong>${item.value}%</strong>
    </div>
    <div class="progress-bar"><span style="width:${item.value}%"></span></div>
  `;
  performanceBarsContainer.appendChild(wrapper);
});

timetableData.forEach((item) => {
  const row = document.createElement('tr');
  const attendanceClass = item.status === 'good' ? 'attendance-pill--good' : 'attendance-pill--warn';

  row.innerHTML = `
    <td>${item.time}</td>
    <td><span class="course-tag">${item.course}</span></td>
    <td>${item.faculty}</td>
    <td>${item.room}</td>
    <td><span class="attendance-pill ${attendanceClass}">${item.attendance}</span></td>
  `;

  timetableBody.appendChild(row);
});

upcomingItems.forEach((item) => {
  const row = document.createElement('li');
  const pillClass = item.color === 'purple' ? 'task-pill--purple' : 'task-pill--green';
  row.innerHTML = `
    <div class="task-list__text">
      <strong>${item.title}</strong>
      <span>${item.time}</span>
    </div>
    <span class="task-pill ${pillClass}">${item.type}</span>
  `;
  upcomingContainer.appendChild(row);
});
