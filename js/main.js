const imagesPaths = ['images/DSCN3277.JPG','images/DSCN3312.JPG','images/DSCN3316.JPG','images/DSCN3360.JPG']

const imagesGallery = document.getElementById('images')

imagesGallery.addEventListener('click',({target}) => {
    target.classList.toggle('image--favourite')
})

imagesPaths.forEach((image) => {
    const newImage = document.createElement('img')
    newImage.setAttribute('src', image)
    imagesGallery.appendChild(newImage)
})