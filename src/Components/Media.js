import React from 'react';
import { useLocation } from 'react-router';
import Fade from 'react-reveal';
const Media = (props) => {

    var location = useLocation();

    var media = props.media;

    if(props.media){
        
        console.log(media);
        
        
        var showMedia;

        if(props.media.data[0].media_type == "image")
        {
            showMedia = <img className='rounded img-fluid' src={media.links[0].href}  />;
        }
        else
        {
            showMedia = <embed className='rounded' src={media.links[0].href.split('thumb')[0] + "orig.mp4"} style={{maxHeight:'100%', height:'400px' ,maxWidth:'100%', width:'700px'}} />;
        }

        return(

            <div className='row' style={{backgroundColor:'black' , color:'whitesmoke'}} className='py-5'>
                <div className='col-10 offset-1'>
                    <center>
                        <Fade right>
                        <h1 className='text-1'>{props.media.data[0].title}</h1>
                        <hr/>
                        </Fade>
                        <Fade left>
                        {showMedia}
                        </Fade>
                    
                    </center>
                    <center>
                        <Fade right>
                        <h1 className='text-1'> {props.media.data[0].location}</h1>
                        <br/><br/>
                        <p>{props.media.data[0].description}</p>
                        </Fade>
                    </center>
                </div>
            </div>
        );

    }


    return (
        <div className='p-4' style={{ height: '80vh' }}>
            <center>
                <div class="spinner-border " role="status" style={{ marginTop: "25vh", fontSize: '50%' }}>
                    <span class="sr-only">Loading...</span>
                </div>
            </center>
        </div>

    );
}


export default Media;