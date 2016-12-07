import ReactGA from 'react-ga';

const eventsHash = {
    ADD_TODO: ({ category, action, sendEvent }) => (
        sendEvent(category, `Add new Todo with id ${action.id} and text ${action.text}`)
    ),
    DELETE_TODO: ({ category, action, sendEvent }) => (
        sendEvent(category, `Delete Todo with id ${action.id}`)
    ),
    TOGGLE_TODO: ({ category, action, sendEvent }) => (
        sendEvent(category, `Todo with id ${action.id} is completed`)
    ),
    TOGGLE_ALL: ({ category, action, sendEvent }) => (
        sendEvent(category, `Toggle all Todos as completed`)
    ),
};

class Analytic {
    constructor() {
        ReactGA.initialize('UA-85785535-1');

        ReactGA.event({
            category: 'TODO_LIST',
            action: 'User opened website',
        });
    }


    sendEvent(category, action) {
        ReactGA.event({
            category: category || 'Unknown',
            action,
        });
    }

    handleEvent(action) {
        if (eventsHash[action.type]) {
            eventsHash[action.type]({
                category: action.type,
                action,
                sendEvent: this.sendEvent,
            });
        }
    }
}

export default (new Analytic());