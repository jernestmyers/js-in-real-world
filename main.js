const imageContainer = document.querySelector(`#image-container`);
const imagesToDisplay = document.querySelectorAll(`.images`);
const imageArray = Array.from(imagesToDisplay);
const navigationDots = document.querySelectorAll(`.dot-nav`);

navigationDots[0].style.backgroundColor = `#5b5941`;

const previousImage = document.querySelector(`#previous-img`);
const nextImage = document.querySelector(`#next-img`);

previousImage.addEventListener(`click`, cycleImagesBackward);
nextImage.addEventListener(`click`, cycleImagesForward);

function cycleImagesBackward() {
  const newFirstImage = imageArray.pop();
  imageArray.splice(0, 0, newFirstImage);
  repaintImageContainer();
}

function cycleImagesForward() {
  const newLastImage = imageArray.shift();
  imageArray.push(newLastImage);
  repaintImageContainer();
}

function repaintImageContainer(imageRef) {
  while (imageContainer.firstChild) {
    imageContainer.removeChild(imageContainer.firstChild);
  }
  if (!imageRef) {
    imageContainer.appendChild(imageArray[0]);
    fillNavigationDot(imageArray[0]);
  } else {
    imageContainer.appendChild(imagesToDisplay[imageRef - 1]);
    fillNavigationDot(imagesToDisplay[imageRef - 1]);
  }
}

function fillNavigationDot(element) {
  navigationDots.forEach((node) => {
    node.removeAttribute(`style`);
  });
  const imageNumber = element.getAttribute(`id`).charAt(3);
  console.log(imageNumber);
  navigationDots[imageNumber - 1].style.backgroundColor = `#5b5941`;
}

navigationDots.forEach((dot) => {
  dot.addEventListener(`click`, (e) => {
    console.log(e.target.id);
    imageReferenceNumber = e.target.id.charAt(3);
    repaintImageContainer(imageReferenceNumber);
  });
});
