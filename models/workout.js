const mongoose = require("mongoeese");
const { serializeInteger } = require("whatwg-url");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema(
    {
        day: {
            type: Date,
            default: Date.now
        },
        excercises: [
            {
                type: String,
                name: String,
                weight: Number,
                duration: Number,
                reps: Number,
                sets: Number,
                distance: Number
            },
        ],
    });