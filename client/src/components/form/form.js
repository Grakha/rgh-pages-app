import { useState, useRef } from 'react'
import { useForm } from "react-hook-form";
import msg from "./msg";

//Components
import Alert from "./alert";

const Form = () => {


  const [alert, setAlert] = useState({
    success: false,
    warning: false
  })

  const {register, handleSubmit, errors, reset} = useForm()

  const onSubmit = async(data) => {
    try {
      const result = await msg.post('/api', data)
      setAlert({success: true})
      reset(result)
      setValue('')
    } catch (error) {
      setAlert({warning: true})
      return Promise.reject(error)
    }
  }

  const [value, setValue] = useState('')
  const couterLetter = useRef(500)

  const handleCount = (e) => {
    if (e.target.value.length <= 500 && couterLetter.current >= 0) {
      setValue(e.target.value)
    } else {
      setValue('')
      setValue(value)
    }
  }

  return (
    <form id="contactForm" name="sentMessage" onSubmit={handleSubmit(onSubmit)}>
      <div className="control-group">
        <div className="form-group floating-label-form-group controls mb-0 pb-2">
          <label>Name</label>
          <input className="form-control" id="name" type="name" name="name" placeholder="Name" ref={register({ required: true, minLength: 1, maxLength:41 })}/>
          {errors.name && <p className="help-block text-danger">Please enter your name.</p>}
        </div>
      </div>
      <div className="control-group">
        <div className="form-group floating-label-form-group controls mb-0 pb-2">
          <label>Email Address</label>
          <input className="form-control" id="email" type="email" name="emailAddress" placeholder="Email Address" ref={register({ required: true, pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ })}/>
          { errors.emailAddress && <p className="help-block text-danger">Please enter your email address.</p> }
        </div>
      </div>
      <div className="control-group">
        <div className="form-group floating-label-form-group controls mb-0 pb-2">
          <label>Phone Number</label>
          <input className="form-control" id="phone" type="tel" name="phoneNumber" placeholder="Phone Number" ref={register({ minLength: 6, maxLength: 21, pattern: /(^\+\d)|(\()|(\))|(-)|([ ]\d)|\d/ })}/>
          { errors.phoneNumber && <p className="help-block text-danger">Please enter valid phone number.</p>}
        </div>
      </div>
      <div className="control-group">
        <div className="form-group floating-label-form-group controls mb-0 pb-2">
          <label>Message</label>
          <textarea
            onChange={(e) => handleCount(e)}
            value={value}
            className="form-control"
            id="message"
            name="message"
            rows="5"
            placeholder="Message"
            ref={register({required: true, minLength:5, maxLength:501, pattern: /[A-Za-zА-Яа-яЁё]/})}>
          </textarea>
          {errors.message && <p className="text-danger">Please enter a message.</p>}
          <span className="letter-count">
            {value.length >= 501 ? "" : <span className="text-primary">left {couterLetter.current - value.length} letters</span>}
          </span>
        </div>
      </div>
      <br />
      <div className="form-group">
        <button className="btn btn-primary btn-xl" type="submit">Send</button>
      </div>
      <Alert alert={alert} />
    </form>
  )
}

export default Form;