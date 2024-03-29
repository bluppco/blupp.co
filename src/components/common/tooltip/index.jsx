import {

    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,

} from "@/components/ui/tooltip"

const TooltipJSX = ( props ) => {

    const {

        alt,
        image_size,
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
                        src={ src }
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
