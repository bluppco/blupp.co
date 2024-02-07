const Li = ( props ) => {

    const { href } = props

    return(
        <li className="group font-inter_tight tracking-wide">
            <a href={ href }>
                { props.children }
            </a>
            <div className="w-0 bg-black group-hover:w-full h-[1px] transition-width duration-300 ease-in"></div>
        </li>
    )

}

export default Li
