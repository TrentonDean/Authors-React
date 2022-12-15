import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AuthorForm = (props) => {

    const [name, setName] = useState("")
    const [errors, setErrors] = useState({})
    const navigate = useNavigate()

    const onSubmitHandler = (e) => {
        e.preventDefault()

        axios.post(`http://localhost:8000/author`, {name} )
            .then(res=>{
                console.log(res);                           // always console log to get used to tracking your data!
                setName("")
                navigate("/")
            })
            .catch((err)=>{
                console.log(err)
                setErrors(err.response.data.err.errors)
            })
        }

    return (
        <form className="col-6 mt-5 new-author" onSubmit={onSubmitHandler}>
            <p className="purple-text">Add a new Author:</p>
            <div>
                <div className="form-floating mb-3">
                    <input className="form-control" placeholder="Name" name="name" value={name} onChange = {(e) => setName(e.target.value)}/>
                    <label for="name">Name</label>
                </div>
                {errors.name ? <p className="red-text">{errors.name.message}</p> : null}
                <button className="btn btn-success" type="button submit">Submit</button>
            </div>
        </form>
    )
}

export default AuthorForm