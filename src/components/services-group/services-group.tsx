import Icon from "../icon/icon"
import { Group } from "../store/services-conf-store"
import { ServiceCard } from "./service-card"
import "./services-group.css"

export const ServicesGroupes = (props: {conf: Group[]}) => {

    const groups = props.conf.map((g, i) => <GroupComp key={`service-group-${i}`} group={g}/>)

    return <div className="container services-groups">
        {groups}
    </div>
}

const GroupComp = (props: {group: Group}) => {

    const services = props.group.services.map((s, i) => <ServiceCard key={`service-card-${i}`} service={s}/>)

    return <div className="services-group">
        <GroupHeader group={props.group}/>
        {services}
    </div>
}

const GroupHeader = (props: {group: Group}) => {
    return <div className="group-header">
        <Icon
            name={props.group.icon as "x"}
            strokeWidth={1}
        />
        <div className="group-title">
            <span>{props.group.title}</span>
        </div>
    </div>
}