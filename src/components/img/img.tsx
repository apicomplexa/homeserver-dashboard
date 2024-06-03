import { AlignJustify } from "lucide-react"
import { useState } from "react"

import "./img.css"

export const Img = (props: {
    src: string
    alt: string
}) => {
    const [isLoading, setLoad] = useState<boolean>(true)
    const [isError, setError] = useState<boolean>(false)

    return <>
        { isLoading && <div className="loading img-placeholder"><AlignJustify/></div> }
        { !isError && <img
            src={props.src}
            alt={props.alt}
            onLoad={() => setLoad(false)}
            onError={() => {
                setError(true)
                setLoad(false)}
            }
            />}
        { isError && <div className="error img-placeholder"><AlignJustify/></div> }
    </>
}