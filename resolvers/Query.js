module.exports = {
    me: (parent, args, { currentUser }) => currentUser,
    totalPhotos: (parent, args, { db }) =>
        db.collection('photos')
            .estimateDocumentCount(),

    allPhotos: (parent, args, { db }) =>
        db.collection('photos')
            .find()
            .toArray(),

    totalUsers: (parent, args, { db }) =>
        db.collection('users')
            .estimateDocumentCount().estimateDocumentCount,

    allUsers: (parent, args, { db }) =>
        db.collection('users')
            .find()
            .toArray()

}