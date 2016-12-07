function todo(state, action) {
    switch (action.type) {
        case 'ADD_TODO': {
            return {
                id: action.id,
                text: action.text,
                editing: false,
                completed: false
            };
        }

        case 'TOGGLE_TODO': {
            if (state.id !== action.id) {
                return state;
            }

            return {
                ...state,
                completed: !state.completed
            };
        }

        case 'TOGGLE_ALL': {
            return {
                ...state,
                completed: true
            };
        }

        case 'EDIT_TODO': {
            if (state.id !== action.id) {
                return state;
            }

            return {
                ...state,
                text: action.text,
                editing: !state.editing,
                completed: false
            };
        }

        default: {
            return state;
        }
    }
}

export default function todos(state = [], action) {
    switch (action.type) {
        case 'ADD_TODO': {
            return [
                ...state,
                todo(undefined, action)
            ];
        }

        case 'TOGGLE_TODO': {
            return state.map(item => todo(item, action));
        }

        case 'TOGGLE_ALL': {
            return state.map(item => todo(item, action));
        }

        case 'DELETE_TODO': {
            return state.filter(item => item.id !== action.id);
        }

        case 'EDIT_TODO': {
            return state.map(item => todo(item, action));
        }

        default: {
            return state;
        }
    }
};
