import { useState, useEffect } from "react"
import { Service } from "../store/services-conf-store"
import "./service-card.css"
import { Circle, CircleDot } from "lucide-react"
import { Img } from "../img/img"

export const ServiceCard = (props: {
    service: Service
}) => {

    return <a href={props.service.url}>
        <div className="service-card">
            <div className="service-card-header">
                <div className="service-card-logo-box">
                    <Img src={props.service.logo_path} alt={`${props.service.title} logo`}/>
                </div>
                <div className="service-card-title">
                    <span>{props.service.title}</span>
                </div>
            </div>
            <RunningIndicator url={props.service.url}/>
        </div>
    </a>
}

export const RunningIndicator = (props: {url: string}) => {
    const [isRunning, setRunning] = useState<boolean>(false)

    useEffect(() => {
        fetch(props.url, { mode: 'no-cors' })
            .then(r => {
                r.ok || r.type === 'opaque'
                    ? setRunning(true) 
                    : setRunning(false)
            })
            .catch(e => {
                setRunning(false)
            })
    }, [props.url])

    return <div className="service-running-indicator-box">
        {
            isRunning
            ? <CircleDot size={25} color="rgb(var(--status-color-green))" strokeWidth={1.5}/>
            : <Circle size={25} color="rgb(var(--status-color-red))" strokeWidth={1.5}/>
        }
    </div>
}
