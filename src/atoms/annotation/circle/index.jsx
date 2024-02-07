import { RoughNotation } from "react-rough-notation"

const AnnotateCircle = ( props ) => {

    return (
        <RoughNotation type="circle" show={ true } color={"rgba(255, 199, 38, 0.44)"} animationDuration={ 1500 } strokeWidth={ 10 } padding={ [ 80, 30, 30, 30 ] }>
            { props.children }
        </RoughNotation>
    )

}

export default AnnotateCircle
