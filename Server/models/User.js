const mongoose = require("mongoose");
const { Schema } = mongoose;
const bcrypt = require("bcrypt");
const validator = require('validator');

const userSchema = Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        },
        birthday: {
            type: Date,
        },
        currentjob: {
            type: String
        },
        introduction: {
            type: String
        },
        website: {
            type: String
        },
        twitter: {
            type: String
        },
        facebook: {
            type: String
        },
        linkedin: {
            type: String
        },
        interests: [{type: String}],
        joinedCourses: {
            type: [
                {
                    courseId: {
                        type: Schema.Types.ObjectId,
                        ref: "Course",
                    },
                    currentLesson: {
                        type: Schema.Types.ObjectId,
                        ref: "Lesson",
                    },
                    completedLessons: [
                        {
                            type: Schema.Types.ObjectId,
                            ref: "Lesson",
                        },
                    ],
                    rating: {
                        type: Number,
                        min: 0,
                        max: 5
                    }
                },
            ],
            default: [],
        },
        cart:[{
            type: Schema.Types.ObjectId,
            ref: "Course",
            default: [],
        }], 
        publishedCourses:[{
            type: Schema.Types.ObjectId,
            ref:"Course",
            default: [],
        }],
        isAdmin: {
            type: Boolean,
            default: false,
        },
        role: {
            type: String,
            enum: ['user', 'admin'],
            default: 'user'
        }
    },
    { timestamps: true }
);
module.exports = mongoose.model("User", userSchema);