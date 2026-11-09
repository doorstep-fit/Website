const form = document.querySelector('#consultation');
const plan = document.querySelector('#plan');

document.querySelectorAll('[data-plan]').forEach((link) => {
  link.addEventListener('click', () => {
    plan.value = link.dataset.plan;
  });
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const fields = new FormData(form);
  const brief = [
    'TheDoorStep.fit consultation brief',
    '',
    'Name: ' + fields.get('name'),
    'Training option: ' + fields.get('plan'),
    'Goal: ' + fields.get('goal'),
    'Preferred time: ' + fields.get('time'),
  ].join('\n');

  const url = URL.createObjectURL(new Blob([brief], { type: 'text/plain;charset=utf-8' }));
  const download = document.createElement('a');
  download.href = url;
  download.download = 'consultation-brief.txt';
  download.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  document.querySelector('#status').textContent = 'Your brief is ready to save.';
});
