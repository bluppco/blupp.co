import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

// IMPORTING COMPONENTS
import HeaderMobileItem from "./HeaderMobileItem"

const HeaderMobile = () => {

    const [ isOpen, updateOpen ] = useState( false )

    return (
        <header className="md:hidden bg-white px-6 py-4 fixed z-20 w-full border-b border-b-zinc-200">
            <div className="flex justify-between items-center z-20">
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
                                <HeaderMobileItem href="/projects">Projects</HeaderMobileItem>
                                <HeaderMobileItem href="/about">Company</HeaderMobileItem>
                                <HeaderMobileItem href="/blog">Blogs</HeaderMobileItem>
                            </ul>
                        </div>
                    </motion.div>

                }
            </AnimatePresence>
        </header>
    )

}

export default HeaderMobile
