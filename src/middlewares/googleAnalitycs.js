import analytic from '../utils/ga'

export const gaMiddleware = store => next => action => {
    const result = next(action);

    analytic.handleEvent(action);

    return result;
};