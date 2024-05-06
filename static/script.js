//Get IDs
const bluesButton = document.getElementById('blues_button');
const classicButton = document.getElementById('classic_button');
const heroImage = document.getElementById('hero-image');
const hoverImage = document.getElementById('hover-image');
const hoverImage2 = document.getElementById('hover-image2');

//Event listeners blues
bluesButton.addEventListener('mouseover', showHoverImage);
bluesButton.addEventListener('mouseout', showHeroImage);
//Event listeners Classical
classicButton.addEventListener('mouseover', showHoverImage2);
classicButton.addEventListener('mouseout', showHeroImage);


//Respective hover functions
function showHoverImage() {
  heroImage.style.display = 'none';
  hoverImage.style.display = 'block';
}

function showHeroImage() {
  heroImage.style.display = 'block';
  hoverImage.style.display = 'none';
}

//For classical
function showHoverImage2() {
  heroImage.style.display = 'none';
  hoverImage2.style.display = 'block';
}

