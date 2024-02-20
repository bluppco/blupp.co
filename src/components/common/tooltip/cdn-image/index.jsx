import {

    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,

} from "@/components/ui/tooltip"

const TooltipJSX = ( props ) => {

    const {

        alt,
        CDN,
        image_size,
        PROJECT,
        size,
        src,
        text

    } = props

    return(
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger>
                <div className={ size }>
                    <img
                        src={ CDN + PROJECT + "/" + src }
                        alt={ alt }
                        className={ image_size }
                    />
                </div></TooltipTrigger>
                <TooltipContent>
                <p>{ text }</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>

    )

}

export default TooltipJSX
