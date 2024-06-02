import { createContext, useEffect, useState } from "react"

export interface Service {
    title: string,
    url: string,
    logo_path: string
}

export interface Group {
    title: string,
    icon: string,
    services: Service[]
}

export interface ServicesConfStoreProps {
    setConfig: (config: Group[]) => void
}

export const ServicesConfStore = (props: ServicesConfStoreProps) => {

    useEffect(() => {

        fetch(process.env.PUBLIC_URL + "/services.json")
            .then(r => r.json())
            .then(conf => props.setConfig(validateConfig(conf)))
            .catch(e => {throw new Error("Error while getting services.json")})
        return () => {
            props.setConfig([])
        }
    }, [])

    return <div/>
}

const validateConfig = (conf: Partial<Group>[]): Group[] => {
    const validateService = (s: Partial<Service>): Service => {
        const url = s.url || "https://example.com"
        const title = s.title || url
        const logo_path = s.logo_path || ""
        return {
            url, title, logo_path
        }
    }
    const validateGroup = (group: Partial<Group>): Group => {
        const title = group.title || "Title"
        const icon = group.icon || "x"
        const services = (group.services || []).map(validateService)
        return {title, icon, services}
    }

    return conf.map(g => validateGroup(g))
}