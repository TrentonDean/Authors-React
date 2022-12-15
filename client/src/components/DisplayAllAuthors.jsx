import React, {useEffect,useState} from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

const DisplayAllAuthors = (props) => {

    const [authors, setAuthors] = useState([])

    useEffect(()=>{
        axios.get("http://localhost:8000/author")
        .then((res)=>{
            setAuthors(res.data);
	})
        .catch((err)=>{
            console.log(err);
        })
    })

    const handleDeleteAuthor = (id) => {
        axios.delete(`http://localhost:8000/author/${id}`)
            .then((response) => {
                console.log("success deleting author");
                console.log(response);
            const filteredAuthors = authors.filter((author) => {
                return author._id !== id;
            });
            setAuthors(filteredAuthors);
            })
            .catch((err) => {
                console.log("error deleting author", err.response);
            });
    };

    return (
        <div>
            <div className="author-list">
                <Link to={'/new'}>Add an Author</Link>
                <p className="purple-text mt-2 mb-0">We have quotes from:</p>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Author</th>
                            <th scope="col">Actions Available</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            authors.map((author,index) => {
                                return (
                                    <tr key={author._id}>
                                        <td>{author.name}</td>
                                        <td><Link to={`/edit/${author._id}`} className='btn btn-primary'>Edit</Link><button className='btn btn-danger ms-2' onClick={(e)=>{handleDeleteAuthor(author._id)}}>Delete</button></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default DisplayAllAuthors