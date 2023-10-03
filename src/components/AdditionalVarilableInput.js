
function AddtionalVariables() {
  

  const ammount_due = <input type="number"></input>

  const existing_account = <input type="number"></input>
  const last_two_months = <input type="text"></input>

  return (
    <div>
      <label htmlFor="comms_type">Comms Type</label>
      <select name="comms_type">
        <option value="lt_id_required">Alternate Identification Required</option>
        <option value="inv_lsp">Invalid LSP</option>
        <option value="pend_bill">Pending Bill On Account</option>
        <option value="exist_ifp_balance">IFP Existing IFP balance</option>
        <option value="exist_acc_confirm">Existing Account Confirmation</option>
        <option value="poi_req">POI/BS Required</option>
        <option value="add_not_found">Address Not Found On Tool</option>
        <option value="same_add_not_found">Same Address Not Found</option>
      </select>
      {ammount_due}
      {existing_account}
      {last_two_months}
    </div>

  )
}