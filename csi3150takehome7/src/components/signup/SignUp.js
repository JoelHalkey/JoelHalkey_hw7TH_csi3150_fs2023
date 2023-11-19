import React from 'react'
import "./signup.css";

// a. User Full Name
// b. User’s desired username
// c. User email
// d. User Address, and
// e. User Phone Number 

const SignUp = () => { 
    const [formData, setFormData] = React.useState({
        userFullName: "",
        username: "",
        userEmail: "",
        userAddress: "",
        userPhoneNumber: ""
    });

    function submitForm(e){
        // Prints out the data in the console.
        e.preventDefault();
        console.log(formData);
    }

    function handleChange(e){
        const { name, value } = e.target;
        setFormData((prevFormData) => {
            return{
                ...prevFormData, 
                [name]: value,
            };
        });
    }

    return (
        <div className='sign-up-container'>
            <form onSubmit={submitForm} className='sign-up-form'>
                {/* Full Name */}
                <label htmlFor='user-full-name'>Full Name</label>
                <input
                    type='text'
                    className='user-full-name'
                    id='user-full-name'
                    name='userFullName'
                    placeholder='e.g. Jane Doe'
                    value={formData.userFullName}
                    onChange={handleChange}
                />

                {/* Username */}
                <label htmlFor='user-username'>Username</label>
                <input
                    type='text'
                    className='user-username'
                    id='user-username'
                    name='username'
                    placeholder='e.g. janedoe123'
                    value={formData.username}
                    onChange={handleChange}
                />

                {/* Email */}
                <label htmlFor='user-email'>Email</label>
                <input
                    type='email'
                    className='user-email'
                    id='user-email'
                    name='userEmail'
                    placeholder='e.g. janedoe@email.com'
                    value={formData.userEmail}
                    onChange={handleChange}
                />

                {/* Address */}
                <label htmlFor='user-address'>Address</label>
                <input
                    type='text'
                    className='user-address'
                    id='user-address'
                    name='userAddress'
                    placeholder='e.g. 123 Sesame Street'
                    value={formData.userAddress}
                    onChange={handleChange}
                />

                {/* Phone Number */}
                <label htmlFor='user-phone-number'>Phone Number</label>
                <input
                    type='tel'
                    className='user-phone-number'
                    id='user-phone-number'
                    name='userPhoneNumber'
                    placeholder='e.g. (555) 555-5555'
                    value={formData.userPhoneNumber}
                    onChange={handleChange}
                />

                <button type='submit' className='sign-up-submit-button' >
                        submit
                </button>
            </form>
        </div>
    )
}

export default SignUp