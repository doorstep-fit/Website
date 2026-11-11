const plan = document.querySelector('#plan');

document.querySelectorAll('[data-plan]').forEach((link) => {
  link.addEventListener('click', () => {
    plan.value = link.dataset.plan;
  });
});
