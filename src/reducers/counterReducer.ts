interface CounterState {
    count: number;
}

const initialState: CounterState = { count: 0 };

type Action = { type: 'INCREMENT' } | { type: 'DECREMENT' };

export default function counterReducer(state = initialState, action: Action): CounterState {
    switch(action.type) {
        case 'INCREMENT':
            return { count: state.count + 1 };
        case 'DECREMENT':
            return { count: state.count - 1};
        default:
            return state;
    }
}