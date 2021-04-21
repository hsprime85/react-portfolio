import React, { useState } from 'react'
import emailjs from 'emailjs-com'
import { useForm } from 'react-hook-form'

const Contact = () => {
    const [ successMessage, setSuccessMassage ] = useState("")
    const { register, handleSubmit, formState:{errors} } = useForm()

    const serviceID = 'service_ID'
    const templateID = 'template_ID'
    const userID = 'user_V0RFkzLH8Q8DV31UejAJD'

    const onSubmit = (data, r) => {
        sendEmail(
          serviceID,
          templateID,
          {
            name: data.name,
            phone: data.phone,
            email: data.email,
            subject: data.subject,
            description: data.description
          },
          userID
        )
        r.target.reset();
      }

    const sendEmail=(serviceID, templateID, variables, userID)=> {
        emailjs.send(serviceID, templateID, variables, userID)
          .then(() => {
            setSuccessMassage("Form send Successfully! I will contact you as soon as possible!");
          }).catch(err => console.error(`Something went wrong! ${err}`)) 
      }

    return (
        <div className='contacts'>
            <div className="text-center">
                    <h1>Contact me</h1>
                    <p>Please fill out the form and decribe me </p>
                    <span className="success-message">{successMessage}</span>
            </div>
            <div className="container">
                <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                    <div className="col-md-6 col-xs-12">
                        <div className="text-center">
                            <input 
                                className='form-control' 
                                type='text' 
                                placeholder='Name' 
                                name='name'
                                aria-invalid={errors.name ? "true" : "false"}
                                {...register("name", {
                                    required: "Please enter your name",
                                    maxLength: {
                                        value: 20,
                                        message:
                                        "Please enter a name with fewer than 20 characters",
                                        },
                                })}                
                                />
                            <div className="line"></div>
                        </div>
                        <span className="error-message">{errors.name && errors.name.message}</span>

                        <div className="text-center">
                            <input 
                                className='form-control' 
                                type='text' 
                                placeholder='Phone Number' 
                                name='phone'
                                aria-invalid={errors.phone ? "true" : "false"}
                                {...register("phone", {
                                    required: "Please enter your phone number",
                                })} 
                                />
                            <div className="line"></div>
                        </div>
                        <span className='error-message'>{errors.phone && errors.phone.message}</span>

                        <div className="text-center">
                            <input 
                                className='form-control' 
                                type='email' 
                                placeholder='Email' 
                                name='email'
                                aria-invalid={errors.email ? "true" : "false"}
                                {...register("email", {
                                    required: "Please enter your email",
                                    pattern: {
                                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                      message: "invalid Email"
                                    }                                    
                                })} 
                                />
                            <div className="line"></div>
                        </div>
                            <span className='error-message'>{errors.email && errors.email.message}</span>
                        
                        <div className="text-center">
                            <input 
                                className='form-control' 
                                type='text' 
                                placeholder='Subject' 
                                name='subject'
                                aria-invalid={errors.subject ? "true" : "false"}
                                {...register("subject", {
                                    required: "Please enter your subject",
                                })} 
                                />
                            <div className="line"></div>
                        </div>
                        <span className='error-message'>{errors.subject && errors.subject.message}</span>

                    </div>
                    <div className="col-md-6 col-xs-12">
                        <div className="text-center">
                            <textarea 
                                className='form-control' 
                                type='text' 
                                placeholder='Description' 
                                name='description'
                                aria-invalid={errors.description ? "true" : "false"}
                                {...register("description", {
                                    required: "Please enter your description",
                                })} 
                                ></textarea>
                            <div className="line"></div>
                        </div>
                            <span className='error-message'>{errors.description && errors.description.message}</span>
                        <button className="btn-main-offer contact-btn" type='submit'>contact me</button>
                    </div>

                </div>
                </form>
            </div>
        </div>
    )
}

export default Contact
