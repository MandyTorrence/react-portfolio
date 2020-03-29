import React, { useRef } from "react";
import { useProjectContext } from "../utils/GlobalState";

function Project() {
    const inputRef = useRef();
    const [_, dispatch] = useProjectContext();

    function handleSubmit(e) {
        e.preventDefault();
    }

    return (
        <div style='background-image: url( {projectImage} )'>
            <div className="project-details">
                <h3>{projectName}</h3>
                <a href={githubUrl}><button>See the Code</button></a>
                <a href={demoUrl}><button>See the Demo</button></a>
            </div>
        </div>
    );
}

export default Project;