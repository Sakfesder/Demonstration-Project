let slider = document.querySelectorAll('.slide');
let next = document.querySelector('#next');
let prev = document.querySelector('#prev');
let auto = true; // Автопрокрутка слайдов.(true-включить, false-отключить)
let intervalTime = 7000;


let nextSlide = () => {
  // Получаем текущий класс
let traffic = document.querySelector('.traffic');
  // Удаляем текущий класс
  traffic.classList.remove('traffic');
  // Проверяем слудующий класс
  if (traffic.nextElementSibling) {
    // Добавляем текущий класс к следующему
    traffic.nextElementSibling.classList.add('traffic');
  } else {
    // Возвращаем все сначало
    slider[0].classList.add('traffic');
  }
  setTimeout(() => traffic.classList.remove('traffic'));
};

let prevSlide = () => {
  // Получаем текущий класс
let traffic = document.querySelector('.traffic');
  // Удаляем текущий класс
  traffic.classList.remove('traffic');
  // Проверяем предыдущуй слайд
  if (traffic.previousElementSibling) {
    // Добавляем текущий к предыдущему слайду
    traffic.previousElementSibling.classList.add('traffic');
  } else {
    // Добовляем текущую к последней картинки
    slider[slider.length - 1].classList.add('traffic');
  }
  setTimeout(() => traffic.classList.remove('traffic'));
};

// Вешаем события на кнопки
next.addEventListener('click', i => {
  nextSlide();
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});

prev.addEventListener('click', i => {
  prevSlide();
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});

// Автопрокрутка слайда
if (auto) {
  // Запуск следующего слайда с интервалом времени
  slideInterval = setInterval(nextSlide, intervalTime);
}