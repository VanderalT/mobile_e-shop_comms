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
import CancelledIFPOrder from "./CommsComponents/CancelledIFPOrder"
import CancelledIFPOrderVisitorVisa from "./CommsComponents/CancelledIFPOrderVisitorVisa";
import CancelledOrder from "./CommsComponents/CancelledOrder";
import CreditCheckDeclined from "./CommsComponents/CreditCheckDeclined";
import CreditCheckTermPlanDeclined from "./CommsComponents/CreditCheckTermPlanDeclined"
import GeneralRMI from "./CommsComponents/GeneralRMI"
import IFPCreditCheckDeclined from "./CommsComponents/IFPCreditCheckDeclined"
import IFPCreditCheckPlanOnly from "./CommsComponents/IFPCreditCheckPlanOnly"
import NewConnectionCompletedPhysicalSim from "./CommsComponents/NewConnectionCompletedPhysicalSim"
import NewConnectionCompletedESim from "./CommsComponents/NewConnectionCompletedESim"
import NumberContactedInvalid from "./CommsComponents/NumberContactedInvalid"
import NumberContactedNoAnswer from "./CommsComponents/NumberContactedNoAnswer"
import NZDLRequired from "./CommsComponents/NZDLRequired"
import PendingBillArrears from "./CommsComponents/PendingBillArrears"
import PortInCompleted from "./CommsComponents/PortInCompleted"
import PreToPostCompleted from "./CommsComponents/PreToPostCompleted"
import ProofOfAddress from "./CommsComponents/ProofOfAddress"
import TwoFactorAuthenticationBeforePort from "./CommsComponents/TwoFactorAuthenticationBeforePort"


function CommsOutput (props) {
    
    const commsTypeToDisplay = props.commsType;

    if(commsTypeToDisplay === 'add_not_found'){
        return(
            <AddressNotFoundComms customerName={props.customerName} dotNumber={props.dotNumber} agentName={props.agentName} dueDate={props.dueDate}/>
        )
    }
    else if(commsTypeToDisplay === 'two_factor_auth_before_port'){
        return(
            <TwoFactorAuthenticationBeforePort customerName={props.customerName} dotNumber={props.dotNumber} agentName={props.agentName} dueDate={props.dueDate}/>
        )
    }
    else if(commsTypeToDisplay === 'poa_required'){
        return(
            <ProofOfAddress customerName={props.customerName} dotNumber={props.dotNumber} agentName={props.agentName} dueDate={props.dueDate}/>
        )
    }
    else if(commsTypeToDisplay === 'pre_to_post_completed'){
        return(
            <PreToPostCompleted customerName={props.customerName} dotNumber={props.dotNumber} agentName={props.agentName} dueDate={props.dueDate}/>
        )
    }
    else if(commsTypeToDisplay === 'port_in_completed'){
        return(
            <PortInCompleted customerName={props.customerName} dotNumber={props.dotNumber} agentName={props.agentName} dueDate={props.dueDate}/>
        )
    }
    else if(commsTypeToDisplay === 'arrears'){
        return(
            <PendingBillArrears customerName={props.customerName} dotNumber={props.dotNumber} agentName={props.agentName} dueDate={props.dueDate}/>
        )
    }
    else if(commsTypeToDisplay === 'nzdl_required'){
        return(
            <NZDLRequired customerName={props.customerName} dotNumber={props.dotNumber} agentName={props.agentName} dueDate={props.dueDate}/>
        )
    }
    else if(commsTypeToDisplay === 'number_contacted_no_answer'){
        return(
            <NumberContactedNoAnswer customerName={props.customerName} dotNumber={props.dotNumber} agentName={props.agentName} dueDate={props.dueDate}/>
        )
    }
    else if(commsTypeToDisplay === 'number_contacted_invalid'){
        return(
            <NumberContactedInvalid customerName={props.customerName} dotNumber={props.dotNumber} agentName={props.agentName} dueDate={props.dueDate}/>
        )
    }
    else if(commsTypeToDisplay === 'new_connection_esim'){
        return(
            <NewConnectionCompletedESim customerName={props.customerName} dotNumber={props.dotNumber} agentName={props.agentName} dueDate={props.dueDate}/>
        )
    }
    else if(commsTypeToDisplay === 'new_connection_psim'){
        return(
            <NewConnectionCompletedPhysicalSim customerName={props.customerName} dotNumber={props.dotNumber} agentName={props.agentName} dueDate={props.dueDate}/>
        )
    }
    else if(commsTypeToDisplay === 'ifp_cc_plan_only'){
        return(
            <IFPCreditCheckPlanOnly customerName={props.customerName} dotNumber={props.dotNumber} agentName={props.agentName} dueDate={props.dueDate}/>
        )
    }
    else if(commsTypeToDisplay === 'ifp_cc_declined'){
        return(
            <IFPCreditCheckDeclined customerName={props.customerName} dotNumber={props.dotNumber} agentName={props.agentName} dueDate={props.dueDate}/>
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
    else if(commsTypeToDisplay === 'ifp_order_cancelled'){
        return(
            <CancelledIFPOrder customerName={props.customerName} dotNumber={props.dotNumber} agentName={props.agentName} dueDate={props.dueDate}/>
        )
    }
    else if(commsTypeToDisplay === 'ifp_visitor_visa_order_cancelled'){
        return(
            <CancelledIFPOrderVisitorVisa customerName={props.customerName} dotNumber={props.dotNumber} agentName={props.agentName} dueDate={props.dueDate}/>
        )
    }
    else if(commsTypeToDisplay === 'order_cancelled'){
        return(
            <CancelledOrder customerName={props.customerName} dotNumber={props.dotNumber} agentName={props.agentName} dueDate={props.dueDate}/>
        )
    }
    else if(commsTypeToDisplay === 'cc_declined'){
        return(
            <CreditCheckDeclined customerName={props.customerName} dotNumber={props.dotNumber} agentName={props.agentName} dueDate={props.dueDate}/>
        )
    }
    else if(commsTypeToDisplay === 'term_plan_cc_declined'){
        return(
            <CreditCheckTermPlanDeclined customerName={props.customerName} dotNumber={props.dotNumber} agentName={props.agentName} dueDate={props.dueDate}/>
        )
    }
    else if(commsTypeToDisplay === 'general_rmi'){
        return(
            <GeneralRMI customerName={props.customerName} dotNumber={props.dotNumber} agentName={props.agentName} dueDate={props.dueDate}/>
        )
    }
    else {
        return <Instructions />
    }

}

export default CommsOutput;