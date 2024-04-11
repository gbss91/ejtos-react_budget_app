import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const Currency = () => {
  const { currency, dispatch } = useContext(AppContext);
  const [newCurrency, setCurrency] = useState(currency);

  const handleChange = (event) => {
    const newCurrencyValue = event.target.value;
    dispatch({ type: "CHG_CURRENCY", payload: newCurrencyValue });
    setCurrency(newCurrencyValue);
  };

  return (
    <div className="alert alert-secondary">
      <label>
        Currency
        <select
          className="custom-select"
          defaultValue={newCurrency}
          onChange={handleChange}
        >
          <option value="$">$ Dollar</option>
          <option value="£">£ Pound</option>
          <option value="€">€ Euro</option>
          <option value="₹">₹ Ruppee</option>
        </select>
      </label>
    </div>
  );
};
export default Currency;
