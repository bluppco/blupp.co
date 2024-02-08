const PrimaryButton = ( props ) => {

    return(
        <button className="bg-black/70 hover:bg-black transition-all duration-300 h-10 flex items-center px-4 rounded-lg text-white text-sm tracking-widest font-inter_tight border border-gray-200">
            { props.children }
        </button>

    )

}

export default PrimaryButton
