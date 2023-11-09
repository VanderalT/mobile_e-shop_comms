import { useEffect, useRef, useState } from "react";
import Signature from "./Signature";

function PortInCompleted (props) {

    const mobileContent = useRef(null);
    const emailContent = useRef(null);

    const [portDate, setPortDate] = useState('');

    const portDateChange = () => {
        var date = document.querySelector('#portInDate');
        var dateValue = date.value;
        var dateYear = dateValue.substring(0,4);
        var dateMonth = dateValue.substring(5,7);
        var dateDay = dateValue.substring(8,10);
        var portDate = dateDay + "/" + dateMonth + "/" + dateYear;
        console.log(portDate);
        setPortDate(portDate);
      }

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
        if(props.customerName === ''||props.agentName === ''||props.dotNumber === ''||props.dueDate === ''||portDate === ''){
            setFormFilled(true);
        }
        else{
            setFormFilled(false);
        }
    }, [props.customerName,props.agentName,props.dotNumber,props.dueDate,portDate])

    return(
        <div id="commsOutput">
            <div className="comms-extra-details">
                <label htmlFor="portDate">Port Date</label>
                <input type="date" name="portDate" onChange={portDateChange} id="portInDate"></input>
            </div>
            <div className="comms-header">
                <h2>Mtxt:</h2>
                <button onClick={selectMtxt} id="selectMtxtButton" disabled={formFilled}>Select Text</button>
            </div>
            <div className="comms-mobile-content">
                <p ref={mobileContent}>
                    Kia ora {props.customerName}, 
                    we'll be moving your mobile number over to One NZ starting on {portDate}.
                    Keep your old SIM in your phone and when it stops working you'll know that your number has moved. 
                    Then just pop in your new SIM and you're ready to go! Download the My One NZ app now - your one stop shop for managing your plan and paying your bill. 
                    Check it out at one.nz/using-self-service/ .
                    Ngā mihi {props.agentName} from One NZ
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
                    we'll be moving your mobile number over to One NZ starting on {portDate}. <br />
                    <br />
                    Keep your old SIM in your phone and when it stops working you'll know that your number has moved. <br />
                    <br />
                    Then just pop in your new SIM and you're ready to go! Download the My One NZ app now - your one stop shop for managing your plan and paying your bill. <br />
                    <br />
                    Check it out at one.nz/using-self-service/ <br />
                    <br />
                    Ngā mihi
                    <Signature agentName={props.agentName} />
                </p>
            </div>
        </div>
    );

}

export default PortInCompleted