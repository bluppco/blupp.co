// IMPORTS ASTRO ATOMS
import Link from "@/atoms/links/jsx/index.jsx"

const ListItem = ( props ) => {

    const { href, aria_label } = props

    return(
        <li className="text-xl uppercase">
            <Link href={ href } aria_label={ aria_label }>
                { props.children }
            </Link>
        </li>
    )

}

export default ListItem
