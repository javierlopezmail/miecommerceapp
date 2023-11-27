//import { useState } from 'react'
import { Form, Button, Input } from "antd"
import { useEffect, useContext, useState, createContext } from "react";

const CheckoutForm = ({ onConfirm }) => {
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")

    const handleConfirm = (event) => {
        //event.preventDefault()

        const userData = {
            name, phone, email
        }

        onConfirm(userData)
    }

    const validatePhone = (_, value) => {        
        const phoneRegex = /^\d/; 
    
        if (value || phoneRegex.test(value)) {
          return Promise.resolve();
        }
    
        return Promise.reject(new Error('Please enter a valid phone number'));
      };

    return (
        <Form onFinish={handleConfirm}>
          <Form.Item
            rules={[
              {
                required: true,
                message: "Please enter your full name",
              },
            ]}
            label="Full Name"
            name="full_name"
          >
            <Input placeholder="Enter your full name.." onChange={({ target }) => setName(target.value) } />
          </Form.Item>
          <Form.Item
            rules={[
              {
                required: true,
                type: "email",
                message: "Please enter a valid email",
              },
            ]}
            label="Email"
            name="your_name"
          >
            <Input placeholder="Enter your email.." onChange={({ target }) => setEmail(target.value)} />
          </Form.Item>
          <Form.Item
            rules={[
              {
                required: true,
                type:"phone",
                message: "Please enter your phone"
              },
              {
                validator: validatePhone
              }
            ]}
            label="Phone"
            name="your_phone"
          >
            <Input placeholder="Enter your phone.." onChange={({ target }) => setPhone(target.value)} />
          </Form.Item>
          <Button type="primary" htmlType="submit">
            {" "}
            Confirm Order
          </Button>
        </Form>
    )

    

    // return (
    //     <div className="Container">
    //         <form onSubmit={handleConfirm} className='Form'>
    //             <label className='Label'>
    //                 Name
    //                 <input className="Input" type="text" value={name} onChange={({ target }) => setName(target.value)} />
    //             </label>
    //             <label className='Label'>
    //                 Phone
    //                 <input className="Input" tpye="text" value={phone} onChange={({ target }) => setPhone(target.value)} />
    //             </label>
    //             <label className='Label'>
    //                 Email
    //                 <input className='Input' type="email" value={email} onChange={({target}) => setEmail(target.value)} />
    //             </label>
    //             <div className='Label'>
    //                 <button type="submit" className='Button>'>Create Order</button>
    //             </div>
    //         </form>
    //     </div>
    // )
}

export default CheckoutForm

