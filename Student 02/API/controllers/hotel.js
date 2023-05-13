import Hotel from "../models/Hotel.js";
import Rooms from "../models/Rooms.js";

//create
export const createHotel = async (req, res, next) => {
    const newHotel = new Hotel(req.body);

    try {
        const saveHotel = await newHotel.save()
        res.status(200).json(saveHotel)
    } catch (err) {
        //res.status(500).json(err)
        next(err)
    }

}



//get
export const getHotel = async (req, res, next) => {
    try {
        const hotel = await Hotel.findById(req.params.id)
        res.status(200).json(hotel)
    } catch (err) {
        //res.status(500).json(err)
        next(err)
    }

};

//get all
export const getAllHotel = async (req, res, next) => {
    const { min, max, rating, ...others } = req.query;
    try {
        console.log(rating)
        if (rating == -1) {
            
            const hotels = await Hotel.find
                ({
                    ...others,
                    CheapestPrice: { $gt: min || 1, $lt: max || 999 },

                }).limit(req.query.limit);
            res.status(200).json(hotels)
        }else {
            const hotels = await Hotel.find
            ({
                ...others,
                CheapestPrice: { $gt: min || 1, $lt: max || 999 },
                rating: rating

            }).limit(req.query.limit);
        res.status(200).json(hotels)
        }
    } catch (err) {
        //res.status(500).json(err)
        next(err)
    }

};

export const countByCity = async (req, res, next) => {
    const cities = req.query.cities.split(",")
    try {
        const list = await Promise.all(cities.map(city => {
            return Hotel.countDocuments({ city: city })
        }))

        res.status(200).json(list)
    } catch (err) {
        //res.status(500).json(err)
        next(err)
    }

}


export const getHotelRooms = async (req, res, next) => {
    try {
        const hotel = await Hotel.findById(req.params.id);
        const list = await Promise.all(
            hotel.rooms.map((room) => {
                return Rooms.findById(room);
            })
        );
        res.status(200).json(list)
    } catch (err) {
        next(err);
    }
};