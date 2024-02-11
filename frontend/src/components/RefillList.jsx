import React, { useEffect, useState } from 'react';
import "./RefillList.css";

const RefillList = () => {
    const [refillEvents, setRefillEvents] = useState([]);

    useEffect(() => {
        const calculateRefillEvents = async () => {
            // Fetch medication data from backend
            try {
                const response = await fetch('http://localhost:3000/refills',
                    {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    });
                const medications = await response.json();

                // Calculate refill events for each medication
                const events = [];
                medications.forEach(medication => {
                    const { medicineName, frequency, dosage, refills } = medication;
                    // Add logic here to calculate refill events based on medication data
                    // Push calculated events to the events array
                    const refillDate = new Date();
                    refillDate.setDate(refillDate.getDate() + parseInt(refills)); // Assuming refills are in days
                    events.push({
                        medicineName,
                        refillDate: refillDate.toLocaleDateString('en-US'), // Format refill date as a string
                        dosage,
                        frequency,
                    });
                });

                // Set the calculated refill events
                setRefillEvents(events);
            } catch (error) {
                console.error('Error:', error);
            }
        };

        // Call the function to calculate refill events
        calculateRefillEvents();
    }, []); // Run the effect only once when the component mounts

    return (
        <div>
            <h2>Refill Events</h2>
            <ul>
                {refillEvents.map((event, index) => (
                    <li key={index}>
                        <strong>{event.medicineName}</strong>
                        <p>Next Refill: {event.refillDate}</p>
                        <p>Dosage: {event.dosage}</p>
                        <p>Frequency: {event.frequency}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RefillList;