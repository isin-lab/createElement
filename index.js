const user1 = {
  userName: 'youtube',
  lastName: 'googlovich',
  userLogo: 'img/user1.png',
  webSite:'https://www.youtube.com',
  greeting: 'привет я сайт для просмотра всякой всячины. у меня ты всегда можешь найти видео уроки по разным темам или залипнуть в просмотр исторических фильмов',
  linkLogo: 'img/youtube.png',
  mapLogo: 'img/map.png',
  mapLink: 'https://www.google.ru/maps/place/Google+Building+40,+1600+Amphitheatre+Pkwy,+Mountain+View,+CA+94043,+США/@37.4223878,-122.0867626,17z/data=!3m1!4b1!4m6!3m5!1s0x808fba027f087f8f:0xd86b06710e8fcc35!8m2!3d37.4223878!4d-122.0841877!16s%2Fg%2F12hmj07kf?entry=ttu'
}

const user2 = {
  userName: 'контакт',
  lastName: 'дурович',
  userLogo: 'img/user2.png',
  webSite:'https://vk.com',
  greeting: 'привет я всеми любимая соцсеть. у меня есть много чего но попробуй найди то что тебе нужно.',
  linkLogo: 'img/vk.png',
  mapLogo: 'img/map.png',
  mapLink: 'https://www.google.ru/maps/search/Быстрый+ответ+Санкт-Петербург,+Невский+просп.,+28/@59.9357211,30.3231705,17z/data=!3m1!4b1?entry=ttu'
}

const user3 = {
  userName: 'git',
  lastName: 'hubovich',
  userLogo: 'img/user3.png',
  webSite: 'https://github.com/',
  greeting: 'привет я соцсеть для програмистов довольно сложная и супер функциональная)',
  linkLogo: 'img/github.png',
  mapLogo: 'img/map.png',
  mapLink: 'https://www.google.ru/maps/search/улица+Колина+П.+Келли-младшего,+88,+Сан-Франциско,+Калифорния,+94107,+Соединенные+Штаты/@37.7874445,-122.4154809,17z/data=!3m1!4b1?entry=ttu'
}

// Функция для создания элемента с классом и атрибутами
function createElementWithAttributes(tag, className, attributes) {
  const element = document.createElement(tag);
  element.classList.add(className);
  for (const [key, value] of Object.entries(attributes)) {
    element.setAttribute(key, value);
  }
  return element;
}

// Функция для добавления данных пользователя в блок wrapper
function renderUser(user) {
  // Создание основного контейнера для пользователя
  const userContainer = createElementWithAttributes('div', 'user_container', { id: `user_container${user.userName}` });

  // Создание блока с заголовком (имя пользователя и логотип)
  const titleDiv = createElementWithAttributes('div', 'title', {});
  const userNameDiv = createElementWithAttributes('div', 'user_name', {});
  const userNameHeading = document.createElement('h2');
  userNameHeading.classList.add('name');
  userNameHeading.textContent = user.userName;
  const lastNameHeading = document.createElement('h2');
  lastNameHeading.classList.add('last_name');
  lastNameHeading.textContent = user.lastName;
  const userLogoImg = createElementWithAttributes('img', 'user_logo', { src: user.userLogo, alt: `${user.userName}'s Logo` });

  // Добавление элементов имени и логотипа в блок заголовка
  userNameDiv.appendChild(userNameHeading);
  userNameDiv.appendChild(lastNameHeading);
  titleDiv.appendChild(userNameDiv);
  titleDiv.appendChild(userLogoImg);

  // Создание блока с приветствием
  const greetingDiv = createElementWithAttributes('div', 'greeting', {});
  const greetingParagraph = createElementWithAttributes('p', 'greet', {});
  greetingParagraph.textContent = user.greeting;
  greetingDiv.appendChild(greetingParagraph);

  // Создание блока с контактами
  const contactsDiv = createElementWithAttributes('div', 'contacts', {});
  const websiteLink = createElementWithAttributes('a', 'website', { href: user.webSite });
  const websiteLogoImg = createElementWithAttributes('img', 'contact_logo', { src: user.linkLogo, alt: '' });
  const mapLink = createElementWithAttributes('a', 'address', { href: user.mapLink });
  const mapLogoImg = createElementWithAttributes('img', 'contact_logo', { src: user.mapLogo, alt: '' });

  // Добавление логотипов контактов в блок контактов
  websiteLink.appendChild(websiteLogoImg);
  contactsDiv.appendChild(websiteLink);
  mapLink.appendChild(mapLogoImg);
  contactsDiv.appendChild(mapLink);

  // Добавление блоков заголовка, приветствия и контактов в контейнер пользователя
  userContainer.appendChild(titleDiv);
  userContainer.appendChild(greetingDiv);
  userContainer.appendChild(contactsDiv);

  // Получение ссылки на блок wrapper и добавление контейнера пользователя в него
  const wrapper = document.querySelector('.wrapper');
  wrapper.appendChild(userContainer);
}

// Функция для очистки блока wrapper
function clearWrapper() {
  const wrapper = document.querySelector('.wrapper');
  wrapper.innerHTML = '';
}

// Функция для обновления данных пользователя при выборе из селекта
function updateUserData() {
  clearWrapper();

  // Получение выбранного значения из списка
  const selectedUser = selectUser.value;
  let user;

  // Определение объекта пользователя в зависимости от выбранного значения
  if (selectedUser === 'user1') {
    user = user1;
  } else if (selectedUser === 'user2') {
    user = user2;
  } else if (selectedUser === 'user3') {
    user = user3;
  }

  // Добавление данных выбранного пользователя на страницу
  renderUser(user);
}

// Получение ссылки на селект
const selectUser = document.getElementById('select_user');

// Добавление обработчика события на изменение значения селекта
selectUser.addEventListener('change', updateUserData);

// вызов функции для отображения по умолчанию
updateUserData()