import React from 'react'
import '../App.css';
import InstagramIcon from '@material-ui/icons/Instagram';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
class Kontak extends React.Component{
    render(){
        return(
            <div classname="kontak-upper">
                <h1>Kontak</h1>
                <div class="isi-kontak">
                <EmailIcon />
                <br></br>ferdy_wildan_28rpl@student.smktelkom-mlg.sch.id
                <br></br>
                <br></br>
                <InstagramIcon/> 
                <br></br>FERDYWILDANPRATAMA123
                <br></br>
                <br></br>
                <PhoneIcon />
                <br></br>+62-123-4567-890
            </div>
            </div>
        )
    }
}

export default Kontak;