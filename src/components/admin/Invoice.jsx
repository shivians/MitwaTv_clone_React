import React from "react";
import "./Invoice.css";

const Invoice = () => {
  return (
    <div className="invoice-wrapper ">
      <div className="row ">
        <div className="col">
          <div className="media-history container-fluid">
            <h4 className="plan-dtl-heading mb-3">Invoice Details</h4>

            <div className="billing-history-block container-fluid">
              <h4 className=" history-heading text-center mb-4">Media Purchase History</h4>

              <table className="table">
                <thead></thead>

                <thead>
                  <tr>
                    <th>Invoice No.</th>
                    <th>Date</th>
                    <th>Package</th>
                    <th>Service Period</th>
                    <th>Subscription Type</th>
                    <th>Payment Method</th>
                    <th>Total</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>Mark</td>
                    <td>Otto</td>
                  </tr>
                </tbody>
              </table>
              <h4 className="plan-dtl-heading text-center">No Details Available</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invoice;
