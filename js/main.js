const imagesPaths = ['images/DSCN3277.JPG',
                    'images/DSCN3312.JPG',
                    'images/DSCN3316.JPG',
                    'images/DSCN3360.JPG']

const imagesGallery = document.getElementById('images')

class Image {
    constructor(path) {
        this.path = path
    }

    show() {
        const image = document.createElement('img')
        image.setAttribute('src', this.path)
        image.addEventListener('click', () => this.markOrUnmarkFav())
        imagesGallery.appendChild(image)
        this.imageElement = image
    }

    markOrUnmarkFav() {
        this.imageElement.classList.toggle('image-favourite')
    }
}

imagesPaths.forEach((image) => {
    const newImage = new Image(image)
    newImage.show()
})