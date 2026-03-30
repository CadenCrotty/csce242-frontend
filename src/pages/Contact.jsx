import { useState } from "react";
import "../css/Contact.css";

const Contact = () => {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key","7ae679bb-04c8-4979-8a81-f44742bfad77");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData,
        });

        const data = await response.json();

        if(data.success) {
            setResult("Email Successfully Sent");
            event.target.reset(); //reset your form fields
        }else {
            console.log("Error sending email", data);
            setResult(data.message);
        }
    };

    return (
        <div id="contact-form">
            <form onSubmit={onSubmit}>
                <p>
                    <label for="name">Name:</label>
                    <input type="text" name="name" id="name" required />
                </p>

                <p>
                    <label for="email">Email:</label>
                    <input type="email" name="email" id="email" required />
                </p>

                <p>
                    <label for="message">Message:</label>
                    <textarea name="message" id="message" required></textarea>
                </p>

                <p>
                    <button type="submit">Submit Form</button>
                </p>
            </form>
            <span>{result}</span>
            <div className="location-box">
  
                <h2>Our Location</h2>
                <p>University of South Carolina</p>

            <div className="map-box">
            <iframe
                title="Map"
                src="https://www.google.com/maps?q=University%20of%20South%20Carolina&output=embed">

            </iframe>
    </div>
</div>
        </div>
    );
};

export default Contact;