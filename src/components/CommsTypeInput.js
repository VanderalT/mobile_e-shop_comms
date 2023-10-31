const CommsTypeInput = ({ optionsState, setCommsType }) => {

  const changeCommsType = event => {
    setCommsType(event.target.value)
  }

  return (
    <div id="commsType">
      <label htmlFor="comms_type">Comms Type</label>
      <select name="comms_type" value={optionsState} onChange={changeCommsType} className="drop-down">
        <option selected="selected" value='empty'>Choose an option</option>
        <option disabled="true">--Completed--</option>
        <option value="new_connection_esim">New Connection Completed - ESim</option>
        <option value="new_connection_psim">New Connection Completed - Physical Sim</option>
        <option value="port_in_completed">Port In Completed</option>
        <option value="pre_to_post_completed">Pre To Post Completed</option>
        <option disabled="true">--Cancelled--</option>
        <option value="order_cancelled">Order Cancelled</option>
        <option value="ifp_order_cancelled">IFP Order Cancelled</option>
        <option value="ifp_visitor_visa_order_cancelled">IFP Vistor Visa Order Cancelled</option>
        <option disabled="true">--CC Declined--</option>
        <option value="cc_declined">CC Declined</option>
        <option value="term_plan_cc_declined">Term Plan CC Declined</option>
        <option value="ifp_cc_declined">IFP CC Declined</option>
        <option value="ifp_cc_plan_only">IFP CC Plan Only</option>
        <option disabled="true">--Identification--</option>
        <option value="lt_id_required">Alternate Identification Required</option>
        <option value="passport_required">Passport Required</option>
        <option value="visa_required">Visa Required</option>
        <option value="entry_stamp_required">Entry Stamp Required</option>
        <option value="nzdl_required">NZDL Required</option>
        <option value="poi_req">POI/BS Required</option>
        <option value="poa_required">Proof Of Address</option>
        <option disabled="true">--Unable To Contact--</option>
        <option value="number_contacted_invalid">Number Contacted Invalid</option>
        <option value="number_contacted_no_answer">Number Contacted No Answer</option>
        <option value="two_factor_auth_before_port">Two Factor Authentication Before Port</option>
        <option disabled="true">--Address--</option>
        <option value="add_not_found">Address Not Found On Tool</option>
        <option value="same_add_not_found">Same Address Not Found</option>
        <option value="add_response">Address Response</option>
        <option disabled="true">--Pending Bill--</option>
        <option value="arrears">Arrears</option>
        <option value="writ_off">Written Off</option>
        <option value="exist_ifp_balance">IFP Existing IFP balance</option>
        <option disabled="true">--Existing Account--</option>
        <option value="inv_lsp">Invalid LSP</option>
        <option value="exist_acc_confirm">Existing Account Confirmation</option>
        <option disabled="true">--General RMI--</option>
        <option value="general_rmi">General RMI</option>
      </select>
    </div>
  )
}

export default CommsTypeInput
  