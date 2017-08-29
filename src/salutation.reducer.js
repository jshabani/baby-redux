import { GREETING, NAME, RESET } from './salutation.constants';

export default (state = {}, { type, payload }) => {
    switch (type) {
        case GREETING:
            return { greeting: payload, 
                    name: state.name  };
        case NAME:
            return { greeting: state.greeting, name: payload };
        case RESET: 
            return { greeting: '', name: '' };
        default:
            return state;
    }
}