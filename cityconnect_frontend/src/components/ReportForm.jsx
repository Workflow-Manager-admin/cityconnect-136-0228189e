import React, { useState } from "react";

// PUBLIC_INTERFACE
/**
 * ReportForm - form to submit new city complaints/reports.
 * Props: none (boilerplate)
 */
const ReportForm = () => {
  const [description, setDescription] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement report submission logic (API call)
    alert("Report submitted: " + description);
    setDescription("");
  };

  return (
    <form className="report-form" style={{ display: "grid", gap: 12, margin: "2rem auto", maxWidth: 400 }} onSubmit={handleSubmit}>
      <h2>Submit a Report</h2>
      <textarea
        placeholder="Describe the issue..."
        value={description}
        onChange={e => setDescription(e.target.value)}
        rows={4}
        required
      />
      <button className="btn" type="submit">Submit</button>
    </form>
  );
};

export default ReportForm;
