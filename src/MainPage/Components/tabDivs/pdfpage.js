import React from 'react'
import gits from "../../../assets/IntroAssets/gits.pdf";

function PdfPage(props) {

    return (<div><embed src= {gits} style={{
       width:750,
        height:550,
        marginTop:-25,
     marginLeft:0,
    }}></embed></div>)

}

export default PdfPage;