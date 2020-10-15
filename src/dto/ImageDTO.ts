import Image from '../models/Image'

export default {
    render(image: Image){
        return {...image, path: `http://localhost:3333/storage/${image.path}`}
    },

    renderMany(images: Image[]){
        return images.map(image => this.render(image))
    }
}