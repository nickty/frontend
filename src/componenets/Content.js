import React, {useState} from 'react'
import './Content.css'
import { FormControl, InputLabel, Input, InputBase, FormHelperText, Button } from '@material-ui/core';
//rafce

const Content = () => {

    const [formData, setFormData] = useState({
        name: '', 
        emal: '', 
        password: '', 
        password2: ''
    })

    const {name, email, password, password2} = formData; 

    const onChange = e => setFormData({
        ...formData, [e.target.name]: e.target.value
      });

    const handleSubmit = (e) => {
        e.preventDefault()

        if(password !== password2){
            console.log("Password is not correct")
        } else 
        {
            console.log({name, email, password, password2})
        }
        
    }

    return (
        <div>
            <h2 className="head2">Hello</h2>

            
            <form onSubmit={e=>handleSubmit(e)}>

                <FormControl>
                   <Input onChange={e => onChange(e)} value={name}  type="text" name="name"  placeholder="name"/>
                </FormControl>
                    <br/>
                <FormControl>
                   <Input onChange={e => onChange(e)} value={email}  type="email" name="email"  placeholder="Email"/>
                </FormControl>
                    <br/>
                <FormControl>
                   <Input onChange={e => onChange(e)} value={password}  type="password" name="password"  placeholder="Password"/>
                </FormControl>
                    <br/>
                <FormControl>
                   <Input onChange={e => onChange(e)} value={password2}  type="password" name="password2"  placeholder="Password"/>
                </FormControl>
                    <br/>
                <Button type="submit">Register</Button>
            </form>
            
            


        </div>
    )
}

export default Content
