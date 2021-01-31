const onload = () => {
  //debugger;
  const urlParams = new URLSearchParams(window.location.search);
  const room = urlParams.get('room');
  console.log('this is the room', room)

  const socketUrl = 'http://localhost:3000' //Desenvolvimento
  // const socketUrl = 'https://mysterious-retreat-17997.herokuapp.com/' //Produção Heroku

  const socketBuilder = new SocketBuilder({ socketUrl })
  
  const peerConfig = Object.values({
    id: undefined,
    config:{
      //Produção Heroku
      // host: 'sheltered-hollows-38920.herokuapp.com',
      // secure: true,
      
      //Desenvolvimento
      port: 9000,
      host: 'localhost',
      path: '/'
    }
  })

  const peerBuilder = new PeerBuilder({ peerConfig })

  const view = new View()
  const media = new Media()
  const deps = {
    view,
    media, 
    room,
    socketBuilder,
    peerBuilder
  }

  Business.initialize(deps)
    
}

window.onload = onload