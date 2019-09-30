import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar'
import './App.css';
import { Typography, Button, IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Clear';
import { func } from 'prop-types';

function VideoCard(props){
  
  return (
    <a href={props.url} target="_blank" style={{textDecoration: 'none', colotr: 'black'}}>
      <div className="body-card">
        <div className="body-cover">
          <img src={props.link} width="100%" onClick={() => alert('Video dengan Judul ini tidak tersedia')}/>
          <Typography>{props.duration}</Typography>
        </div>
        <Typography variant="h6" style={{padding: '10px 0', overflow: 'hidden',whiteSpace:'nowrap', textOverflow: 'ellipsis', height:20, width: "100%"}}>{props.title}</Typography>
        <Typography color="textSecondary" style={{fontSize: 15}}>{props.channelName} <br/> 161rb x ditonton .<br/> 5 bulan yang lalu</Typography>
      </div>
    </a>
  )
}

function VideoPageComponent(props){
const {name, img, arr} = props;
  
const [click, setClick] = useState('Subscribe');
const [username, setUsername] = useState(name);

  function onClick(){
    if(click === 'Subscribe'){
      setClick('Subscribed');
    } else {
      setClick('Subscribe');
    }
    tampilMessage()
  }
  const [pesan, setPesan] = useState('');
  
  function tampilMessage(){
    if (click === 'Subscribe'){
      setPesan(`Anda telah men-subscribe ${username}`)
    } else if (name === 'Stevan Leonardy') {
      setClick("Subcribed");
      setPesan(`Anda tidak bisa men-Unsubscribe ${username} . Karena Kuasa berada ditangan nya`);
    } else {
      setPesan(`Anda telah berhenti mengikuti ${username}`)
    }
  }

  
  return(
    <div className="card">
      <div>
        <p>{pesan}</p>
      </div>
      <div className="header-card">
        <div className="header-card-left">
          <Avatar alt="Remy Sharp" src={img}/>
          <Typography>{username} - Topik</Typography>
          <Typography color="textSecondary">Channel yang direkomendasikan untuk Anda</Typography>
        </div>
        <div className="header-card-right">
          <Button className="subscribe-btn" variant="outlined" onClick={onClick}>{click}</Button>
          <IconButton><CloseIcon/></IconButton>
        </div>
      </div>
      <div className="body-container">
        {
          arr.map(e => (
            <VideoCard
              link={e.link}
              duration={e.duration}
              title={e.title}
              channelName={e.channelName}
              url={e.url}
            />
          ))
        }
      </div>
    </div>
  )
}

function App(){

  
  const videoStevan = [
    {
      link:"https://i.ytimg.com/vi/JQNAAM4G4-c/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLD6H9pSO4ORIVsTryxeBYvJAlnEzQ",
      url: "https://www.youtube.com/watch?v=JQNAAM4G4-c",
      duration:"22:19",
      title:"只有一次活的機會 Hidup Hanya Sekali",
      channelName: "Stevan Leonardy"
    },
    {
      link:"https://i.ytimg.com/vi/0VFPYjRT8lc/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBzatWmi9Zn00eHjUvljToHhdRuiw",
      url: "https://www.youtube.com/watch?v=0VFPYjRT8lc&t=3s",
      duration:"8:21",
      title:"印尼棉兰华希宁中学( 第一届亚太区校园大自然快乐操观摩交流会)",
      channelName: "Stevan Leonardy"
    },
    {
      link:"https://i.ytimg.com/vi/rD7s97ZxNEo/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAj7gXymhBpFIaHAJtM4YKrZzp2FA",
      url: "https://www.youtube.com/watch?v=rD7s97ZxNEo&t=4s",
      duration:"17:01",
      title:"騙子的最後願望Harapan Terakhir Sang Penipu",
      channelName: "Stevan Leonardy"
    }
  ];

  return (
    <>
      <VideoPageComponent name="Kim Jong Kok" arr={[]}/>
      <VideoPageComponent name="Kim jong un" arr={[]}/>
      <VideoPageComponent name="Kim jong tu" arr={[]}/>
      <VideoPageComponent name="Kim qmak" arr={[]}/>
      <VideoPageComponent name="Kim mamak" arr={[]}/>
      <VideoPageComponent name="Stevan Leonardy" img="https://yt3.ggpht.com/a/AGF-l78IjeED-Nz8Qw7fdwlrVu_HFCjZ-wzxpEfMbg=s288-c-k-c0xffffffff-no-rj-mo" arr={videoStevan}/>
    </>
  );
}

export default App;
