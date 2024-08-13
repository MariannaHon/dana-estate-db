
import { getAllFlats, getFlatById, createFlat, patchFlat, deleteFlat } from "../services/flats.js";

import { parsePaginationParams } from "../utils/parsePaginationParams.js";
import { parseSortParams } from "../utils/parseSortParams.js";

import createHttpError from 'http-errors';

import { saveFileToCloudinary } from '../utils/saveFileToCloudinary.js';
import { env } from '../utils/env.js';
import { saveFileToUploadDir } from '../utils/saveFileToUploadDir.js';


export const getFlatsController = async (req, res) => {

    const { page, perPage } = parsePaginationParams(req.query);
    const { sortBy, sortOrder } = parseSortParams(req.query);

    const flats = await getAllFlats({
        page,
        perPage,
        sortBy,
        sortOrder,
    });

    res.json({
        status: 200,
        message: "Successfully found flats!",
        data: flats,
    });
};

export const getFlatByIdController = async (req, res, next) => {
    const { flatId } = req.params;
    const flat = await getFlatById(flatId);

    if (!flat) {
        next(createHttpError(404, 'Flat not found'));
        return;
    }

    res.json({
        status: 200,
        message: `Successfully found flat with id ${flatId}!`,
        data: flat,
    });
};

export const createFlatController = async (req, res) => {

    const photo = req.file;

    let photoUrl;

    if (photo) {
        if (env('ENABLE_CLOUDINARY') === 'true') {
            photoUrl = await saveFileToCloudinary(photo);
        } else {
            photoUrl = await saveFileToUploadDir(photo);
        }
    }

    const flatData = { ...req.body, userId: req.user._id, photo: photoUrl };
    const flat = await createFlat(flatData);

    res.status(201).json({
        status: 201,
        message: "Successfully created a flat!",
        data: flat,
    });
};

export const patchFlatController = async (req, res, next) => {
    const { flatId } = req.params;
    const photo = req.file;

    let photoUrl;

    if (photo) {
        if (env('ENABLE_CLOUDINARY') === 'true') {
            photoUrl = await saveFileToCloudinary(photo);
        } else {
            photoUrl = await saveFileToUploadDir(photo);
        }
    }

    const result = await patchFlat(flatId, {
        ...req.body,
        photo: photoUrl,
    });

    if (!result) {
        next(createHttpError(404, 'Flat not found'));
        return;
    }

    res.json({
        status: 200,
        message: "Successfully patched a flat!",
        data: result.flat,
    });
};

export const putFlatController = async (req, res, next) => {
    const { flatId } = req.params;
    const photo = req.file;

    let photoUrl;

    if (photo) {
        if (env('ENABLE_CLOUDINARY') === 'true') {
            photoUrl = await saveFileToCloudinary(photo);
        } else {
            photoUrl = await saveFileToUploadDir(photo);
        }
    }

    const result = await patchFlat(flatId, {
        ...req.body,
        photo: photoUrl,
        upsert: true,
    });

    if (!result) {
        next(createHttpError(404, 'Flat not found'));
        return;
    }

    const status = result.isNew ? 201 : 200;

    res.status(status).json({
        status,
        message: "Successfully upserted a flat!",
        data: result.flat,
    });
};

export const deleteFlatController = async (req, res, next) => {
    const { flatId } = req.params;
    const delFlat = await deleteFlat(flatId);

    if (!delFlat) {
        next(createHttpError(404, 'Flat not found'));
        return;
    }

    res.status(204).send();
};
