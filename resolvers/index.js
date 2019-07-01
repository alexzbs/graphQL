const Query = require('./Query')
const Subscription = require('./Subscription')
const Mutation = require('./Mutation')
const Type = require('./Type')

// var tags = [
//     { "photoID": "1", "userID": "gPlake" },
//     { "photoID": "2", "userID": "sSchmidt" },
//     { "photoID": "2", "userID": "mHattrup" },
//     { "photoID": "2", "userID": "gPlake" }
// ]
// var users = [
//     { "githubLogin": "mHattrup", "name": "Mike Huttrup" },
//     { "githubLogin": "gPlake", "name": "Glen Plake" },
//     { "githubLogin": "sSchmidt", "name": "Scot Schmidt" },
// ]

// var photos = [
//     {
//         "id": "1",
//         "name": "Dropping the Heart Chute",
//         "description": "The heart chute is one of my favorite chutes",
//         "category": "ACTION",
//         "githubUser": "S",
//         'created': '3-28-1977'
//     },
//     {
//         "id": "2",
//         "name": "Enjoying the sunshine",
//         "category": "SELFIE",
//         "githubUser": "K",
//         'created': '1-2-1985'
//     },
//     {
//         "id": "3",
//         "name": "Gunbarrel 25",
//         "description": "25 laps on gunbarrel today",
//         "category": "LANDSCAPE",
//         "githubUser": "K",
//         'created': '2018-04-15T19:09:57.308Z'
//     },
// ]

// var _id = 0

const resolvers = {
    Query,
    Mutation,
    Subscription,
    ...Type
}
module.exports = resolvers