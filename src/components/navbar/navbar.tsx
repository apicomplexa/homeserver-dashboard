import { Server } from "lucide-react"

import "./navbar.css"

export interface NavbarProps {
    title?: string
    description?: string
}

export const NavBar = (props: NavbarProps) => {
    const isTitleEmpty = props.title === undefined || props.title === ''
    return <div className="container no-warp navbar">
        <div className="navbar-brand-section">
            <div className="brand-logo">
                <Server 
                    size={50}
                    color="rgb(var(--tx-color))"
                    strokeWidth={0.6}
                />
            </div>

            <div className="brand-title">
                {isTitleEmpty? "" : `${props.title}'s `}Dashboard
                <div className="brand-subtitle">
                ({props.description || "Application available on this server"})
                </div>
            </div>
        </div>
    </div>
}
