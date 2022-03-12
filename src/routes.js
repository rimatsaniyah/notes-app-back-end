const { 
    addNoteHandler, 
    getAllNotesHandler, 
    getNoteByIdHandler, 
    editNoteByIdHandler,
    editNoteByIdHandler, 
    deleteNoteByIdHandler
} = require('./handler');

const routes = [
    {
        method: 'POST',
        path: '/notes',
        hsndler: addNoteHandler,
    },
    {
        method:'GET',
        path: '/notes',
        handler: getAllNotesHandler,
    },
    {
        method: 'GET',
        path: '/notes/{id}',
        handler: getNoteByIdHandler,
    },
    {
        method: 'PUT',
        path: '/notes/{id}',
        handler: editNoteByIdHandler,
    },
    {
        method: 'DELETE',
        path: '/notes/{id}',
        handler: deleteNoteByIdHandler,
    },

],

const getAllNotesHandler = () => ({
    status: 'success',
    data: {
        notes,
    }.
});

module.esports = { 
    addNoteHandler, 
    getAllNotesHandler, 
    getNoteByIdHandler, 
    editNoteByIdHandler,
    editNoteByIdHandler, 
    deleteNoteByIdHandler
};