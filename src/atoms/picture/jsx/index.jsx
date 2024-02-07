// IMPORTS CONSTANTS
import { CDN_LINK, IMAGE_QUALITY } from "@/constants/images.js"

const Picture = ( props ) => {

    const { src } = props

    return(
        <picture>
            <source media="(max-width: 375px)" srcset={ CDN_LINK +  src + "?height=300&quality=" + IMAGE_QUALITY } />
            <source media="(max-width: 640px)" srcset={ CDN_LINK +  src + "?height=400&quality=" + IMAGE_QUALITY } />
            <img
                src={ CDN_LINK +  src + "?height=650&quality=" + IMAGE_QUALITY }
                className="w-full h-full object-cover scale-100 group-hover:scale-110 duration-700 overflow-hidden"
            />
        </picture>
    )

}

export default Picture
