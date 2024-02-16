const Link = ( props ) => {

    const { href, aria_label } = props

    return(
        <a href={ href } aria-label={ aria_label } className="block">
            { props.children }
        </a>
    )

}

export default Link
