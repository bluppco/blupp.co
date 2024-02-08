// IMPORTS FRAMER MOTION
import { motion, useScroll, useAnimation, useMotionValueEvent, AnimatePresence } from "framer-motion"

// IMPORTS REACT
import { useState } from "react"

// IMPORTS COMPONENTS
import Li from "./li/index"

const HeaderMobile = () => {

    const [ isOpen, updateOpen ] = useState( false )

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

    return (
        <header className="md:hidden">
            <motion.header className="bg-white px-4 border-b border-b-zinc-200 h-20 py-4 fixed top-0 w-full z-50"
                variants={ squareVariants }
                initial="display"
                animate={ controls }
            >
                <div className="flex justify-between items-center">
                    <p className="font-bold text-lg md:text-2xl text-black">
                        <a href="/">
                            <span className="text-5xl">&#120121;</span>
                        </a>
                    </p>
                    <div onClick={ () => updateOpen( !isOpen ) }>
                        {

                            isOpen &&
                            <img
                                src="/icons/close.svg"
                                className="w-6 aspect-square"
                            />

                        }
                        {

                            !isOpen &&
                            <img
                                src="/icons/menu.svg"
                                className="w-6 aspect-square"
                            />

                        }
                    </div>
                </div>
            </motion.header>
            <AnimatePresence initial={false}>
                {

                    <motion.div
                        key="content"
                        initial="collapsed"
                        animate={ isOpen ? "open" : "collapsed" }
                        exit="collapsed"
                        variants={{
                            open: { opacity: 1, height: "100vh" },
                            collapsed: { opacity: 0, height: "0px" }
                        }}
                        transition={{ duration: 0.3 }}
                        className="grow"
                    >
                        <div className="flex flex-col gap-1 items-center justify-center h-full z-10">
                            <ul className="flex flex-col gap-8 justify-center items-center">
                                <Li href="/projects">Projects</Li>
                                <Li href="/about">Company</Li>
                                <Li href="/blog">Blogs</Li>
                            </ul>
                        </div>
                    </motion.div>

                }
            </AnimatePresence>
        </header>
    )

}

export default HeaderMobile
