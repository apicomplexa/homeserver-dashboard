import Icon from "../icon/icon"
import { Group } from "../store/services-conf-store"
import { ServiceCard } from "./service-card"
import "./services-group.css"

export const ServicesGroupes = (props: {conf: Group[]}) => {

    const groups = props.conf.map((g, i) => <GroupComp key={`service-group-${i}`} group={g}/>)

    return <div className="container services-groups">
        <NothingHereAlert condition={groups.length > 0}>
            {groups}
        </NothingHereAlert>
    </div>
}

const GroupComp = (props: {group: Group}) => {
    const services = props.group.services.map((s, i) => <ServiceCard key={`service-card-${i}`} service={s}/>)
    return <div className="services-group">
        <GroupHeader group={props.group}/>
            <NothingHereAlert condition={services.length > 0}>
                {services}
            </NothingHereAlert>
    </div>
}

const NothingHereAlert = (props: {
    condition: boolean,
    children?: JSX.Element[]
}) => {
    return props.condition
        ? <>{props.children}</>
        : <div className="nothing-here-alert">
            <p><i>Nothing here yet...</i></p>
            <p className="subtitle">Edit services.json on your server</p>
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