// Get all elements with the class 'image-text'
const imageTextElements = document.getElementsByClassName("image-text");

// Loop through each element and apply the desired styles
for (let i = 0; i < imageTextElements.length; i++) {
  const element = imageTextElements[i];
  element.style.fontFamily = "Courier New, Courier, monospace";
  element.style.color = "white";
  element.style.textShadow =
    "1px 1px 0px #aaa, -1px -1px 0px #aaa, 1px -1px 0px #aaa, -1px 1px 0px #aaa";
  element.style.letterSpacing = "2px";
  element.style.lineHeight = "1.2";
}
