import Reserve from "../models/Reserve.js";


//create
export const createReservation = async (req, res, next) => {
    const newReserve = new Reserve(req.body);

    try {
        const saveReservation = await newReserve.save()
        res.status(200).json(saveReservation)
    } catch (err) {
        //res.status(500).json(err)
        next(err)
    }

}