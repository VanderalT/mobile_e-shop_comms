import { useEffect, useRef, useState } from "react";
import Signature from "./Signature";

function NumberContactedInvalid (props) {

    const mobileContent = useRef(null);
    const emailContent = useRef(null);

    const selectEmail = () => {
        var emailRange = document.createRange();
        emailRange.selectNode(emailContent.current);
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(emailRange);
    }

    //Disables select button until all form is filled
    const [formFilled, setFormFilled] = useState('');

    useEffect(() => {
        if(props.customerName === ''||props.agentName === ''||props.dotNumber === ''||props.dueDate === ''){
            setFormFilled(true);
        }
        else{
            setFormFilled(false);
        }
    }, [props.customerName,props.agentName,props.dotNumber,props.dueDate])

    return(
        <div id="commsOutput">
            <div className="comms-header">
                <h2>Mtxt:</h2>
                <p ref={mobileContent}>
                    Contact number is invalid in this scenario, please email customer.
                </p>
            </div>
            <div className="comms-header">
                <h2>Email:</h2>
                <button onClick={selectEmail} disabled={formFilled}>Select Email</button>
            </div>
            <div className="comms-email-content">
                <p ref={emailContent}>
                    Kia ora {props.customerName}, <br />
                    <br />
                    it's {props.agentName} from One NZ. <br />
                    <br />
                    We have attempted to contact you to discuss your online order but the number was invalid. <br />
                    <br />
                    Please provide your valid contact number to proceed. <br />
                    <br />
                    Please either respond to this email with the details required or Give us a call on 0800 837 867 before {props.dueDate} - Mon - Fri 8:00 AM to 6:00 PM -  order number: {props.dotNumber}.<br />
                    <br />
                    Nga Mihi,
                    <Signature agentName={props.agentName} />
                </p>
            </div>
        </div>
    );

}

export default NumberContactedInvalid