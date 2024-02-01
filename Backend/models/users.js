const mongoose = require('mongoose');

const User = mongoose.model("User", {
    username: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    dateJoined: Date,
    followers: {
        type: Number,
        default: 0
    },
    following: {
        type: Number,
        default: 0
    },
    posts: {
        type: Number,
        default: 0
    },
    comments: {
        type: Number,
        default: 0
    }
});

module.exports = User;