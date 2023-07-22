import { PropTypes } from 'prop-types'


export default function CounterButton({by,incrementMethod,decrmentMethod}){

    // function incrementCounterFunction(){
    //     incrementMethod(by)
    // }

    // function decrementCounterFunction(){
    //     decrmentMethod(by)
    // }

    return (
        <div className="Counter">
            {/* <span className="count">{count}</span> */}
            <div>
            <button className="counterButton" onClick={()=>incrementMethod(by)}   
            >+{by}</button>
            <button className="counterButton" onClick={()=>decrmentMethod(by)}
                    >-{by}</button>
            </div>
        </div>
    );
}

CounterButton.propTypes={
    by: PropTypes.number
}
CounterButton.defaultProps={
    by: 1
}