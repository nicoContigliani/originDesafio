import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getUserAction, getUserActions } from '../features/Redux/authDucks';




const Auth = (props) => {
    const [data, setData] = useState({
        email: '',
        password: ''
    })

    const dispatch = useDispatch()
    const user = useSelector(store => store.user)
    console.log(user);

    const dataInitial = {
        array: [],
        password: "123465789",
        email: "nico.contigliani@gmail.com",
    }

    const x = getUserAction(dataInitial)


    const handleInputChange = e => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })

    }

    const send = e => {
        e.preventDefault()
       
        const dataInitials = {
            array: [],
            password: data.password,
            email: data.email
        }
        const x = getUserAction(dataInitials)
        dispatch(x)
        
    }


    return (
        <div className="container">

            <div>Login</div>

            <form onSubmit={send}>

                <input type="email" placeholder="email" name="email" onChange={handleInputChange} />
                <input type="password" placeholder="password" name="password" onChange={handleInputChange} />

                <button> send</button>
            </form>


        </div>
    )
}

export default Auth