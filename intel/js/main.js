window.scrollTo(0, 0);
gsap.registerPlugin(ScrollTrigger);

function menuCloseClick() {
  document.querySelector('.menu').style = 'display:none;';
  document.querySelector('.nav-down').style = 'display:block;';
}

function menuItemClick() {
  document.querySelector('.menu').style = 'display:none;';
}

// function menuOpenClick() {
//   document.querySelector('.menu').style = 'display:block;';
// }

function menuOpen() {
  document.querySelector('.menu').style = 'display:block;';
  document.querySelector('.nav-down').style = 'display:none;';
}

function hoverIntro() {
  document.querySelector('.intro-img1').style = 'opacity:0;';
  document.querySelector('.intro-img2').style = 'opacity:1;';
  document.querySelector('.intro-img3').style = 'opacity:0.4;';
}

function outIntro() {
  document.querySelector('.intro-img2').style = 'opacity:0;';
  document.querySelector('.intro-img1').style = 'opacity:1;';
  document.querySelector('.intro-img3').style = 'opacity:0;';
}

function hoverCpu() {
  document.querySelector('.cpu-img1').style = 'opacity:0;';
  document.querySelector('.cpu-img2').style = 'opacity:1;';
  document.querySelector('.cpu-img3').style = 'opacity:1;';
  document.querySelector('.cpu-img4').style = 'opacity:0.4;';
}

function outCpu() {
  document.querySelector('.cpu-img2').style = 'opacity:0;';
  document.querySelector('.cpu-img1').style = 'opacity:1;';
  document.querySelector('.cpu-img3').style = 'opacity:0;';
  document.querySelector('.cpu-img4').style = 'opacity:0;';
}

function hoverNotebook() {
  document.querySelector('.notebook-img1').style = 'opacity:0;';
  document.querySelector('.notebook-img2').style = 'opacity:1;';
  document.querySelector('.notebook-img3').style = 'opacity:1;';
  document.querySelector('.notebook-img4').style = 'opacity:0.3;';
}

function outNotebook() {
  document.querySelector('.notebook-img2').style = 'opacity:0;';
  document.querySelector('.notebook-img1').style = 'opacity:1;';
  document.querySelector('.notebook-img3').style = 'opacity:0;';
  document.querySelector('.notebook-img4').style = 'opacity:0;';
}

function hoverGpu() {
  document.querySelector('.gpu-img1').style = 'opacity:0;';
  document.querySelector('.gpu-img2').style = 'opacity:1;';
  document.querySelector('.gpu-img3').style = 'opacity:1;';
}

function outGpu() {
  document.querySelector('.gpu-img2').style = 'opacity:0;';
  document.querySelector('.gpu-img1').style = 'opacity:1;';
  document.querySelector('.gpu-img3').style = 'opacity:0;';
}

// section04 mousehover & out
function hoverSimplicity() {
  document.querySelector('.simplicity-img1').style = 'opacity:0;';
  document.querySelector('.simplicity-img2').style = 'opacity:1;';
}

function outSimplicity() {
  document.querySelector('.simplicity-img2').style = 'opacity:0;';
  document.querySelector('.simplicity-img1').style = 'opacity:1;';
}

function hoverConfidence() {
  document.querySelector('.confidence-img1').style = 'opacity:0;';
  document.querySelector('.confidence-img2').style = 'opacity:1;';
}

function outConfidence() {
  document.querySelector('.confidence-img2').style = 'opacity:0;';
  document.querySelector('.confidence-img1').style = 'opacity:1;';
}

function hoverInnovation() {
  document.querySelector('.innovation-img1').style = 'opacity:0;';
  document.querySelector('.innovation-img2').style = 'opacity:1;';
}

function outInnovation() {
  document.querySelector('.innovation-img2').style = 'opacity:0;';
  document.querySelector('.innovation-img1').style = 'opacity:1;';
}

