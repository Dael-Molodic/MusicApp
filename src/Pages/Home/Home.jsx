import React from 'react'
import { useMainAppContext } from '../../contexts/Main_app_context';

function Home() {

  const { connectedUser: [connectedUser, setConnectedUser] } = useMainAppContext();

  return (
    <div>
      {connectedUser?.email}
    </div>
  )
}

export default Home
