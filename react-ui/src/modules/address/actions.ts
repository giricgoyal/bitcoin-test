import * as actionTypes from './action-types';

export const activate = (location) => ({
    type: actionTypes.ACTIVATE,
    search: location.search
});

export const deactivate = () => ({
    type: actionTypes.DEACTIVATE
});