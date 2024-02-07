// IMPORTS FRAMER MOTION
import { motion, useScroll, useAnimation, useMotionValueEvent } from "framer-motion"

import { useState } from "react"

// IMPORTS COMPONENTS
import Li from "./li/index.jsx"
import HeaderMobile from "./mobile-header/index.jsx"

// IMPORTS LAYOUTS
import Container from "@/layouts/container/jsx/index.jsx"

// IMPORTS ATOMS
import PrimaryButton from "@/atoms/buttons/primary/jsx/index.jsx"
import Link from "@/atoms/links/jsx/index.jsx"

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
            <header class="hidden md:block">
                <motion.header className="flex items-center h-20 w-full fixed z-50 bg-gray-100"
                    variants={ squareVariants }
                    initial="display"
                    animate={ controls }
                    onMouseLeave={ () => updateNavigationDisplay( null ) }
                >
                    <Container>
                        <section class="flex justify-between items-center h-full">
                            <Link href="/" aria_label="">
                                <div class="flex items-center gap-2">
                                    <p class="text-2xl text-white bg-black rounded-full w-12 aspect-square text-center flex justify-center items-center">&#120121;</p>
                                    <p class="text-xl font-inter_tight tracking-wide">Blupp Company</p>
                                </div>
                            </Link>
                            <nav class="flex items-center h-full justify-end">
                                <ul class="flex items-center gap-8">
                                    <Li href="/about">Company</Li>
                                    <Li href="/projects">Projects</Li>
                                    <Li href="/blog">Blogs</Li>
                                    <Link href="mailto:mohit@blupp.co" aria_label="">
                                        <PrimaryButton>Contact</PrimaryButton>
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
