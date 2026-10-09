'use strict';
const imageDimensions = {"barier-banner.webp":[1180,420],"cooking-cover.webp":[1440,988],"cooking-home.webp":[1440,2787],"cooking-mobile.webp":[1440,1740],"cooking-program.webp":[1440,5377],"dubai-cover-original.png":[2598,1271],"dubai-page-original.png":[2598,13174],"health-article.webp":[1329,7931],"health-cover.webp":[1440,1002],"health-home.webp":[1440,5179],"health-mobile.webp":[1440,1055],"health-section.webp":[1440,3538],"psychologist-cover-clean.png":[1363,695],"psychologist-page-clean.png":[1363,7544],"snow-cart.webp":[1440,1340],"snow-catalog.webp":[1440,2176],"snow-checkout.webp":[1440,1340],"snow-cover.webp":[1440,1314],"snow-home.webp":[1440,4801],"snow-mobile.webp":[1440,2037],"snow-product.webp":[1440,2600],"structura-about-original.png":[2646,10462],"structura-contact-original.png":[2646,3024],"structura-cover-original.png":[2520,1125],"structura-cover-framed.png":[2520,1200],"structura-home-original.png":[2646,8719],"structura-projects-original.png":[2646,9690],"structura-services-original.png":[2646,6978]};
const projectData = {
  structura: {
    title: 'Structura', label: 'Многостраничный сайт / Tilda / 5 страниц',
    description: 'Многостраничный сайт строительной компании. Главная, услуги, о компании, проекты и контакты оформлены в едином стиле.',
    work: 'Структура страниц, визуальное оформление, сборка на Tilda и настройка анимации.',
    value: 'Единая структура помогает посетителю познакомиться с компанией, сравнить услуги, посмотреть проекты и перейти к обращению.',
    images: [['structura-home-original.png','Главная'],['structura-services-original.png','Услуги'],['structura-about-original.png','О компании'],['structura-projects-original.png','Проекты'],['structura-contact-original.png','Контакты']]
  },
  dubai: {
    title: 'Dubai Estate', label: 'Лендинг недвижимости / Tilda',
    description: 'Лендинг для презентации недвижимости: инвестиционные стратегии, проекты, актуальные предложения, ответы на вопросы и запрос расчёта.',
    work: 'Оформление и сборка лендинга на Tilda, карточки предложений, блок вопросов и форма. Настройка анимации.',
    value: 'Объекты, инвестиционные стратегии и ответы на вопросы собраны в последовательную презентацию с переходом к запросу расчёта.',
    images: [['dubai-page-original.png','Лендинг целиком']]
  },
  psychologist: {
    title: 'Лендинг психолога', label: 'Сайт специалиста / Tilda',
    description: 'Сайт для знакомства со специалистом и программой психологической поддержки: формат работы, этапы программы и варианты участия.',
    work: 'Визуальное оформление, сборка блоков на Tilda и настройка анимации.',
    value: 'Страница знакомит со специалистом, объясняет формат работы и помогает выбрать удобный способ записи.',
    images: [['psychologist-page-clean.png','Лендинг целиком']]
  },
  snow: {
    title: 'Wow Snow Shop', label: 'Дизайн-концепт / Figma / 2022',
    description: 'Дизайн интернет-магазина сноубордической экипировки. В макетах показан путь от каталога и выбора товара до оформления заказа.',
    work: 'Макеты главной, каталога, карточки товара, корзины и оформления заказа. Мобильные версии основных экранов.',
    value: 'Связный путь покупателя: найти нужную категорию, изучить характеристики, выбрать вариант товара и оформить заказ.',
    link: 'https://www.behance.net/gallery/153282409/ECOMMERCE-DESIGN-Wow-Snow-Shop',
    images: [['snow-home.webp','Главная'],['snow-catalog.webp','Каталог'],['snow-product.webp','Карточка товара'],['snow-cart.webp','Корзина'],['snow-checkout.webp','Оформление заказа'],['snow-mobile.webp','Мобильные макеты']]
  },
  cooking: {
    title: 'Кулинарный курс', label: 'Дизайн-концепт / Figma / 2022',
    description: 'Лендинг курса «Супы мира»: информация об обучении, программа, автор, стоимость и ответы на вопросы.',
    work: 'Визуальный стиль, типографика, композиция страницы и макеты для компьютера, планшета и телефона.',
    value: 'Программа, автор и форматы участия помогают понять содержание курса перед записью.',
    link: 'https://www.behance.net/gallery/153683613/LANDING-PAGE-kulinarnyj-kurs',
    images: [['cooking-home.webp','Первый экран и описание курса'],['cooking-program.webp','Программа, автор и стоимость'],['cooking-mobile.webp','Макеты для планшета и телефона']]
  },
  health: {
    title: 'Men’s Health', label: 'Дизайн-концепт / Figma / 2022',
    description: 'Самостоятельный дизайн-концепт контентного сайта журнала: главная страница, тематический раздел и статья.',
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
  const createFigure = ([filename, label], index, singlePage = false) => {
    const figure = create('figure', 'gallery-item');
    figure.id = singlePage ? 'structura-page' : 'project-page-' + index;
    if (singlePage) {
      figure.setAttribute('role', 'tabpanel');
      figure.setAttribute('aria-labelledby', 'structura-tab-' + index);
      figure.tabIndex = 0;
    }
    const img = create('img');
    img.src = 'assets/' + filename + '?v=20261009-8'; img.alt = project.title + ' — ' + label;
    img.loading = singlePage || index < 2 ? 'eager' : 'lazy';
    img.decoding = 'async';
    const size = imageDimensions[filename];
    if (size) {
      img.width = size[0]; img.height = size[1];
      figure.style.maxWidth = size[0] + 'px';
    }
    const caption = create('figcaption');
    caption.append(create('span', '', label));
    const original = create('a', 'gallery-original', 'Открыть отдельно ↗');
    original.href = img.src; original.target = '_blank'; original.rel = 'noopener noreferrer';
    original.setAttribute('aria-label', label + ' — открыть изображение в новой вкладке');
    caption.append(original);
    const preview = create('a', 'gallery-preview');
    preview.href = img.src; preview.target = '_blank'; preview.rel = 'noopener noreferrer';
    preview.setAttribute('aria-label', label + ' — рассмотреть в отдельной вкладке');
    preview.append(img);
    figure.append(caption, preview);
    return figure;
  };
  const galleryNav = document.querySelector('#gallery-navigation');
  galleryNav.replaceChildren();
  galleryNav.hidden = project.images.length < 2;
  const singlePage = key === 'structura';
  galleryNav.classList.toggle('structura-tabs', singlePage);
  if (singlePage) {
    galleryNav.setAttribute('role', 'tablist');
    document.querySelector('.dialog-header').append(galleryNav);
  } else {
    galleryNav.removeAttribute('role');
    gallery.before(galleryNav);
    project.images.forEach((image, index) => gallery.append(createFigure(image, index)));
  }
  const selectPage = (index, resetScroll) => {
    gallery.replaceChildren(createFigure(project.images[index], index, true));
    galleryNav.querySelectorAll('button').forEach((button, i) => {
      button.setAttribute('aria-selected', String(i === index));
      button.tabIndex = i === index ? 0 : -1;
    });
    if (resetScroll) {
      const headerHeight = document.querySelector('.dialog-header').offsetHeight;
      const top = dialog.scrollTop + gallery.getBoundingClientRect().top - dialog.getBoundingClientRect().top - headerHeight - 16;
      dialog.scrollTo({top: Math.max(0, top), behavior: 'instant'});
    }
  };
  if (project.images.length > 1) project.images.forEach(([, label], index) => {
    const button = create('button', 'gallery-nav-item', label);
    button.type = 'button';
    if (singlePage) {
      button.id = 'structura-tab-' + index;
      button.setAttribute('role', 'tab');
      button.setAttribute('aria-controls', 'structura-page');
      button.addEventListener('keydown', event => {
        let next;
        if (event.key === 'ArrowRight') next = (index + 1) % project.images.length;
        if (event.key === 'ArrowLeft') next = (index + project.images.length - 1) % project.images.length;
        if (event.key === 'Home') next = 0;
        if (event.key === 'End') next = project.images.length - 1;
        if (next === undefined) return;
        event.preventDefault();
        selectPage(next, true);
        galleryNav.children[next].focus({preventScroll: true});
      });
    }
    button.addEventListener('click', () => {
      if (singlePage) {
        selectPage(index, true);
        return;
      }
      const figure = document.querySelector('#project-page-' + index);
      const headerHeight = document.querySelector('.dialog-header').offsetHeight;
      const top = dialog.scrollTop + figure.getBoundingClientRect().top - dialog.getBoundingClientRect().top - headerHeight - 16;
      dialog.scrollTo({top, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth'});
    });
    galleryNav.append(button);
  });
  if (singlePage) selectPage(0, false);
  dialog.showModal(); dialog.scrollTop = 0;
  document.body.classList.add('body-locked');
}
document.querySelectorAll('[data-project]').forEach(button => button.addEventListener('click', () => openProject(button.dataset.project, button)));
document.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
document.querySelector('.dialog-close-bottom').addEventListener('click', () => dialog.close());
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
const closeMenuOutside = event => {if (!event.target.closest('.header')) setMenu(false);};
document.addEventListener('pointerdown', closeMenuOutside);
document.addEventListener('click', closeMenuOutside);
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
