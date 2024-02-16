// IMPORTS LAYOUTS
import Container from "@/layouts/container/jsx/index.jsx"

// IMPORTS COMPONENTS
import HeaderMobile from "@/components/common/header/mobile-header/index.jsx"

// IMPORTS ATOMS
import PrimaryButton from "@/atoms/buttons/primary/jsx/index.jsx"
import ListItem from "@/atoms/header/list-item/index.jsx"
import Link from "@/atoms/links/jsx/index.jsx"

// IMPORTS FRAMER MOTION
import { motion, useScroll, useAnimation, useMotionValueEvent } from "framer-motion"

// IMPORTS REACT
import { useState } from "react"

const Header = ( props ) => {

    const [ navigationDisplay, updateNavigationDisplay ] = useState( null )

    const { scrollY } = useScroll()
    const squareVariants = {

        display: { y: 0, transition: { duration: .2 } },
        hide: { y: "-100%", transition: { duration: .4 } },

    }
    const controls = useAnimation( scrollY )
    useMotionValueEvent(scrollY, "change", (latest) => {

        let isScrollingDown = scrollY.getPrevious() - latest < 0;
        if( isScrollingDown && latest > 0 ){

            controls.start("hide")

        } else {

            controls.start("display")

        }


    })

    return(
        <>
            <header className="hidden md:block">
                <motion.header className="flex items-center h-20 w-full fixed z-50 bg-gray-100"
                    variants={ squareVariants }
                    initial="display"
                    animate={ controls }
                    onMouseLeave={ () => updateNavigationDisplay( null ) }
                >
                    <Container>
                        <section className="flex justify-between items-center h-full">
                            <Link href="/" aria_label="">
                                <div className="flex items-center gap-2">
                                    <p className="text-2xl text-white bg-black rounded-full w-12 aspect-square text-center flex justify-center items-center">&#120121;</p>
                                    <p className="text-xl font-inter_tight tracking-wide">Blupp Company</p>
                                </div>
                            </Link>
                            <nav className="flex items-center h-full justify-end">
                                <ul className="flex items-center gap-8">
                                    <ListItem href="/about" aria_label="">Company</ListItem>
                                    <ListItem href="/projects" aria_label="">Projects</ListItem>
                                    <ListItem href="/blogs" aria_label="">Blogs</ListItem>
                                    <Link href="mailto:mohit@blupp.co" aria_label="">
                                        <PrimaryButton>Get in Touch</PrimaryButton>
                                    </Link>
                                </ul>
                            </nav>
                        </section>
                    </Container>
                </motion.header>
            </header>
            <HeaderMobile />
        </>
    )

}

export default Header
