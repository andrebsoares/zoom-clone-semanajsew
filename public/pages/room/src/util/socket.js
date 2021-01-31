class SocketBuilder {
    constructor({ socketUrl }) {
        this.socketUrl = socketUrl
        //Delega as funções necessárias para o projeto ser executado
        this.onUserConnected = () => { }
        this.onUserDisconnected = () => { }
    }

    setOnUserConnected(fn) {
        //A variavel recebe a função
        this.onUserConnected = fn
        //Sempre retorna a instancia da classe, para que consiga chamar as outras funções dessa classe
        return this 
    }
    setOnUserDisconnected(fn) {
        this.onUserDisconnected = fn
        return this
    }

    //linkar
    build() {        
        const socket = io.connect(this.socketUrl, {
            withCredentials: false
        })

        //eventos que o servidor pode emitir
        socket.on('user-connected', this.onUserConnected)
        socket.on('user-disconnected', this.onUserDisconnected)

        return socket
    }
}
