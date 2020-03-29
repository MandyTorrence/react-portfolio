import React, { createContext, useReducer, useContext } from "react";

const ProjectContext = createContext({
    id: "",
    projectImage: '',
    projectName: '',
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
        case "remove":
            return state.filter((_, index) => {
                return index !== action.index;
            });
        case "prioritize":
            return state.map((item, index) => {
                if (index === action.index) {
                    return Object.assign({}, item, {
                        priority: !item.priority
                    });
                }
                return item;
            });
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
