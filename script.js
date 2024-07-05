document.addEventListener('DOMContentLoaded', (event) => {
  const goalInput = document.getElementById('goal');
  const linkToWidget = document.getElementById('link-to-widget');

  if (goalInput) {
    goalInput.addEventListener('input', (event) => {
      const goalValue = goalInput.value;
      linkToWidget.href = `water.html?goal=${goalValue}`;
    });
  }

  const consumedInput = document.getElementById('consumed');
  const updateButton = document.getElementById('update-button');
  const gaugeInner = document.getElementById('gauge-inner');
  const goalSummary = document.getElementById('goal-summary');

  const urlParams = new URLSearchParams(window.location.search);
  const goal = parseInt(urlParams.get('goal')) || 8;  // default goal is 8 cups if not specified
  goalSummary.textContent = goal;

  updateButton.addEventListener('click', () => {
    const consumed = parseInt(consumedInput.value) || 0;
    const percentage = Math.min((consumed / goal) * 100, 100); // capping at 100%

    gaugeInner.style.width = `${percentage}%`;
    gaugeInner.textContent = `${Math.round(percentage)}%`;
  });
});