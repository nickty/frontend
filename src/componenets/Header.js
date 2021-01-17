import React from 'react'
import './Header.css'
import {Button} from '@material-ui/core'

const Header = ({name, age}) => {
    return (
        <div>
            <div>

            
                    <h2>Welcome {name}</h2>
                    <p>Your age is:  {age}</p>
                    <Button color="primary">Click</Button>
                
                
            </div>
            
        </div>
    )
}

export default Header
