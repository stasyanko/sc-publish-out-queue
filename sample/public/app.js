// Initiate the connection to the server
var socket = socketCluster.connect()

socket.on('error', function (err) {
    throw 'Socket error - ' + err
})

socket.on('connect', function () {
    console.log('CONNECTED',socket.id)

    socket.subscribe('send-data').watch(data => {
        console.log('send-data',new Date())
        console.log(data)
    })

    // let packet = {
    //     id:1
    // }
    // console.log('Sending packet to server',new Date())
    // console.log(packet)
    // socket.publish('send-data',packet)

})