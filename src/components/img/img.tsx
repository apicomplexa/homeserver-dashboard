import { AlignJustify } from "lucide-react"
import { useState } from "react"

import "./img.css"
import Icon from "../icon/icon"

export const Img = (props: {
    src: string
    alt: string
    icon?: string
}) => {
    const [isLoading, setLoad] = useState<boolean>(true)
    const [isError, setError] = useState<boolean>(false)

    const iconComp = props.icon === undefined? <AlignJustify/> : <Icon name={props.icon as "target"}/>

    return <>
        { isLoading && <div className="loading img-placeholder">{iconComp}</div> }
        { !isError && <img
            src={props.src}
            alt={props.alt}
            onLoad={() => setLoad(false)}
            onError={() => {
                setError(true)
                setLoad(false)}
            }
            />}
        { isError && <div className="error img-placeholder">{iconComp}</div> }
    </>
}