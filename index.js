function waterMarkTheImage(image) {
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');
  const image1 = new Image();
  image1.src = image;
  image1.onload = function () {
    canvas.height = image1.height;
    canvas.width = image1.width;
    context.drawImage(image1, 0, 0, image1.width, image1.width);
    context.font = "30px Comic Sans MS";
    context.fillStyle = 'red'
    context.fillText('Madhu', canvas.width - 100, canvas.height - 100);
    const newSource = canvas.toDataURL();
    const newImage = new Image();
    newImage.src = newSource;
    newImage.onload = function(){
      document.getElementsByTagName('div')[0].appendChild(newImage);
    }
  }
}