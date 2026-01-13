import React from "react";
import "./JobCard.css";
import { Briefcase, Building, MapPin, Phone, ListChecks, AlertCircle } from "lucide-react";

const JobCard = ({ job }) => {
	const handleApply = () => {
		if (!job.contactNumber) {
			alert("No contact number provided for this job.");
			return;
		}

		// Remove spaces, dashes, and special characters
		const phoneNumber = job.contactNumber.replace(/\D/g, "");

		// WhatsApp requires country code (example assumes Nigeria: +234)
		const formattedNumber = phoneNumber.startsWith("234") ? phoneNumber : `234${phoneNumber.replace(/^0/, "")}`;

		const message = `
Hello, my name is ______.

I am interested in applying for the ${job.jobType} position at ${job.hotelName}.

Please let me know the next steps.

Thank you.
  `.trim();

		const whatsappURL = `https://wa.me/${formattedNumber}?text=${encodeURIComponent(message)}`;

		window.open(whatsappURL, "_blank");
	};

	return (
		<div className="job-card">
			{/* Header */}
			<div className="job-header">
				<div className="job-title">
					<Briefcase size={18} />
					<h3>{job.jobType}</h3>
				</div>

				<span className={`status-badge ${job.status === "open" ? "status-open" : "status-closed"}`}>
					{job.status === "open" ? "OPEN" : "CLOSED"}
				</span>
			</div>

			{/* Hotel Info */}
			<div className="hotel-info">
				<div className="info-row">
					<Building size={14} />
					<span>{job.hotelName}</span>
				</div>

				<div className="info-row">
					<MapPin size={14} />
					<span>{job.address}</span>
				</div>
			</div>

			{/* Salary & Contact */}
			<div className="meta-info">
				<p>
					<strong>Salary:</strong> {job.salary || "Not specified"}
				</p>
				<p>
					<Phone size={14} /> {job.contactNumber || "Not provided"}
				</p>
			</div>

			{/* Requirements */}
			<div className="requirements-section">
				<div className="section-title">
					<ListChecks size={16} />
					<span>Requirements</span>
				</div>

				<div className="requirements-box">
					{job.requirements ? (
						<p>{job.requirements}</p>
					) : (
						<span className="no-data">
							<AlertCircle size={14} /> No requirements listed
						</span>
					)}
				</div>
			</div>

			{/* Footer */}
			<div className="job-footer">
				{job.status === "open" ? (
					<button className="apply-btn" onClick={handleApply}>
						Apply Now
					</button>
				) : (
					<button className="closed-btn" disabled>
						Closed
					</button>
				)}
			</div>
		</div>
	);
};

export default JobCard;
