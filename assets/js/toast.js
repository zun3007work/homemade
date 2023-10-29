function toast({
  title = '',
  message = '',
  type = 'success',
  duration = 3000,
}) {
  const main = document.getElementById('toast');
  console.log(main);
  if (main) {
    const toast = document.createElement('div');
    toast.style.animation = `slideInLeft ease .5s , fadeOut linear 1s ${
      duration / 1000
    }s forwards`;
    const icons = {
      success: 'bi bi-check-circle-fill',
      error: 'bi bi-exclamation-circle-fill',
      warning: 'bi bi-exclamation-triangle-fill',
    };

    const icon = icons[type];

    toast.classList.add(
      'toastMessage',
      `${type}`
    );
    toast.innerHTML = `
        <div class="toastIcon">
        <i class="${icon}" w></i>
        </div>
         <div class="toastBody">
        <h3>${title}</h3>
        <p>${message}</p>
         </div>
         <div class="toastClose">
        <i class="bi bi-x"></i>
         </div>
        `;
    main.appendChild(toast);
    setTimeout(function () {
      main.removeChild(toast);
    }, duration + 1000);
  }
}

function showSuccessToast() {
  toast({
    title: 'Success',
    message: 'Text',
    type: 'success',
    duration: 3000,
  });
}

function showErrorToast() {
  toast({
    title: 'Error',
    message: 'Text',
    type: 'error',
    duration: 3000,
  });
}

function showWarningToast() {
  toast({
    title: 'Wraning',
    message: 'Text',
    type: 'warning',
    duration: 3000,
  });
}
