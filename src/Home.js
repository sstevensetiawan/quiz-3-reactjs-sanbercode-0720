import React, { Component,useEffect } from 'react';
import './public/css/style.css';
import Axios from 'axios'

class Home extends Component {
  constructor(props){
      super(props)
      this.state = {
          daftarFilm : []
      }
  }

  componentDidMount(){
    Axios.get('http://backendexample.sanbercloud.com/api/movies')
    .then(res => {
        const daftarFilm=res.data;
        daftarFilm.sort(function(a, b){return b.rating-a.rating})
        this.setState({daftarFilm})
    })
  }
  render() {
    return (
      <>
        <section>
            <h1>Best Film List</h1>
            <div id="article-list">
                {this.state.daftarFilm.map(daftar =>
                    <div>
                    <a href=""><h3>{daftar.title}</h3></a><br></br>
                    <p>
                        <b>Rating : </b>{daftar.rating}<br></br>
                        <b>Duration : </b>{daftar.duration} Minutes<br></br>
                        <b>Genre : </b>{daftar.genre}<br></br>
                        <br></br>
                        <b>Description : </b>{daftar.description}
                    </p>
                    <br></br>
                    </div>
                )}
            </div>
        </section>
        <footer>
        <h5>copyright &copy; 2020 by Sanbercode</h5>
        </footer>
      </>
    )
  }
}

export default Home