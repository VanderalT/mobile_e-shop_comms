import { useEffect, useRef, useState } from "react";
import Signature from "./Signature";

function InvalidLsp(props) {

    const mobileContent = useRef(null)
    const emailContent = useRef(null)

    const selectMtxt = () => {
        var mobileRange = document.createRange();
        mobileRange.selectNode(mobileContent.current);
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(mobileRange);
    }

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


    return (
        <div id="commsOutput">
            <div className="comms-header">
                <h2>Mtxt:</h2>
                <button onClick={selectMtxt} disabled={formFilled}>Select Text</button>
            </div>
            <div className="comms-mobile-content">
                <p ref={mobileContent}>
                    Hi {props.customerName}, it's {props.agentName} here from One NZ. We're getting in touch to let you know that we've recieved your mobile order,
                    but we're experiencing some difficulty transfering the number over from your current provider.
                    Give us a call on 0800 837 867 by {props.dueDate} &#40;Mon - Fri 8:00am to 6:00pm&#41; to confirm the details. Your order reference number is {props.dotNumber}. Thanks {props.agentName} from One NZ.
                </p>
            </div>
            <div className="comms-header">
                <h2>Email:</h2>
                <button onClick={selectEmail} disabled={formFilled}>Select Email</button>
            </div>
            <div className="comms-email-content">
                <p ref={emailContent}>
                    Hi {props.customerName},<br />
                    <br />
                    It's {props.agentName} here from One NZ.<br />
                    <br />
                    We're getting in touch to let you know that we've recieved your mobile order, but we're experiencing some difficulty transfering the number over from your current provider.<br />
                    <br />
                    Please confirm the following details to proceed:<br />
                    <br />
                    Which service provider are you switching from?<br />
                    What is the number you would like to bring with you?<br />
                    How do you use this number at the moment? &#40; Prepay or On Account &#41;<br />
                    <br />
                    If On Account:<br />
                    Please provide your account number<br />
                    <br />
                    If Prepay:<br />
                    Please provide your Sim card number or attach a photo of the Sim card &#40; if possible &#41;<br />
                    For steps on how to find out your sim card number, <a href="https://one.nz/faq/find-a-sim-card-number">click this link</a><br />
                    <br />
                    Please provide the required information by {props.dueDate} and once the requested information has been recieved, we will go ahead and resume your order.<br />
                    <br />
                    Your order reference number is {props.dotNumber}.<br />
                    <br />
                    Nga Mihi,<br />
                    <br />
                    <Signature agentName={props.agentName} />
                </p>
            </div>
        </div>
    )
}

export default InvalidLsp