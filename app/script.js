function toggleDarkMode() {
  document.body.classList.toggle('dark');
  localStorage.setItem('dark-mode', document.body.classList.contains('dark'));
}

function loadDarkMode() {
  const enabled = localStorage.getItem('dark-mode') === 'true';
  if (enabled) {
    document.body.classList.add('dark');
  }
}

function saveLog(sport) {
  const form = document.getElementById('log-form');
  const data = {
    date: form.date.value,
    distance: form.distance.value,
    time: form.time.value,
    notes: form.notes.value
  };
  let logs = JSON.parse(localStorage.getItem(sport) || '[]');
  logs.push(data);
  localStorage.setItem(sport, JSON.stringify(logs));
  form.reset();
  displayLogs(sport);
}

function displayLogs(sport) {
  const container = document.getElementById('log-container');
  if (!container) return;
  let logs = JSON.parse(localStorage.getItem(sport) || '[]');
  container.innerHTML = '';
  logs.forEach(log => {
    const div = document.createElement('div');
    div.className = 'log-entry';
    div.textContent = `${log.date} - ${log.distance} - ${log.time} - ${log.notes}`;
    container.appendChild(div);
  });
}

document.addEventListener('DOMContentLoaded', loadDarkMode);
