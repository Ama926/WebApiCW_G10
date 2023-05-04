import Hotel from "../models/Hotel.js";
import Rooms from "../models/Rooms.js";

//create
export const createHotel = async (req, res, next)=>{
    const newHotel = new Hotel(req.body);

    try{
        const saveHotel = await newHotel.save()
        res.status(200).json(saveHotel)
    }catch(err){
        //res.status(500).json(err)
        next(err)
    }

}

//update
export const updateHotel = async (req, res, next)=>{
    try{
        const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id, {$set: req.body},{new: true})
        res.status(200).json(updatedHotel)
    }catch(err){
        //res.status(500).json(err)
        next(err)
    }

}

//delete
export const deleteHotel = async (req, res, next)=>{
    try{
        await Hotel.findByIdAndDelete(req.params.id);
        res.status(200).json("Hotel has been deleted")
    }catch(err){
        //res.status(500).json(err)
        next(err)
    }

}

//get
export const getHotel = async (req, res, next)=>{
    try{
        const hotel = await Hotel.findById(req.params.id)
        res.status(200).json(hotel)
    }catch(err){
        //res.status(500).json(err)
        next(err)
    }

};

//get all
//Cheapest Price not working 
export const getAllHotel = async (req, res, next)=>{
    const {min, max, ...others} = req.query;
    try{
        const hotels = await Hotel.find
        ({...others,
            CheapestPrice: { $gt: min || 1, $lt: max || 999},
        }).limit(req.query.limit);
        res.status(200).json(hotels)
    }catch(err){
        //res.status(500).json(err)
        next(err)
    }

};

//get all - git 
// export const getAllHotel = async (req, res, next) => {
//     const { min, max, ...others } = req.query;
//     try {
//       const hotels = await Hotel.find({
//         ...others,
//         cheapestPrice: { $gt: min | 1, $lt: max || 999 },
//       }).limit(req.query.limit);
//       res.status(200).json(hotels);
//     } catch (err) {
//       next(err);
//     }
// };


export const countByCity = async (req, res, next)=>{
    const cities = req.query.cities.split(",")
    try{
        const list = await Promise.all(cities.map(city=>{
            return Hotel.countDocuments({city:city})
        }))
        
        res.status(200).json(list)
    }catch(err){
        //res.status(500).json(err)
        next(err)
    }

}


export const countByType = async (req, res, next)=>{
    
    try{
        const hotelCount = await Hotel.countDocuments({type:"hotel"})
        const apartmentCount = await Hotel.countDocuments({type:"apartment"})
        const resortCount = await Hotel.countDocuments({type:"resort"})
        const villaCount = await Hotel.countDocuments({type:"villa"})
        const cabinCount = await Hotel.countDocuments({type:"cabin"})

        res.status(200).json([
            {type: "hotel", count: hotelCount},
            {type: "apartments", count: apartmentCount},
            {type: "resort", count: resortCount},
            {type: "villas", count: villaCount},
            {type: "cabins", count: cabinCount}
        ])
    }catch(err){
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