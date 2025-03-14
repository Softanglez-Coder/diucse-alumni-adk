import React from "react";
import { Entity } from "@diucsealumni/core";
import { log } from "@diucsealumni/utils";

function App() {
    const entity = new Entity('1');
    log(`Hello World ${entity.id}`);
    return (
        <div>
            <h1>Example App</h1>
        </div>
    );
}

export default App;
