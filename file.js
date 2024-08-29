let imageElement = document.getElementById("image");
let originalImageWidth = "200px";
imageElement.style.width = originalImageWidth;

let warningMessageElement = document.getElementById("warningMessage");
let imageWidthElement = document.getElementById("imageWidth");
imageWidthElement.textContent = originalImageWidth;

let minWidth = 100;
let defaultWidth = 200;
let maxWidth = 300;

let miniWidthWarningMessage = "Can't Visible. Increase the size of the Image.";
let maxWidthWarningMessage = "Too big. Decrease the size of the Image";

function onDecrement() {
    if (defaultWidth <= minWidth) {
        warningMessageElement.textContent = miniWidthWarningMessage;
    } else {
        warningMessageElement.textContent = "";
        defaultWidth = defaultWidth - 5;
        originalImageWidth = defaultWidth + "px";
        imageElement.style.width = originalImageWidth;
        imageWidthElement.textContent = originalImageWidth;
    }
}

function onIncrement() {
    if (defaultWidth >= maxWidth) {
        warningMessageElement.textContent = maxWidthWarningMessage;
    } else {
        warningMessageElement.textContent = "";
        defaultWidth = defaultWidth + 5;
        originalImageWidth = defaultWidth + "px";
        imageElement.style.width = originalImageWidth;
        imageWidthElement.textContent = originalImageWidth;
    }
}
