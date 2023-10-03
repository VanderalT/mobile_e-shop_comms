import { useEffect, useRef, useState } from "react";
import Signature from "./Signature";

function DuplicateAddress(props) {

    const [formFilled, setFormFilled] = useState('');

    const mobileDuplicateAddContent = useRef(null)
    const emailDuplicateAddContent = useRef(null)

    const selectMtxt = () => {
        var mobileRange = document.createRange();
        mobileRange.selectNode(mobileDuplicateAddContent.current);
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(mobileRange);
    }

    const selectEmail = () => {
        var emailRange = document.createRange();
        emailRange.selectNode(emailDuplicateAddContent.current);
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
                <p ref={mobileDuplicateAddContent}>
                    Hi {props.customerName}, it's {props.agentName} here from One NZ. We're working on your online order but need a bit more info from you first.
                    Give us a call on 0800 837 867 by {props.dueDate} &#40;Mon - Fri 8:00am to 6:00pm&#41; so we can get it sorted for you, or alternatively respond to the
                    email sent by Online Shop. Your reference number is {props.dotNumber}. Thanks {props.agentName} from One NZ.
                </p>
            </div>
            <div className="comms-header">
                <h2>Email:</h2>
                <button onClick={selectEmail} disabled={formFilled}>Select Email</button>
            </div>
            <div className="comms-email-content">
                <p ref={emailDuplicateAddContent}>
                    Hi {props.customerName},<br />
                    <br />
                    It's {props.agentName} here from One NZ.<br />
                    <br />
                    We're working on your online order but need a bit more info from you first.<br />
                    <br />
                    The current and previous address that you have provided are the same.<br />
                    <br />
                    Please provide us with your current and previous addresses, only your current address must be in New Zealand. <br />
                    <br />
                    You can do so by giving us a call on 0800 837 867 by {props.dueDate} &#40;Mon - Fri 8:00am to 6:00pm&#41; so we can get it sorted for you, or alternatively respond to this
                    email with the details.<br />
                    <br />
                    Your reference number is {props.dotNumber}.<br />
                    <br />
                    Nga Mihi,<br />
                    <br />
                    <Signature agentName={props.agentName} />
                </p>
            </div>
        </div>
    )
}

export default DuplicateAddress