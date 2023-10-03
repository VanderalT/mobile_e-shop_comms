const CommsTypeInput = ({ optionsState, setCommsType }) => {

  const changeCommsType = event => {
    setCommsType(event.target.value)
  }

  return (
    <div id="commsType">
      <label htmlFor="comms_type">Comms Type</label>
      <select name="comms_type" value={optionsState} onChange={changeCommsType} className="drop-down">
        <option selected="selected" value='empty'>Choose an option</option>
        <option disabled="true">--Identification--</option>
        <option value="lt_id_required">Alternate Identification Required</option>
        <option value="passport_required">Passport Required</option>
        <option value="visa_required">Visa Required</option>
        <option value="entry_stamp_required">Entry Stamp Required</option>
        <option value="poi_req">POI/BS Required</option>
        <option disabled="true">--Address--</option>
        <option value="add_not_found">Address Not Found On Tool</option>
        <option value="same_add_not_found">Same Address Not Found</option>
        <option value="add_response">Address Response</option>
        <option disabled="true">--Pending Bill--</option>
        <option value="writ_off">Written Off</option>
        <option value="exist_ifp_balance">IFP Existing IFP balance</option>
        <option disabled="true">--Existing Account--</option>
        <option value="inv_lsp">Invalid LSP</option>
        <option value="exist_acc_confirm">Existing Account Confirmation</option>
      </select>
    </div>
  )
}

export default CommsTypeInput
  