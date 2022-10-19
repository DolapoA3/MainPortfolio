const mouseCircle = document.querySelector('.mouse-circle');
const mouseDot = document.querySelector('.mouse-dot');

const mouseCircleFn = (x, y) => {
  mouseCircle.style.cssText = `top:${y}px; left:${x}px; opacity: 1`;
  mouseDot.style.cssText = `top:${y}px; left:${x}px; opacity: 1`;
};

const circles = document.querySelectorAll('.circle');
const mainImg = document.querySelector('.main-circle img');

let mX = 0;
let mY = 0;
const z = 100;

const animateCircles = (e, x, y) => {
  if (x < mX) {
    circles.forEach((circle) => {
      circle.style.left = `${z}px`;
    });
    mainImg.style.left = `${z}px`;
  } else if (x > mX) {
    circles.forEach((circle) => {
      circle.style.left = `-${z}px`;
    });
    mainImg.style.left = `-${z}px`;
  }

  if (y < mY) {
    circles.forEach((circle) => {
      circle.style.top = `${z}px`;
    });
    mainImg.style.top = `${z}px`;
  } else if (y > mY) {
    circles.forEach((circle) => {
      circle.style.top = `-${z}px`;
    });
    mainImg.style.top = `-${z}px`;
  }

  mX = e.clientX;
  mY = e.clientY;
};

document.body.addEventListener('mousemove', (e) => {
  let x = e.clientX;
  let y = e.clientY;

  mouseCircleFn(x, y);
  animateCircles(e, x, y);
});

document.body.addEventListener('mouseleave', () => {
  mouseCircle.style.opacity = '0';
  mouseDot.style.opacity = '0';
});

const mainBtns = document.querySelectorAll('.main-btn');

mainBtns.forEach((btn) => {
  let ripple;

  btn.addEventListener('mouseenter', (e) => {
    const left = e.clientX - e.target.getBoundingClientRect().left;
    const top = e.clientY - e.target.getBoundingClientRect().top;

    ripple = document.createElement('div');
    ripple.classList.add('ripple');
    ripple.style.left = `${left}px`;
    ripple.style.top = `${top}px`;
    btn.prepend(ripple);
  });

  btn.addEventListener('mouseleave', () => {
    btn.removeChild(ripple);
  });
});

const aboutMeText = document.querySelector('.about-me-text');
const aboutMeTextContent =
  'I am an aspiring software developer that has grown a strong passion for programming. I consistently create websites & apps for the best user experience. Just contact me. :)';

Array.from(aboutMeTextContent).forEach((char) => {
  const span = document.createElement('span');
  span.textContent = char;
  aboutMeText.appendChild(span);

  span.addEventListener('mouseenter', (e) => {
    e.target.style.animation = 'aboutMeTextAnim 10s infinite';
  });
});

const container = document.querySelector('.container');
const projects = document.querySelectorAll('.project');

projects.forEach((project) => {
  project.addEventListener('mouseenter', () => {
    project.firstElementChild.style.top = `-${
      project.firstElementChild.offsetHeight - project.offsetHeight + 20
    }px`;
  });

  project.addEventListener('mouseleave', () => {
    project.firstElementChild.style.top = '2rem';
  });

  project.addEventListener('click', () => {
    const bigImgWrapper = document.createElement('div');
    bigImgWrapper.className = 'project-img-wrapper';
    container.appendChild(bigImgWrapper);

    const bigImg = document.createElement('img');
    bigImg.className = 'project-img';
    const imgPath = project.firstElementChild.getAttribute('src').split('.')[0];
    bigImg.setAttribute('src', `${imgPath}-big.jpg`);
    bigImgWrapper.appendChild(bigImg);
  });
});
