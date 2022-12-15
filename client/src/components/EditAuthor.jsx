import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams, Link } from "react-router-dom";

const EditAuthor = (props) => {

    const { id } = useParams();
    const [authorName, setAuthorName] = useState("")
    const [errors, setErrors] = useState({})
    const [authorNotFoundError, setAuthorNotFoundError] = useState("")
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`http://localhost:8000/author/${id}`)
            .then(res => {
                setAuthorName(res.data.name)
            })
            .catch(err => {
                console.log(err)
                setAuthorNotFoundError(`Author not found using that ID`)
            })
    }, [])

    const updateAuthor = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:8000/author/${id}`, {name: authorName})
            .then(res => {
                console.log(res.data);
                navigate("/")
            })
            .catch(err => {
                console.log(err)
                setErrors(err.response.data.err.errors)
            })
    }

    return (
        <div>
            <form className="col-6 new-author" onSubmit={updateAuthor}>
            {authorNotFoundError ? (
                <h2>
                    {authorNotFoundError} <Link to="/new">Click here to add author</Link>
                </h2>
            ) : null}
                <Link to={'/'}>Home</Link>
                <p className="purple-text mt-3">Edit Author:</p>
                <div>
                    <div className="form-floating mb-3">
                        <input className="form-control" placeholder="Name" name="name" value={authorName} onChange={(e) => setAuthorName(e.target.value)}/>
                        <label for="name">Name</label>
                    </div>
                    {errors.name ? <p className="red-text">{errors.name.message}</p> : null}
                    <button className="btn btn-success" type="button submit">Submit</button>
                </div>
            </form>
        </div>
    )

}

export default EditAuthor