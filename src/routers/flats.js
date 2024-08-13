

import { Router } from "express";
import { getFlatsController, getFlatByIdController, createFlatController, patchFlatController, putFlatController, deleteFlatController } from "../controllers/flats.js";
import { ctrlWrapper } from "../utils/ctrlWrapper.js";
import { validateBody } from "../middlewares/validateBody.js";
import { createFlatSchema } from '../validation/flats.js';
import { updateFlatSchema } from "../validation/flats.js";
import { isValidId } from "../middlewares/isValidId.js";

import { upload } from "../middlewares/multer.js";


const router = Router();

router.get('/flats', ctrlWrapper(getFlatsController));

router.get('/flats/:flatId', isValidId, ctrlWrapper(getFlatByIdController));

router.post('/flats', upload.single('photo'), validateBody(createFlatSchema), ctrlWrapper(createFlatController));

router.put('/flats/:flatId', upload.single('photo'), isValidId, validateBody(createFlatSchema), ctrlWrapper(putFlatController));

router.patch('/flats/:flatId', upload.single('photo'), isValidId, validateBody(updateFlatSchema), ctrlWrapper(patchFlatController));

router.delete('/flats/:flatId', isValidId, ctrlWrapper(deleteFlatController));


export default router;
