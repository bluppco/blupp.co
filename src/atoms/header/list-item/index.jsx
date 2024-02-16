// IMPORTS ATOMS
import Link from "@/atoms/links/jsx/index.jsx"

const ListItem = ( props ) => {

    const { href, aria_label } = props

    return(
        <li className="group font-inter_tight tracking-wide">
            <Link href={ href } aria_label={ aria_label }>
                { props.children }
            </Link>
            <div className="w-0 bg-black group-hover:w-full h-[1px] transition-width duration-300 ease-in"></div>
        </li>
    )

}

export default ListItem
