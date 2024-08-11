import React from 'react'

export default function Contact() {
    return (
        <div>
            <div className="container">
                <h2>Contact</h2>
                <hr />
                <p>Lets get in touch and talk about your next project.</p>
                <div className="container-fluid">
                    <form>
                        <input type="text" name='name' className='my-3 form-control' placeholder='Name' required />
                        <input type="email" name='email' className='my-3 form-control' placeholder='Email' required />
                        <input type="password" className='form-control' placeholder='Placeholder' name="password" required />
                        <input type="text" name='subject' className='my-3 form-control' placeholder='Subject' required />
                        <input type="text" name='comment' className='my-3 form-control' placeholder='Comment' required />
                        <input className='btn btn-secondary' type="submit" value="Send Message" />
                    </form>
                </div>
            </div>
            <img className='mt-5' src="https://www.w3schools.com/w3images/map.jpg" style={{ width: '100%', backgroundImage: "cover" }} alt="" />
        </div>
    )
}
