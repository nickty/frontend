import React from 'react'
import './Header.css'
import {Button, Container} from '@material-ui/core'

const Header = ({name, age}) => {
    return (
        <div>
            <div className={Container}>

                <Container>
                    <h2>Welcome {name}</h2>
                    <p>Your age is:  {age}</p>
                    <Button color="primary">Click</Button>
                </Container>
                
            </div>
            
        </div>
    )
}

export default Header
