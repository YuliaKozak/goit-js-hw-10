// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector('.form');

  form.addEventListener('submit', (event) => {
    event.preventDefault(); // не перезавантажувати сторінку

    // Отримуємо значення з форми
    const delay = Number(form.elements['delay'].value);
    const state = form.elements['state'].value;

    // Створюємо проміс
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (state === 'fulfilled') {
          resolve(delay);
        } else {
          reject(delay);
        }
      }, delay);
    });

    // Обробка промісу
    promise
      .then((delay) => {
        iziToast.success({
          title: "Success",
          message: `✅ Fulfilled promise in ${delay}ms`,
          position: "topRight",
        });
      })
      .catch((delay) => {
        iziToast.error({
          title: "Error",
          message: `❌ Rejected promise in ${delay}ms`,
          position: "topRight",
        });
      });
  });