const ani03 = gsap.timeline();
let html5Video = document.querySelector('.intel_brand');
html5Video.pause();
ani03
  // .to('.section03_container .it', {
  //   xPercent: 1200,
  //   yPercent: -100,
  //   rotation: 360,
  //   scale: 0.1,
  //   duration: 5,
  // })
  // .to('.section03_container .starts', {
  //   xPercent: -120,
  //   yPercent: -400,
  //   rotation: 360,
  //   scale: 0.1,
  //   duration: 5,
  // })
  // .to('.section03_container .with', {
  //   xPercent: 500,
  //   rotation: 360,
  //   scale: 0.1,
  //   duration: 5,
  // })
  .to(
    '.section03_container .intel_brand',
    {
      xPercent: -133,
      duration: 10,
      onComplete: () => {
        html5Video.play();
      },
    },
    0
  )
  .to(
    '.section03_container .it',
    {
      opacity: 0,
      duration: 25,
    },
    0.1
  )
  .to(
    '.section03_container .starts',
    {
      opacity: 0,
      duration: 25,
    },
    0.2
  )
  .to(
    '.section03_container .with',
    {
      opacity: 0,
      duration: 25,
    },
    0.3
  )
  .to(
    '.section03_container .intel',
    {
      opacity: 0,
      duration: 7,
    },
    0.3
  );

ScrollTrigger.create({
  animation: ani03,
  trigger: '.section03',
  start: 'top -50',
  end: '+=3000',
  scrub: true,
  pin: true,
  // markers: true,
});

var tl4 = gsap.timeline({
  scrollTrigger: {
    trigger: '.section04', // ScrollTrigger 지점
    start: 'top', // 에니메이션 시작 지점 (트리거 상단 지점이, 화면의 중간 높이 지점일 때)
    // end: "bottom top", // 에니메이션 끝 지점 (트리거 하단 지점이, 화면의 Top 지점일 때)
    pin: true,
    // markers: true, // Scroll Trigger 영역 표시
    scrub: true,
    toggleActions: 'play none restart none',
  },
});

// .it 클래스에 대한 애니메이션
tl4.fromTo(
  '.notebook_left',
  { x: -window.innerWidth }, // 시작 위치를 왼쪽 화면 밖으로 설정
  { x: 200, opacity: 100, duration: 15 },
  0 // 애니메이션 시작 시간 (0초)
);

// .With 클래스에 대한 애니메이션
tl4.fromTo(
  '.notebook_right',
  { x: window.innerWidth }, // 시작 위치를 왼쪽 화면 밖으로 설정
  { x: 480, opacity: 100, duration: 15 },
  0 // 애니메이션 시작 시간을 이전 애니메이션의 끝으로부터 1초 전으로 설정 (순차 실행)
);

// .starts 클래스에 대한 애니메이션
tl4.fromTo(
  '.notebook_center',
  { y: 1500 }, // 시작 위치를 왼쪽 화면 밖으로 설정
  { y: 80, opacity: 100, duration: 15 },
  0 // 애니메이션 시작 시간을 이전 애니메이션의 끝으로부터 1초 전으로 설정 (순차 실행)
);

tl4.fromTo(
  '.ahead',
  { y: -500 }, // 시작 위치를 왼쪽 화면 밖으로 설정
  { y: 50, opacity: 100, duration: 15 },
  2 // 애니메이션 시작 시간을 이전 애니메이션의 끝으로부터 1초 전으로 설정 (순차 실행)
);

tl4.fromTo(
  '.simplicity',
  { x: -window.innerWidth }, // 시작 위치를 왼쪽 화면 밖으로 설정
  { x: 50, opacity: 100, duration: 15 },
  2 // 애니메이션 시작 시간을 이전 애니메이션의 끝으로부터 1초 전으로 설정 (순차 실행)
);

tl4.fromTo(
  '.confidence',
  { x: window.innerWidth }, // 시작 위치를 왼쪽 화면 밖으로 설정
  { x: 620, opacity: 100, duration: 15 },
  2 // 애니메이션 시작 시간을 이전 애니메이션의 끝으로부터 1초 전으로 설정 (순차 실행)
);

tl4.fromTo(
  '.innovation',
  { y: 1500 }, // 시작 위치를 왼쪽 화면 밖으로 설정
  { y: 510, opacity: 100, duration: 15 },
  2 // 애니메이션 시작 시간을 이전 애니메이션의 끝으로부터 1초 전으로 설정 (순차 실행)
);

