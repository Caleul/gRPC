import { client } from './client-grpc.js'

client.list({}, (error, notes) => {
    if (!error) {
        console.log(notes)
    } else {
        console.error(error)
    }
})