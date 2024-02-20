const PictureInternal = ( props ) => {

    const {

        alt,
        src

    } = props

    return(
        <picture className="w-full h-full">
            <source media="(max-width: 375px)" srcSet={ src } />
            <source media="(max-width: 640px)" srcSet={  src } />
            <img
                src={ src }
                alt={ alt }
                className="w-full h-full object-cover"
            />
        </picture>
    )

}

export default PictureInternal