var tl6 = gsap.timeline({
  scrollTrigger: {
    trigger: '.section06',
    start: '-50 top',
    end: 'center center',
    scrub: true,
    pin: true,
    // markers: true,
    toggleActions: 'play none restart none',
  },
});

tl6.fromTo('.sc06_maintext', { opacity: 1 }, { opacity: 0 }, 0);
tl6.fromTo('.sc06_bg', { x: 0, opacity: 1 }, { x: 500, opacity: 0.3 }, 0);
tl6.fromTo('.sc06_text01', { opacity: 1 }, { opacity: 0 }, 0);
tl6.fromTo('.sc06_text02', { opacity: 1 }, { opacity: 0 }, 0);
tl6.fromTo('.sc06_text03', { opacity: 1 }, { opacity: 0 }, 0);
tl6.fromTo('.sc06_text04', { opacity: 1 }, { opacity: 0 }, 0);
tl6.fromTo('.sc06_ct01', { opacity: 0 }, { opacity: 1 }, 0);
tl6.fromTo('.sc06_ct02', { opacity: 0 }, { opacity: 1 }, 0);
tl6.fromTo('.sc06_ct03', { opacity: 0 }, { opacity: 1 }, 0);
tl6.fromTo('.sc06_ct04', { opacity: 0 }, { opacity: 1 }, 0);
tl6.fromTo('.sc06_ct05', { opacity: 0 }, { opacity: 1 }, 0);

// 가로 스크롤
const offsetLeft = $('.section06').offset().left;

$('.container_main').css('left', offsetLeft);

// gsap.registerPlugin(ScrollTrigger);

let sections = gsap.utils.toArray('.panel');

let hs = gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: 'none',
  scrollTrigger: {
    trigger: '.container_main',
    start: 'top top',
    end: () => '+=' + document.querySelector('.container_main').offsetWidth,
    // markers: true,
    pin: true,
    scrub: 2,
    snap: 1 / (sections.length - 1),
  },
});

var tl7 = gsap.timeline({
  scrollTrigger: {
    trigger: '.section07',
    start: '-300 top',
    end: 'right right',
    scrub: 1,
    // markers: true,
    // pin: true,
    toggleActions: 'play none restart none',
  },
});

tl7.fromTo('.section07_chapter01', { opacity: 0 }, { opacity: 1 }, 0);
tl7.fromTo('.section07_text01', { opacity: 0 }, { opacity: 1 }, 0);
tl7.fromTo('.section07_text02', { opacity: 0 }, { opacity: 1 }, 0.1);
tl7.fromTo('.section07_text03', { opacity: 0 }, { opacity: 1 }, 0.1);
tl7.fromTo('.section07_text04', { opacity: 0 }, { opacity: 1 }, 0.2);
tl7.fromTo('.section07_text05', { opacity: 0 }, { opacity: 1 }, 0.2);
tl7.fromTo('.section07_star', { opacity: 0 }, { opacity: 1 }, 0.2);
tl7.fromTo('.section07_cube', { opacity: 0 }, { opacity: 1 }, 0.2);
tl7.fromTo('.section07_text06', { opacity: 0 }, { opacity: 1 }, 0.3);
tl7.fromTo('.section07_text07', { opacity: 0 }, { opacity: 1 }, 0.3);

var tl8 = gsap.timeline({
  scrollTrigger: {
    trigger: '.section08',
    start: '-100 left',
    end: 'right right',
    scrub: 1,
    // markers: true,
    // pin: true,
    toggleActions: 'play none restart none',
  },
});

tl8.fromTo('.section08_fly', { y: 0 }, { y: -2000 }, 0);
tl8.fromTo('.section08_cpu', { y: 0 }, { y: -2000 }, 0.1);

gsap.set('.section10_there', { opacity: 0 });

const ani10 = gsap.timeline();

