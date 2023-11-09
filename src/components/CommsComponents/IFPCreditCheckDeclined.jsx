import { useEffect, useRef, useState } from "react";
import Signature from "./Signature";

function IFPCreditCheckDeclined (props) {

    const mobileContent = useRef(null);
    const emailContent = useRef(null);


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

    return(
        <div id="commsOutput">
            <div className="comms-header">
                <h2>Mtxt:</h2>
                <button onClick={selectMtxt} id="selectMtxtButton" disabled={formFilled}>Select Text</button>
            </div>
            <div className="comms-mobile-content">
                <p ref={mobileContent}>
                    Kia ora {props.customerName}, it's {props.agentName} here from One NZ. 
                    Ngā mihi for your online purchase. 
                    Unfortunately, you haven't met the credit criteria for the plan you chose so we are unable to complete the order {props.dotNumber}. 
                    If you'd like more information about your personal credit history, you can contact credit bureau - Illion - on 0800 362 222. 
                    Your $99 Deposit will be refunded within 15 days into your account. Ngā mihi, {props.agentName} from One NZ.
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
                    It's {props.agentName} here from One NZ. <br />
                    <br />
                    Ngā mihi for your online purchase. Unfortunately, you haven't met the credit criteria for the plan you chose so we are unable to complete the order {props.dotNumber}. <br />
                    <br /> 
                    If you'd like more information about your personal credit history, you can contact credit bureau - Illion - on 0800 362 222. <br />
                    <br />
                    Your $99 Deposit will be refunded within 15 days into your account. <br />
                    <br />
                    Ngā mihi, <br />
                    <Signature agentName={props.agentName} />
                </p>
            </div>
        </div>
    );

}

export default IFPCreditCheckDeclined