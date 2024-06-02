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
            .then(conf => props.setConfig(conf))
            .catch(e => {throw new Error("Error while getting services.json")})
        return () => {
            props.setConfig([])
        }
    }, [])

    return <div/>
}