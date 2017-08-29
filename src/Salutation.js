import React from 'react';
import { connect } from 'react-redux';
import { updateGreeting, updateName, reset } from './salutation.actions';


export function Salutation({ greeting, name, reset, dispatch }) {
    return (
        <div>
            <span>{greeting} </span>
            <span>{name}</span>!
            <form>
                <label>
                    Salutation:
                    <input name="salutation" type="text" value={greeting} onChange={(event) => dispatch(updateGreeting(event.target.value))} />
                </label>
                <label>
                    Name:
                    <input name="salutation" type="text" value={name} onChange={(event) => dispatch(updateName(event.target.value))} />
                </label>            
                <button onClick={() => dispatch(reset())}>Reset</button>
            </form>
        </div>
    );
}

export default connect(
    state => ({
        greeting: state.greeting,
        name: state.name,
        reset: state.reset
    })
)(Salutation);
