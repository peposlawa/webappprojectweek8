"use client"
import React, { useState } from 'react';

export default function ContactForm() {
    const [fields, setFields] = useState({
        name: '',
        postcode: '',
        house: '',
        city: '',
        number: '',
        email: ''
    });

    // Update the state based on which input field is being changed
    function handleChange(event) {
        const { name, value } = event.target;
        setFields({
            ...fields, // Spread the existing fields
            [name]: value // Update the specific field that changed
        });
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log(fields);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Personal Information</legend>

                    <label htmlFor="name">Full Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={fields.name}
                        onChange={handleChange}
                    />

                    <label htmlFor="postcode">Postcode</label>
                    <input
                        type="text"
                        id="postcode"
                        name="postcode"
                        value={fields.postcode}
                        onChange={handleChange}
                    />

                    <label htmlFor="house">House/Flat Number and Street Name</label>
                    <input
                        type="text"
                        id="house"
                        name="house"
                        value={fields.house}
                        onChange={handleChange}
                    />

                    <label htmlFor="city">City</label>
                    <input
                        type="text"
                        id="city"
                        name="city"
                        value={fields.city}
                        onChange={handleChange}
                    />

                    <legend>Contact Information</legend>

                    <label htmlFor="number">Phone number</label>
                    <input
                        type="number"
                        id="number"
                        name="number"
                        value={fields.number}
                        onChange={handleChange}
                    />

                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={fields.email}
                        onChange={handleChange}
                    />

                    <button type="submit">Submit</button>
                </fieldset>
            </form>
        </>
    );
}