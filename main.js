const imageContainer = document.querySelector(`#image-container`);
const imagesToDisplay = document.querySelectorAll(`.images`);
const navigationDots = document.querySelectorAll(`.dot-nav`);

// display default image onPageLoad
navigationDots[0].style.backgroundColor = `#5b5941`;
imagesToDisplay[0].setAttribute(`style`, `opacity: 1; display: flex`);

const previousImage = document.querySelector(`#previous-img`);
const nextImage = document.querySelector(`#next-img`);

previousImage.addEventListener(`click`, cycleImagesBackward);
nextImage.addEventListener(`click`, cycleImagesForward);

let imageIndex = 0;
let myInterval = setInterval(cycleImagesForward, 5000);

function cycleImagesBackward() {
  autoSlide();
  if (imageIndex === 0) {
    imageIndex = 3;
  } else {
    imageIndex -= 1;
  }
  repaintImageContainer(imageIndex);
}

function cycleImagesForward() {
  autoSlide();
  if (imageIndex === 3) {
    imageIndex = 0;
  } else {
    imageIndex += 1;
  }
  repaintImageContainer(imageIndex);
}

function repaintImageContainer(imageRef) {
  imagesToDisplay.forEach((node) => {
    node.removeAttribute(`style`);
  });
  imagesToDisplay[imageRef].style.display = `flex`;
  setTimeout(function () {
    imagesToDisplay[imageRef].style.opacity = 1;
  });
  fillNavigationDot(imagesToDisplay[imageRef]);
}

function fillNavigationDot(element) {
  navigationDots.forEach((node) => {
    node.removeAttribute(`style`);
  });
  const imageNumber = element.getAttribute(`id`).charAt(3);
  navigationDots[imageNumber - 1].style.backgroundColor = `#5b5941`;
}

navigationDots.forEach((dot) => {
  dot.addEventListener(`click`, (e) => {
    autoSlide();
    imageIndex = e.target.id.charAt(3) - 1;
    repaintImageContainer(imageIndex);
  });
});

function autoSlide() {
  clearInterval(myInterval);
  myInterval = setInterval(cycleImagesForward, 5000);
}
