import { useEffect, useRef, useState } from "react";

function TwoFactorAuthenticationBeforePort (props) {

    const mobileContent = useRef(null);
    const emailContent = useRef(null);


    const selectMtxt = () => {
        var mobileRange = document.createRange();
        mobileRange.selectNode(mobileContent.current);
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(mobileRange);
    }

    //Disables select button until all form is filled
    const [formFilled, setFormFilled] = useState('');

    useEffect(() => {
        if(props.customerName === ''||props.agentName === ''||props.dotNumber === ''){
            setFormFilled(true);
        }
        else{
            setFormFilled(false);
        }
    }, [props.customerName,props.agentName,props.dotNumber])

    return(
        <div id="commsOutput">
            <div className="comms-header">
                <h2>Mtxt:</h2>
                <button onClick={selectMtxt} id="selectMtxtButton" disabled={formFilled}>Select Text</button>
            </div>
            <div className="comms-mobile-content">
                <p ref={mobileContent}>
                    Kia ora {props.customerName}, 
                    it's {props.agentName} from One NZ in regard to your mobile order {props.dotNumber}.
                    We're about to raise the request to port your number over to One NZ. 
                    You will receive a TXT message shortly to confirm.
                    Please ensure you respond with “Yes” or “Y” within 2 hours of receiving it. 
                    Ngā mihi, {props.agentName} at One NZ 
                </p>
            </div>
            <div className="comms-header">
                <h2>Email:</h2>
            </div>
            <div className="comms-email-content">
                <p ref={emailContent}>
                    This scenario requires the customer to respond via text
                </p>
            </div>
        </div>
    );

}

export default TwoFactorAuthenticationBeforePort