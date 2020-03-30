import React, { createContext, useReducer, useContext } from "react";


const ProjectContext = createContext({
    id: '',
    image: '',
    title: '',
    githubUrl: '',
    demoUrl: ''
});
const { Provider } = ProjectContext;

function reducer(state, action) {
    switch (action.type) {
        case "add":
            return [
                ...state,
                {
                    id: state.length * Math.random(),
                    name: action.name
                }
            ];
        default:
            return state;
    }
}

function ProjectProvider({ value = [], ...props }) {
    const [state, dispatch] = useReducer(reducer, []);

    return <Provider value={[state, dispatch]} {...props} />;
}

function useProjectContext() {
    return useContext(ProjectContext);
}

export { ProjectProvider, useProjectContext };
