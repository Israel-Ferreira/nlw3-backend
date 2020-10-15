import Orphanage from "../models/Orphanage";
import ImageDTO from "./ImageDTO";


export default {
    render(orphanage: Orphanage){
        return {...orphanage, images: ImageDTO.renderMany(orphanage.images)}
    },


    renderMany(orphanages: Orphanage[]){
        return orphanages.map(orphanage => this.render(orphanage))
    }

}
