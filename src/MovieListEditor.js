import React, { useState,useEffect } from 'react'
import Axios from 'axios';
import './public/css/styletable.css';

const MovieListEditor = () => {
    const [daftarFilm, setDaftarFilm] = useState(null)
    const [inputData, setInputData] = useState({title: "", description: "", year: 2020, duration: 1, genre:"", rating:1})
    const [statusForm ,setStatusForm] = useState("Insert")
    const [indexOfForm, setIndexOfForm] = useState(-1)

    const handleChange = (event) =>{
        let typeOfInput = event.target.name
        switch (typeOfInput){
            case "title":{
                setInputData({...inputData, title: event.target.value});
                break
            }
            case "description":{
                setInputData({...inputData, description: event.target.value});
                break
            }
            case "year":{
                if(event.target.value < 1){
                    setInputData({...inputData, year: 1});
                }
                else{
                    setInputData({...inputData, year: event.target.value});
                }
                break
            }
            case "duration":{
                if(event.target.value < 1){
                    setInputData({...inputData, duration: 1});
                }
                else{
                    setInputData({...inputData, duration: event.target.value});
                }
                break
            } 
            case "genre":{
                setInputData({...inputData, genre: event.target.value});
                break
            }
            case "rating":{
                if(event.target.value > 10){
                    setInputData({...inputData, rating: 10});
                }
                else if(event.target.value < 1){
                    setInputData({...inputData, rating: 1});
                }
                else{
                    setInputData({...inputData, rating: event.target.value});
                }
                break
            }
            default:{
                break;
            }
        }
    }
    
    const handleSubmit = (event) =>{
        event.preventDefault()
        let title = inputData.title
        let description = inputData.description
        let year = inputData.year.toString()
        let duration = inputData.duration.toString()
        let genre = inputData.genre
        let rating = inputData.rating.toString()
        if (statusForm === "Insert"){        
            Axios.post(`http://backendexample.sanbercloud.com/api/movies`, {title:title, description: description, year: year, duration: duration, genre:genre, rating:rating})
            .then(res => {
                setDaftarFilm([
                  ...daftarFilm, 
                  { id : res.data.id, 
                    title : title, 
                    description : description, 
                    year : year, 
                    duration : duration, 
                    genre : genre, 
                    rating : rating
                  }])
            })
        }else if(statusForm === "Update"){
            Axios.put(`http://backendexample.sanbercloud.com/api/movies/${indexOfForm}`, {title: title, description: description, year: year, duration: duration, genre:genre, rating:rating})
            .then(() => {
                let dataFilm = daftarFilm.find(el=> el.id === indexOfForm)
                dataFilm.title = title
                dataFilm.description = description
                dataFilm.year = year
                dataFilm.duration = duration
                dataFilm.genre = genre
                dataFilm.rating = rating
                setDaftarFilm([...daftarFilm])
            })
        }
        setStatusForm("Insert")
        setIndexOfForm(-1)
        setInputData({title: "", description: "", year: 2020, duration: 1, genre:"", rating:1})
    }

    const handleEdit = (event) =>{
        let idDataFilm = parseInt(event.target.value)
        let dataFilm = daftarFilm.find(x=> x.id === idDataFilm)
        setInputData({title: dataFilm.title, description: dataFilm.description, year: dataFilm.year, duration: dataFilm.duration, genre: dataFilm.genre, rating: dataFilm.rating})
        setIndexOfForm(idDataFilm)
        setStatusForm("Update")
    }
    
    const handleDelete = (event) => {
        let idDataFilm = parseInt(event.target.value)
    
        let dataFilm = daftarFilm.filter(el => el.id !== idDataFilm)
    
        Axios.delete(`http://backendexample.sanbercloud.com/api/movies/${idDataFilm}`)
        .then(res => {
          console.log(res)
        })
              
        setDaftarFilm([...dataFilm])
        
      }
    

    useEffect( () => {
        if (daftarFilm === null){
          Axios.get(`http://backendexample.sanbercloud.com/api/movies`)
          .then(res => {
            setDaftarFilm(res.data.map(el=>{ return {id: el.id, title: el.title, description: el.description, year: el.year, duration: el.duration, genre: el.genre, rating: el.rating }} ))
          })
        }
    }, [daftarFilm])
    
    return(
        <>
            <h1>Data Film</h1>
            <table>
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Genre</th>
                    <th>Duration</th>
                    <th>Rating</th>
                    <th>Description</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody> 
                    {
                        daftarFilm !== null && daftarFilm.sort(function(a, b){return b.rating-a.rating}).map((item, index)=>{
                        return(                    
                        <tr key={index}>
                            <td>{item.title}</td>
                            <td>{item.genre}</td>
                            <td>{item.duration} Minutes</td>
                            <td>{item.rating}</td>
                            <td>{item.description}</td>
                            <td>
                                <button onClick={handleEdit} value={item.id}>Update</button>
                                &nbsp;
                                <button onClick={handleDelete} value={item.id}>Delete</button>
                            </td>
                        </tr>
                        )
                    })
                    }
                </tbody>
            </table>

            <h1>Form Film</h1>
            <div style={{width: "50%", margin: "0 auto", display: "block"}}>
                <div style={{border: "1px solid #aaa", padding: "20px"}}>
                <form onSubmit={handleSubmit}>
                    <label style={{float: "left"}}>
                    Title:
                    </label>
                    <input style={{float: "right"}} type="text" name="title" value={inputData.title} onChange={handleChange}/>
                    <br/>
                    <br/>

                    <label style={{float: "left"}}>
                    Year:
                    </label>
                    <input style={{float: "right"}} type="number" name="year" value={inputData.year} onChange={handleChange}/>
                    <br/>
                    <br/>

                    <label style={{float: "left"}}>
                    Duration (minutes):
                    </label>
                    <input style={{float: "right"}} type="number" name="duration" value={inputData.duration} onChange={handleChange}/>
                    <br/>
                    <br/>
                        
                    
                    <label style={{float: "left"}}>
                    Genre:
                    </label>
                    <input style={{float: "right"}} type="text" name="genre" value={inputData.genre} onChange={handleChange}/>
                    <br/>
                    <br/>
                    <label style={{float: "left"}}>

                    Rating:
                    </label>
                    <input style={{float: "right"}} type="number" name="rating" value={inputData.rating} onChange={handleChange}/>
                    <br/>
                    <br/>

                    <label style={{float: "left"}}>
                    Description:
                    </label>
                    <textarea style={{float: "right"}} name="description" value={inputData.description} onChange={handleChange}/>
                    <br/>
                    <br/>

                    <div style={{width: "100%", paddingBottom: "20px"}}>
                    <button style={{ float: "right"}}>submit</button>
                    </div>
                </form>
                </div>
            </div>
        </>
    )
}

export default MovieListEditor