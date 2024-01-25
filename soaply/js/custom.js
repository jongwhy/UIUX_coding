// Clone Menu and info Elements
const menu = document.querySelector('.navi');
const info = document.querySelector('.info');
const newMenuBox = document.querySelector('.new-mobile-menu');
const newMenu = menu.cloneNode(true);
const newInfo = info.cloneNode(true);

newMenuBox.insertAdjacentElement('beforeend', newMenu);
newMenuBox.insertAdjacentElement('beforeend', newInfo);

// Mobile Menu Toggle Function
const mobileMenuIcon = document.querySelector('.mobile-icon');

mobileMenuIcon.addEventListener('click', (e) => {
  const target = e.currentTarget;

  target.classList.toggle('active');

  const menuHeight = document.querySelector('.new-mobile-menu').scrollHeight;

  if (target.classList.contains('active')) {
    target.classList.remove('not-active');
    newMenuBox.style.height = `${menuHeight}px`;
  } else {
    target.classList.add('not-active');
    newMenuBox.style.height = 0;
  }
});

// Fixed Header Style Change and meet section start animation When Scrolling Down
const header = document.querySelector('.header');
const meetSection = document.querySelector('.meet-section');
const meetSectionTop = meetSection.offsetTop;

const stickyHeader = () => {
  const scry = window.scrollY; // 화면 최상단이 위치한 스크롤 위치값
  if (scry > 0) {
    header.classList.add('active');
  } else {
    header.classList.remove('active');
  }

  if (scry > meetSectionTop - 200) {
    meetSection.classList.add('on');
  }
};

window.addEventListener('scroll', stickyHeader);

// Features Sections Data
const features = [
  {
    image: '/soaply/images/about-icon-1.svg',
    title: 'For All Skin Types',
    text: '유저룝토가 아언는다, 사널오다 순빈을 기야아라, 사지선어서 힌횡즘다 빝머미겐 측바렉소힎으면 셔쇽샀토저. 인듸어 압겐츠라과길은 곻즈알엉횜더링을',
  },
  {
    image: '/soaply/images/about-icon-2.svg',
    title: '100% Organic',
    text: '안손배가다, 긍치는 도엔은 지쩌롱이 차지다즌겼은 나니반노를 슶트가, 애떠다. 곡븠언에서 힐기 데네 랄브의 연닌흐전에서 므가괴다 으나아 라녀 쵸나힐능혹개부터',
  },
  {
    image: '/soaply/images/about-icon-3.svg',
    title: 'Cuelty Free',
    text: '뿌우과이튼던 빋흠논간을 조우게 맛러깅잎까지, 믕링아사로 을긓열기오르로. 애가건는 드은 히야 잘히 셔이된의. 알다미래순 해던자 새흔챠딤 숴늘올 먼즈하이, 아은 칸단저도를',
  },
];

const featuresWrapper = document.querySelector('.features');

features.forEach((feature) => {
  const featureElm = `
    <div class="feature">
      <div class="feature-icon">
        <img src="${feature.image}" alt="" />
      </div>
      <h4>${feature.title}</h4>
      <p>${feature.text}</p>
    </div>
  `;

  featuresWrapper.insertAdjacentHTML('beforeend', featureElm);
});

// Swiper Slider Codes
const swiper = new Swiper('.swiper', {
  // Optional parameters
  // direction: 'vertical',
  loop: true, // 반복 여부

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
