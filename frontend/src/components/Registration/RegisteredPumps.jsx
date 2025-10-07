import React, { useEffect, useState } from "react";
import "./RegisteredPumps.css";
import { useNavigate } from "react-router-dom";

export const RegisteredPumps = () => {
  const [newPumpWarranty, setNewPumpWarranty] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); // 🔍 search term
  const [editId, setEditId] = useState(-1);
  const [editpumpName, setEditPumpName] = useState("");
  const [editpumpModel, setEditPumpModel] = useState("");
  const [editInvoiceNo, setEditInvoiceNo] = useState("");
  const [editInvoiceDate, setEditInvoiceDate] = useState("");
  const [editWarrantyYear, setEditWarrantyYear] = useState("");
  const [editWarrantyExpiry, setEditWarrantyExpiry] = useState("");

  const ApiUrl = "http://localhost:8000";
  const navigate = useNavigate();

  const calculateExpiry = (date, year) => {
    if (date && year) {
      const newDate = new Date(date);
      newDate.setFullYear(newDate.getFullYear() + Number(year));
      return newDate.toISOString().split("T")[0];
    }
    return "";
  };

  const getAllPump = () => {
    fetch(ApiUrl + "/pumpwarranty")
      .then((res) => res.json())
      .then((res) => setNewPumpWarranty(res));
  };

  useEffect(() => {
    getAllPump();
  }, []);

  const handleEdit = (pumps) => {
    setEditId(pumps._id);
    setEditPumpName(pumps.pumpName);
    setEditPumpModel(pumps.pumpModel);
    setEditInvoiceNo(pumps.invoiceNo);
    setEditInvoiceDate(pumps.invoiceDate);
    setEditWarrantyYear(pumps.warrantyYear);
    setEditWarrantyExpiry(pumps.warrantyExpiry);
  };

  const handleUpdate = () => {
    fetch(ApiUrl + "/pumpwarranty/" + editId, {
      method: "PUT",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify({
        pumpName: editpumpName,
        pumpModel: editpumpModel,
        invoiceNo: editInvoiceNo,
        invoiceDate: editInvoiceDate,
        warrantyYear: editWarrantyYear,
        warrantyExpiry: editWarrantyExpiry,
      }),
    }).then(() => {
      getAllPump();
      setEditId(-1);
    });
  };

  const handledelete = (id) => {
    fetch(ApiUrl + "/pumpwarranty/" + id, { method: "DELETE" }).then(() => {
      getAllPump();
    });
  };

  // 🔍 Filter pumps by pump model
  const filteredPumps = newPumpWarranty.filter((p) =>
    p.pumpModel.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="RegisteredPumps__container">
      {/* ✅ Button to navigate */}
      <button
        type="button"
        className="RegisterPump__check-Btn"
        onClick={() => navigate("/warranty-registration")}
      >
        Register Your Pump Warranty
      </button>

      <h1 className="RegisteredPumps__Heading">Registered Pumps</h1>

      {/* 🔍 Search Bar */}
      <div className="RegisteredPumps__search-container">
        <input
          type="text"
          placeholder="Search by pump model..."
          className="RegisteredPumps__search-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* 🔹 Only show results if searchTerm is not empty */}
      {searchTerm.trim() !== "" && (
        <ul className="RegisteredPumps__list">
          {filteredPumps.length > 0 ? (
            filteredPumps.map((pumps, index) => (
              <li key={index} className="RegisteredPumps__list-item">
                {editId === pumps._id ? (
                  <div className="RegisteredPumps__edit-form">
                    <input
                      className="RegisteredPumps__input"
                      value={editpumpName}
                      onChange={(e) => setEditPumpName(e.target.value)}
                    />
                    <input
                      className="RegisteredPumps__input"
                      value={editpumpModel}
                      onChange={(e) => setEditPumpModel(e.target.value)}
                    />
                    <input
                      className="RegisteredPumps__input"
                      value={editInvoiceNo}
                      onChange={(e) => setEditInvoiceNo(e.target.value)}
                    />
                    <input
                      type="date"
                      className="RegisteredPumps__input"
                      value={editInvoiceDate}
                      onChange={(e) => {
                        setEditInvoiceDate(e.target.value);
                        setEditWarrantyExpiry(
                          calculateExpiry(e.target.value, editWarrantyYear)
                        );
                      }}
                    />
                    <select
                      className="RegisteredPumps__select"
                      value={editWarrantyYear}
                      onChange={(e) => {
                        setEditWarrantyYear(e.target.value);
                        setEditWarrantyExpiry(
                          calculateExpiry(editInvoiceDate, e.target.value)
                        );
                      }}
                    >
                      <option value={1}>1 Year</option>
                      <option value={2}>2 Years</option>
                      <option value={3}>3 Years</option>
                    </select>
                    <input
                      className="RegisteredPumps__input"
                      value={editWarrantyExpiry}
                      readOnly
                    />
                    <div className="RegisteredPumps__actions">
                      <button
                        className="RegisteredPumps__btn RegisteredPumps__edit-btn"
                        onClick={handleUpdate}
                      >
                        Update
                      </button>
                      <button
                        className="RegisteredPumps__btn RegisteredPumps__cancel-btn"
                        onClick={() => setEditId(-1)}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="RegisteredPumps__info">
                      <span>
                        <b>Pump:</b> {pumps.pumpName}
                      </span>
                      <span>
                        <b>Model:</b> {pumps.pumpModel}
                      </span>
                      <span>
                        <b>Invoice No:</b> {pumps.invoiceNo}
                      </span>
                      <span>
                        <b>Invoice Date:</b> {pumps.invoiceDate}
                      </span>
                      <span>
                        <b>Warranty:</b> {pumps.warrantyYear} Years
                      </span>
                      <span>
                        <b>Expiry:</b> {pumps.warrantyExpiry}
                      </span>
                    </div>
                    <div className="RegisteredPumps__actions">
                      <button
                        className="RegisteredPumps__btn RegisteredPumps__edit-btn"
                        onClick={() => handleEdit(pumps)}
                      >
                        Edit
                      </button>
                      <button
                        className="RegisteredPumps__btn RegisteredPumps__delete-btn"
                        onClick={() => handledelete(pumps._id)}
                      >
                        Delete
                      </button>
                    </div>
                  </>
                )}
              </li>
            ))
          ) : (
            <p className="RegisteredPumps__no-results">No pumps found</p>
          )}
        </ul>
      )}
    </div>
  );
};
