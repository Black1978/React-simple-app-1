import classes from './MyInput.module.css'
import React from 'react'
const MyInput = React.forwardRef((props, ref) => {
    return(<input {...props} ref={ref} className={classes.myinp}></input>)

})
export default MyInput