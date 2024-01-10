import { RoughNotation } from "react-rough-notation"

const AnnotateUnderline = ( props ) => {

    return (
        <RoughNotation type="underline" show={ true } color={"rgba(255, 199, 38, 0.44)"} animationDuration={ 1000 } strokeWidth={ 10 }>
            { props.children }
        </RoughNotation>
    )

}

export default AnnotateUnderline
