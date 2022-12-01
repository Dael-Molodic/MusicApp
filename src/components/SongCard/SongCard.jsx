import React from 'react'
import "./SongCard.css"

function SongCard({ songObj }) {
  return (
    <div className='card-container'>

        <div className="img-container">
            <img src={songObj.thumbnail.url} alt="song image" className='song-img'/>
            <div className="song-duration">{songObj.duration_formatted}</div>
            <div className="playSongButton">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Ic_play_arrow_48px.svg/1024px-Ic_play_arrow_48px.svg.png" alt="play song" />
            </div>
        </div>
      
        <div className='song-name'>{songObj.title}</div>
        <div className="channel-name">{songObj.channel.name}</div>

    </div>
  )
}

export default SongCard