ani10
  .fromTo(
    '.section10_there',
    { opacity: 0 }, // 시작 위치를 왼쪽 화면 밖으로 설정
    { opacity: 1 },
    3 // 애니메이션 시작 시간 (0초)
  )

  .fromTo(
    '.section10_like',
    { opacity: 0 }, // 시작 위치를 왼쪽 화면 밖으로 설정
    { opacity: 1 },
    0 // 애니메이션 시작 시간 (0초)
  )

  .fromTo(
    '.section10_everything',
    { opacity: 0 }, // 시작 위치를 왼쪽 화면 밖으로 설정
    { opacity: 1 },
    0.1 // 애니메이션 시작 시간 (0초)
  )

  .fromTo(
    '.section10_star',
    { opacity: 0 }, // 시작 위치를 왼쪽 화면 밖으로 설정
    { opacity: 1 },
    0.1 // 애니메이션 시작 시간 (0초)
  )

  .fromTo(
    '.section10_cube',
    { opacity: 0 }, // 시작 위치를 왼쪽 화면 밖으로 설정
    { opacity: 1 },
    0.1 // 애니메이션 시작 시간 (0초)
  )

  .fromTo(
    '.section10_smalltext',
    { opacity: 0 }, // 시작 위치를 왼쪽 화면 밖으로 설정
    { opacity: 1 },
    0.2 // 애니메이션 시작 시간 (0초)
  );

ScrollTrigger.create({
  animation: ani10,
  trigger: '.section10',
  start: 'left left',
  end: 'right right',
  scrub: true,
  // pin: true,
  // markers: true,
  toggleActions: 'play none restart none',
});

var tl11 = gsap.timeline({
  scrollTrigger: {
    trigger: '.section11',
    start: 'left left',
    end: 'right right',
    scrub: true,
    // pin: true,
    // markers: true,
    toggleActions: 'play none restart none',
  },
});

tl11.fromTo(
  '.section11_leftgpu',
  { x: 0 }, // 시작 위치를 왼쪽 화면 밖으로 설정
  { x: 300 },
  0 // 애니메이션 시작 시간 (0초)
);

tl11.fromTo(
  '.section11_rightgpu',
  { y: 0 }, // 시작 위치를 왼쪽 화면 밖으로 설정
  { y: 200 },
  0 // 애니메이션 시작 시간 (0초)
);

tl11.fromTo(
  '.section11_text01',
  { opacity: 0 }, // 시작 위치를 왼쪽 화면 밖으로 설정
  { opacity: 1 },
  0.3 // 애니메이션 시작 시간 (0초)
);

tl11.fromTo(
  '.section11_text02',
  { opacity: 0 }, // 시작 위치를 왼쪽 화면 밖으로 설정
  { opacity: 1 },
  0.5 // 애니메이션 시작 시간 (0초)
);

tl11.fromTo(
  '.section11_text03',
  { opacity: 0 }, // 시작 위치를 왼쪽 화면 밖으로 설정
  { opacity: 1 },
  0.9 // 애니메이션 시작 시간 (0초)
);

const ani13 = gsap.timeline();

ani13
  .fromTo(
    '.section13_text01',
    { opacity: 0 }, // 시작 위치를 왼쪽 화면 밖으로 설정
    { opacity: 1 },
    0 // 애니메이션 시작 시간 (0초)
  )

  .fromTo(
    '.section13_text02',
    { opacity: 0 }, // 시작 위치를 왼쪽 화면 밖으로 설정
    { opacity: 1 },
    0.3 // 애니메이션 시작 시간 (0초)
  )

  .fromTo(
    '.section13_text03',
    { opacity: 0 }, // 시작 위치를 왼쪽 화면 밖으로 설정
    { opacity: 1 },
    0.3 // 애니메이션 시작 시간 (0초)
  )

  .fromTo(
    '.section13_text04',
    { opacity: 0 }, // 시작 위치를 왼쪽 화면 밖으로 설정
    { opacity: 1 },
    0.5 // 애니메이션 시작 시간 (0초)
  )

  .fromTo(
    '.section13_smalltext',
    { opacity: 0 }, // 시작 위치를 왼쪽 화면 밖으로 설정
    { opacity: 1 },
    0.5 // 애니메이션 시작 시간 (0초)
  );

gsap.to('.section13_arcicon', {
  opacity: 1,
  scale: 1,
  duration: 1,
  y: 40,
  repeat: -1, // 무한반복
  yoyo: true, // 반복되는 애니메이션을 역재생
});

ScrollTrigger.create({
  animation: ani13,
  trigger: '.section13',
  start: '-400 top',
  end: 'top 20%',
  scrub: true,
  // pin: true,
  // markers: true,
  toggleActions: 'play none restart none',
});
