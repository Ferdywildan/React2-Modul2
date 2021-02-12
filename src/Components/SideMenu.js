import React from 'react'
import { withStyles } from "@material-ui/core";
import '../App.css';

// withStyles & makeStyles

const style = {
    sideMenu: {
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        left: '0px',
        width: '420px',
        height: '1650px',
        backgroundColor: '#000be6'
    }

}
const SideMenu = (props) => {
    const { classes } = props;
    return (
        <div className={classes.sideMenu}>
            <br></br>
            <br></br>
            <br></br>
            <div class="side-kata">
            <h1>Daftar Karya Seni</h1>
            <li>Musik</li>
            <li>Lukisan</li>
            <li>Tari</li>
            <li>Kerajinan</li>
            <li>Patung</li>
            <li>Kaligrafi</li>
            <li>Ukiran</li>
            <li>Mozaik</li>
            <li>Relief</li>
            </div>
        </div>
        
    )
}




export default withStyles(style)(SideMenu);