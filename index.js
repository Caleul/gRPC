import grpc from '@grpc/grpc-js'
import protoLoader from '@grpc/proto-loader'

const notesProtoDefinition = protoLoader.loadSync('notes.proto', {})

// LÊ O ARQUIVO DE DEFINICAO PROTO
const notesProto = grpc.loadPackageDefinition(notesProtoDefinition)

const notes = [
    { id: '1', title: 'Note 1', content: 'Content 1'},
    { id: '2', title: 'Note 2', content: 'Content 2'}
]

const server = new grpc.Server()

server.addService(notesProto.NoteService.service, {
    list: (_, callback) => {
        const noteList = { notes: notes }
        callback(null, noteList)
    }
})

server.bindAsync('localhost:3333', grpc.ServerCredentials.createInsecure(), (err, port) => {
    if (err) {
        console.error(err)
        return
    }
    console.log(`Servidor ouvindo na porta ${port}`)
})
