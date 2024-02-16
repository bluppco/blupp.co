// IMPORTS ATOMS
import ListItem from "@/atoms/mobile-header/list-item/index.jsx"
import PictureInternal from "@/atoms/picture/internal/jsx/index.jsx"
import Link from "@/atoms/links/jsx/index.jsx"

// IMPORTS FRAMER MOTION
import { motion, AnimatePresence } from "framer-motion"

// IMPORTS REACT
import { useState } from "react"

const HeaderMobile = () => {

    const [ isOpen, updateOpen ] = useState( false )

    const squareVariants = {

        display: { y: 0, transition: { duration: .2 } },
        hide: { y: "-100%", transition: { duration: .4 } },

    }

    return (
        <header className="md:hidden">
            <motion.header className="bg-white px-4 border-b border-b-zinc-200 h-16 py-2 fixed top-0 w-full z-50"
                variants={ squareVariants }
                initial="display"
            >
                <div className="flex justify-between items-center">
                    <p className="font-bold text-lg md:text-2xl text-black">
                        <Link href="/" aria_label="">
                            <span className="text-5xl">&#120121;</span>
                        </Link>
                    </p>
                    <div onClick={ () => updateOpen( !isOpen ) }>
                        {

                            isOpen &&
                            <div className="w-6 aspect-square">
                                <PictureInternal
                                    src="/icons/close.svg"
                                    alt=""
                                />
                            </div>

                        }
                        {

                            !isOpen &&
                            <div className="w-6 aspect-square">
                                <PictureInternal
                                    src="/icons/menu.svg"
                                    alt=""
                                />
                            </div>

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
                                <ListItem href="/projects" aria_label="">Projects</ListItem>
                                <ListItem href="/about" aria_label="">Company</ListItem>
                                <ListItem href="/blogs" aria_label="">Blogs</ListItem>
                            </ul>
                        </div>
                    </motion.div>

                }
            </AnimatePresence>
        </header>
    )

}

export default HeaderMobile
