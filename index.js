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
    context.fillStyle = 'rgba(192, 192, 192, 0.7)';
    context.fillText('killer-filler', canvas.width - 100, canvas.height - 40);
    const newSource = canvas.toDataURL();
    const newImage = new Image();
    newImage.src = newSource;
    newImage.onload = function(){
      document.getElementsByTagName('div')[0].appendChild(newImage);
      const anchor = document.createElement('a');
      const anchorText = document.createTextNode('Click Here To Download');
      anchor.appendChild(anchorText);
      anchor.href = newSource;
      anchor.download = "killer-filler";
      document.getElementsByTagName('div')[0].appendChild(anchor);
    }
  }
}