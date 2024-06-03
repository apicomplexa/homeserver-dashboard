import Icon from "../icon/icon"
import { Group } from "../store/services-conf-store"
import "./services-group.css"

export const ServicesGroupes = (props: {conf: Group[]}) => {

    const groups = props.conf.map((g, i) => <GroupComp key={`service-group-${i}`} group={g}/>)

    return <div className="container services-groups">
        {groups}
    </div>
}

const GroupComp = (props: {group: Group}) => {
    return <div className="services-group">
        <GroupHeader group={props.group}/>
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