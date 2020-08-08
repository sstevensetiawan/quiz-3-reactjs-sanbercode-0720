import React, { Component } from 'react'
import './public/css/style.css';

function Nama(props){
  return <li><strong style={{width: '100px'}}>Nama : </strong>{props.Nama}</li> 
}
function Email(props){
  return<li><strong style={{width: '100px'}}>Email : </strong> {props.Email}</li> 
}
function SistemOperasi(props){
  return<li><strong style={{width: '100px'}}>Sistem Operasi yang digunakan : </strong> {props.SistemOperasi}</li>
}
function AkunGitlab(props){
  return<li><strong style={{width: '100px'}}>Akun Gitlab : </strong>{props.AkunGitlab}</li> 
}
function AkunTelegram(props){
  return <li><strong style={{width: '100px'}}>Akun Telegram : </strong> {props.AkunTelegram}</li> 
}
class About extends Component {
  render() {
    return (
      <>
        <section>
          <div style={{padding: '10px'}}>
            <h1 style={{textalign: 'center'}}>Data Peserta Sanbercode Bootcamp Reactjs</h1>
            <ol>
              <Nama Nama="Steven Setiawan Salim" />
              <Email Email="sstevensetiawan@yahoo.com" />
              <SistemOperasi SistemOperasi="Windows" />
              <AkunGitlab AkunGitlab="sstevensetiawan" />
              <AkunTelegram AkunTelegram="sstevensetiawan" />
            </ol>
          </div>
        </section>
      </>
    )
  }
}

export default About