import React from "react";
import { useState } from "react";

import "./app.css";
import "./container.css";
import { NavBar } from "./components/navbar/navbar";
import { Group, ServicesConfStore } from "./components/store/services-conf-store";
import { ServicesGroupes } from "./components/services-group/services-group";

function App() {
    const [services, setServices] = useState<Group[]>([])
    return (
        <div className="app">
            <ServicesConfStore setConfig={setServices}/>
            <NavBar />
            <div className="trashhold" style={{marginBottom: "30px"}}/>
            <ServicesGroupes conf={services}/>
        </div>
    );
}

export default App;
