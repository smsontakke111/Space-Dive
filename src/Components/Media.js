import React from 'react';
import { useLocation } from 'react-router';

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
                        <h1 className='text-1'>{props.media.data[0].title}</h1>
                        <hr/>
                        {showMedia}
                        
                    
                    </center>
                    <center>

                        <h1 className='text-1'> {props.media.data[0].location}</h1>
                        <br/><br/>
                        <p>{props.media.data[0].description}</p>
                    </center>
                </div>
            </div>
        );

    }


    return <div><center>Something went wrong !</center></div>
}


export default Media;