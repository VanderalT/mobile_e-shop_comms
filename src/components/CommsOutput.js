import AddressNotFoundComms from "./CommsComponents/AddressNotFound";
import AlternateIdentificationRequired from "./CommsComponents/AlternateIdentificationRequired"
import PassportRequired from "./CommsComponents/PassportRequired"
import DuplicateAddress from "./CommsComponents/DuplicateAddress"
import ExistingAccountConfirmation from "./CommsComponents/ExistingAccountConfirmation"
import WrittenOff from "./CommsComponents/WrittenOff"
import InvalidLsp from "./CommsComponents/InvalidLsp"
import IFPExistingBalance from "./CommsComponents/IFPExistingBalance"
import POIBSRequired from "./CommsComponents/POIRequired"
import AddressNotFoundResponseComms from "./CommsComponents/AddressNotFoundResponse"
import VisaRequired from "./CommsComponents/VisaRequired";
import EntryStampRequired from "./CommsComponents/EntryStampRequired"
import Instructions from "./CommsComponents/Instructions";

function CommsOutput (props) {
    
    const commsTypeToDisplay = props.commsType;

    if(commsTypeToDisplay === 'add_not_found'){
        return(
            <AddressNotFoundComms customerName={props.customerName} dotNumber={props.dotNumber} agentName={props.agentName} dueDate={props.dueDate}/>
        )
    }
    else if(commsTypeToDisplay === 'lt_id_required'){
        return(
            <AlternateIdentificationRequired customerName={props.customerName} dotNumber={props.dotNumber} agentName={props.agentName} dueDate={props.dueDate}/>
        )
    }
    else if(commsTypeToDisplay === 'passport_required'){
        return(
            <PassportRequired customerName={props.customerName} dotNumber={props.dotNumber} agentName={props.agentName} dueDate={props.dueDate}/>
        )
    }
    else if(commsTypeToDisplay === 'visa_required'){
        return(
            <VisaRequired customerName={props.customerName} dotNumber={props.dotNumber} agentName={props.agentName} dueDate={props.dueDate}/>
        )
    }
    else if(commsTypeToDisplay === 'entry_stamp_required'){
        return(
            <EntryStampRequired customerName={props.customerName} dotNumber={props.dotNumber} agentName={props.agentName} dueDate={props.dueDate}/>
        )
    }
    else if(commsTypeToDisplay === 'same_add_not_found'){
        return(
            <DuplicateAddress customerName={props.customerName} dotNumber={props.dotNumber} agentName={props.agentName} dueDate={props.dueDate}/>
        )
    }
    else if(commsTypeToDisplay === 'exist_acc_confirm'){
        return(
            <ExistingAccountConfirmation customerName={props.customerName} dotNumber={props.dotNumber} agentName={props.agentName} dueDate={props.dueDate}/>
        )
    }
    else if(commsTypeToDisplay === 'writ_off'){
        return(
            <WrittenOff customerName={props.customerName} dotNumber={props.dotNumber} agentName={props.agentName} dueDate={props.dueDate} customerRow={props.customerRow}/>
        )
    }
    else if(commsTypeToDisplay === 'inv_lsp'){
        return(
            <InvalidLsp customerName={props.customerName} dotNumber={props.dotNumber} agentName={props.agentName} dueDate={props.dueDate}/>
        )
    }
    else if(commsTypeToDisplay === 'exist_ifp_balance'){
        return(
            <IFPExistingBalance customerName={props.customerName} dotNumber={props.dotNumber} agentName={props.agentName} dueDate={props.dueDate}/>
        )
    }
    else if(commsTypeToDisplay === 'poi_req'){
        return(
            <POIBSRequired customerName={props.customerName} dotNumber={props.dotNumber} agentName={props.agentName} dueDate={props.dueDate}/>
        )
    }
    else if(commsTypeToDisplay === 'add_response'){
        return(
            <AddressNotFoundResponseComms customerName={props.customerName} dotNumber={props.dotNumber} agentName={props.agentName} dueDate={props.dueDate}/>
        )
    }
    else {
        return <Instructions />
    }

}

export default CommsOutput;