import {

    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,

} from "@/components/ui/tooltip"

const TooltipJSX = ( props ) => {

    const {

        src,
        text,
        size,
        image_size

    } = props

    return(
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger>
                <div className={ size }>
                    <img
                        src={ src }
                        alt=""
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
