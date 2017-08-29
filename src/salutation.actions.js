import { GREETING, NAME, RESET } from './salutation.constants';

export function updateGreeting(phrase) {
    return {
        type: GREETING,
        payload: phrase
    };
}

export function updateName(person) {
    return {
        type: NAME,
        payload: person
    };
}

export function reset() {
    return {
        type: RESET,
        payload: null
    }
}