

import { model, Schema } from 'mongoose';

const flatsSchema = new Schema(
    {
        street: {
            type: String,
            required: true,
        },
        house: {
            type: String,
            required: true,
        },
        new: {
            type: Boolean,
            required: false,
            default: true,
        },
        beds: {
            type: Number,
            required: false,
        },
        sofa: {
            type: Number,
            required: false,
        },
        bath: {
            type: Number,
            required: false,
        },
        pool: {
            type: Number,
            required: false,
        },
        price: {
            type: Number,
            required: true,
        },
        area: {
            type: String,
            required: true,
        },
        district: {
            type: String,
            required: true,
        },
        isVerified: {
            type: Object,
            required: true,

            boolean: {
                type: Boolean,
                required: false,
                default: true,
            },
            amountRooms: {
                type: String,
                required: false,
            },
            floor: {
                type: String,
                required: true,
            },
            developer: {
                type: String,
                required: false,
            },
        },
        complex: {
            type: Object,
            required: true,

            name: {
                type: String,
                required: true,
            },
            parking: {
                type: String,
                required: false,
            },
            yard: {
                type: String,
                required: false,
            },
            decoration: {
                type: String,
                required: false,
            },
            building: {
                type: String,
                required: false,
            },
            howManyFloors: {
                type: String,
                required: false,
            },
            heating: {
                type: String,
                required: false,
            },
            walls: {
                type: String,
                required: false,
            },
            insulating: {
                type: String,
                required: false,
            },
            contract: {
                type: String,
                required: true,
            },
            ceiling: {
                type: String,
                required: false,
            },
            class: {
                type: String,
                required: false,
            },
            amountApartments: {
                type: String,
                required: false,
            }
        },
        photo: { type: String },
    },
    {
        timestamps: true,
        versionKey: false,
    },
);

export const FlatsCollection = model('dana-flats', flatsSchema);
