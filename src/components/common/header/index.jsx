// IMPORTING ASTRO COMPONENTS
import Li from "./li/index.jsx"

// IMPORTING JSX COMPONENTS
import HeaderMobile from "./mobile-header/index.jsx"

// IMPORTING ASTRO LAYOUTS
import Container from "@/layouts/container/jsx/index.jsx"

// IMPORTING ASTRO ATOMS
import PrimaryButton from "@/atoms/buttons/primary/jsx/index.jsx"
import Link from "@/atoms/links/jsx/index.jsx"

const Header = ( props ) => {

    return(
        <>
            <header class="hidden md:flex items-center h-20 bg-gray-100">
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
            </header>
            <HeaderMobile />
        </>
    )

}

export default Header
