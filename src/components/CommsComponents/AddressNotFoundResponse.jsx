import { useEffect, useRef, useState } from "react";
import Signature from "./Signature";

function AddressNotFoundResponseComms(props) {

    const [formFilled, setFormFilled] = useState('');

    const mobileAddressContent = useRef(null);
    const emailAddressContent = useRef(null);

    const selectMtxt = () => {
        var mobileRange = document.createRange();
        mobileRange.selectNode(mobileAddressContent.current);
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(mobileRange);
    }

    const selectEmail = () => {
        var emailRange = document.createRange();
        emailRange.selectNode(emailAddressContent.current);
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(emailRange);
    }

    useEffect(() => {
        if(props.customerName === ''||props.agentName === ''||props.dotNumber === ''||props.dueDate === ''){
            setFormFilled(true);
        }
        else{
            setFormFilled(false);
        }
    }, [props.customerName,props.agentName,props.dotNumber,props.dueDate])

    return (
        <div id="commsOutput">
            <div className="comms-header">
                <h2>Mtxt:</h2>
                <button onClick={selectMtxt} disabled={formFilled}>Select Text</button>
            </div>
            <div className="comms-mobile-content">
                <p ref={mobileAddressContent}>
                    Hi {props.customerName}, it's {props.agentName} here from One NZ. We're working on your online order but need a bit more info from you first.
                    We'll be sending an email shortly confirming the details needed. Please respond with the required information by {props.dueDate}.
                    Your order number is {props.dotNumber}. Thanks {props.agentName} from One NZ.
                </p>
            </div>
            <div className="comms-header">
                <h2>Email: </h2>
                <button onClick={selectEmail} disabled={formFilled}>Select Email</button>
            </div>
            <div className="comms-email-content">
                <p ref={emailAddressContent}>
                    Kia Ora {props.customerName},<br />
                    <br />
                    Thank you for responding with address details.<br />
                    <br />
                    Unfortunately, the address provided does not validate with NZ Post for delivery<br />
                    <br />
                    *Note: We do not send to PO Boxes*<br />
                    <br />
                    Please respond within 4 days &#40;Mon - Fri 8:00am to 6:00pm&#41; so we can proceed.<br />
                    <br />
                    Nga Mihi,<br />
                    <Signature agentName={props.agentName} />
                </p>
            </div>

        </div>
    );

}

export default AddressNotFoundResponseComms