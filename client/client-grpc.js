import grpc from '@grpc/grpc-js'
import protoLoader from '@grpc/proto-loader'

const notesProtoDefinition = protoLoader.loadSync('notes.proto', {})

const NoteService = grpc.loadPackageDefinition(notesProtoDefinition).NoteService

const client = new NoteService('localhost:3333', grpc.credentials.createInsecure())

export { client }
