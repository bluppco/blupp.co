const Picture = ( props ) => {

    const {

        alt,
        CDN,
        image_width,
        PROJECT,
        src

    } = props

    return(
        <picture className="w-full h-full">
            <source media="(max-width: 375px)" srcset={ CDN + PROJECT + "/" + src + "?height=300&quality=80" } />
            <source media="(max-width: 640px)" srcset={ CDN + PROJECT + "/" + src + "?height=400&quality=80" } />
            <img
                src={ CDN + PROJECT + "/" +  src + "?quality=80" + "&width=" + image_width }
                alt={ alt }
                className="w-full h-full object-cover"
            />
        </picture>
    )

}

export default Picture
