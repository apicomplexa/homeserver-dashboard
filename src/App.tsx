import React from "react";
import { useState } from "react";

import "./app.css";
import "./container.css";
import { NavBar } from "./components/navbar/navbar";
import { Group, ServicesConfStore } from "./components/store/services-conf-store";

function App() {
    const [services, setServices] = useState<Group[]>([])
    
    console.log(services)
    return (
        <div className="app">
            <ServicesConfStore setConfig={setServices}/>
            <NavBar />
            <div>
                {JSON.stringify(services)}
            </div>
        </div>
    );
}

export default App;
