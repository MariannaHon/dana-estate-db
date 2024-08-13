
import { isValidObjectId } from 'mongoose';
import { HttpError } from 'http-errors';

export const isValidId = (req, res, next) => {
    const { flatId } = req.params;
    if (!isValidObjectId(flatId)) {
        throw HttpError(404, 'Not found');
    }

    next();
};
