'use strict';
const projectData = {
  structura: {
    title: 'Structura', label: 'Учебный проект / Tilda / 5 страниц',
    description: 'Многостраничный сайт строительной компании. Главная, услуги, о компании, проекты и контакты оформлены в едином стиле.',
    work: 'Структура страниц, визуальное оформление, сборка на Tilda и настройка анимации.',
    value: 'Посетитель может познакомиться с услугами, посмотреть примеры проектов и перейти к обращению. Проект учебный; результаты продаж не измерялись.',
    images: [['structura-home.webp','Главная страница'],['structura-services.webp','Услуги'],['structura-about.webp','О компании'],['structura-projects.webp','Проекты'],['structura-contact.webp','Контакты']]
  },
  dubai: {
    title: 'Dubai Estate', label: 'Учебный лендинг / Tilda',
    description: 'Лендинг для презентации недвижимости: инвестиционные стратегии, проекты, актуальные предложения, ответы на вопросы и запрос расчёта.',
    work: 'Оформление и сборка лендинга на Tilda, карточки предложений, блок вопросов и форма. Настройка анимации.',
    value: 'Показывает, как связать презентацию объектов с обращением за подробностями. Учебный проект: содержание объектов использовано для демонстрации структуры сайта.',
    images: [['dubai-page.webp','Лендинг целиком']]
  },
  psychologist: {
    title: 'Лендинг психолога', label: 'Учебный лендинг / Tilda',
    description: 'Сайт для знакомства со специалистом и программой психологической поддержки: формат работы, этапы программы и варианты участия.',
    work: 'Визуальное оформление, сборка блоков на Tilda и настройка анимации.',
    value: 'Последовательная подача помогает посетителю разобраться в предложении и найти способ записи. Это учебный проект, а не действующая практика.',
    images: [['psychologist-page.webp','Лендинг целиком']]
  },
  snow: {
    title: 'Wow Snow Shop', label: 'Дизайн-концепт / Figma / 2022',
    description: 'Дизайн интернет-магазина сноубордической экипировки. В макетах показан путь от каталога и выбора товара до оформления заказа.',
    work: 'Макеты главной, каталога, карточки товара, корзины и оформления заказа. Мобильные версии основных экранов.',
    value: 'Демонстрирует работу с интерфейсом магазина: ассортиментом, вариантами товара и заказом. Концепт не представлен как действующий магазин.',
    link: 'https://www.behance.net/gallery/153282409/ECOMMERCE-DESIGN-Wow-Snow-Shop',
    images: [['snow-home.webp','Главная'],['snow-catalog.webp','Каталог'],['snow-product.webp','Карточка товара'],['snow-checkout.webp','Оформление заказа'],['snow-mobile.webp','Мобильные макеты']]
  },
  cooking: {
    title: 'Кулинарный курс', label: 'Дизайн-концепт / Figma / 2022',
    description: 'Лендинг курса «Супы мира»: информация об обучении, программа, автор, стоимость и ответы на вопросы.',
    work: 'Визуальный стиль, типографика, композиция страницы и макеты для компьютера, планшета и телефона.',
    value: 'Демонстрирует структуру страницы, которая последовательно объясняет предложение и ведёт к записи на курс. Это дизайн-концепт.',
    link: 'https://www.behance.net/gallery/153683613/LANDING-PAGE-kulinarnyj-kurs',
    images: [['cooking-home.webp','Первый экран и описание курса'],['cooking-program.webp','Программа, автор и стоимость'],['cooking-mobile.webp','Макеты для планшета и телефона']]
  },
  health: {
    title: 'Men’s Health', label: 'Дизайн-концепт / Figma / 2022',
    description: 'Самостоятельный дизайн-концепт контентного сайта журнала. Не является заказом или официальным сайтом Men’s Health.',
    work: 'Дизайн главной, тематического раздела и статьи; карточки материалов, типографика и мобильные макеты.',
    value: 'Показывает работу с большим объёмом контента, иерархией материалов и длинной статьёй.',
    link: 'https://www.behance.net/gallery/153610781/MENS-HEALTH-News-magazine',
    images: [['health-home.webp','Главная'],['health-section.webp','Тематический раздел'],['health-article.webp','Статья'],['health-mobile.webp','Мобильные макеты']]
  }
};

const dialog = document.querySelector('#project-dialog');
let lastProjectTrigger = null;
const create = (tag, className, text) => {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text) node.textContent = text;
  return node;
};
function openProject(key, trigger) {
  const project = projectData[key];
  if (!project) return;
  lastProjectTrigger = trigger;
  document.querySelector('#dialog-title').textContent = project.title;
  document.querySelector('#dialog-label').textContent = project.label;
  document.querySelector('#dialog-description').textContent = project.description;
  const contribution = document.querySelector('#dialog-contribution');
  contribution.className = 'dialog-contribution';
  contribution.replaceChildren();
  for (const [heading, text] of [['Моя работа', project.work], ['Что показывает проект', project.value]]) {
    const block = create('div');
    block.append(create('h3', '', heading), create('p', '', text));
    contribution.append(block);
  }
  const links = document.querySelector('#dialog-links');
  links.replaceChildren();
  if (project.link) {
    const link = create('a', 'text-link', 'Полный кейс на Behance ↗');
    link.href = project.link; link.target = '_blank'; link.rel = 'noopener noreferrer';
    links.append(link);
  }
  const gallery = document.querySelector('#dialog-gallery');
  gallery.replaceChildren();
  project.images.forEach(([filename, label], index) => {
    const figure = create('figure', 'gallery-item' + (project.images.length === 1 ? ' wide' : ''));
    const img = create('img');
    img.src = 'assets/' + filename; img.alt = project.title + ' — ' + label;
    img.loading = index < 2 ? 'eager' : 'lazy';
    figure.append(create('figcaption', '', label), img); gallery.append(figure);
  });
  dialog.showModal(); dialog.scrollTop = 0;
  document.body.classList.add('body-locked');
}
document.querySelectorAll('[data-project]').forEach(button => button.addEventListener('click', () => openProject(button.dataset.project, button)));
document.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {
  if (event.target !== dialog) return;
  const r = dialog.getBoundingClientRect();
  if (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) dialog.close();
});
dialog.addEventListener('close', () => {
  document.body.classList.remove('body-locked');
  lastProjectTrigger?.focus({preventScroll:true});
});

const menuButton = document.querySelector('.menu-button');
const navigation = document.querySelector('#navigation');
function setMenu(open) {
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Закрыть меню' : 'Открыть меню');
  navigation.classList.toggle('open', open);
}
menuButton.addEventListener('click', () => setMenu(menuButton.getAttribute('aria-expanded') !== 'true'));
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMenu(false)));
document.addEventListener('keydown', event => {if (event.key === 'Escape') setMenu(false);});
document.addEventListener('click', event => {if (!event.target.closest('.header')) setMenu(false);});
window.addEventListener('resize', () => {if (window.innerWidth > 680) setMenu(false);});
document.querySelector('#year').textContent = new Date().getFullYear();

if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const targets = document.querySelectorAll('.section-heading, .featured-case, .project-card, .design-card, .service, .steps li, .about-copy, .contact-section');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);}});
  }, {threshold: 0.07});
  document.documentElement.classList.add('motion-ready');
  targets.forEach((target, i) => {target.classList.add('reveal'); target.style.transitionDelay = (i % 3) * 45 + 'ms'; observer.observe(target);});
}
