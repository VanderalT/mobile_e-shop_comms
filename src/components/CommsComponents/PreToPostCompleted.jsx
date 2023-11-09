import { useEffect, useRef, useState } from "react";
import Signature from "./Signature";

function PreToPostCompleted (props) {

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
                    Kia ora {props.customerName}, your new One NZ mobile plan is set up & you're ready to go. To keep track of everything, 
                    download the My One NZ app or visit one.nz/using-self-service/ . Ngā mihi {props.agentName} from One NZ
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
                    Your new One NZ mobile plan is set up & you're ready to go. <br />
                    <br />
                    To keep track of everything, download the My One NZ app or visit one.nz/using-self-service/ <br />
                    <br />
                    Ngā mihi,
                    <Signature agentName={props.agentName} />
                </p>
            </div>
        </div>
    );

}

export default PreToPostCompleted