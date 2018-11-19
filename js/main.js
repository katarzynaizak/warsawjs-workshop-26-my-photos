const imagesPaths = ['images/DSCN3277.JPG','images/DSCN3312.JPG','images/DSCN3316.JPG','images/DSCN3360.JPG']

const imagesGallery = document.getElementById('images')

imagesPaths.forEach((image) => {
    const newImage = document.createElement('img')
    newImage.setAttribute('src', image)
    newImage.addEventListener('click', () => {
        if (newImage.classList.contains('image--favourite')) {
            newImage.classList.remove('image--favourite')
        } else {
            newImage.classList.add('image--favourite')
        }
    })
    imagesGallery.appendChild(newImage)
})