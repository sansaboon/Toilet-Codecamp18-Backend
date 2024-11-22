const prisma = require("../config/prisma")

exports.createLandmark = async (req,res,next) =>{
    try {
        //code
        console.log(req.user)
        const landmark = await prisma.landmark.create({
            data: {
                title: req.body.title,
                lat: Number(req.body.lat),
                lng: Number(req.body.lng),
                quality: req.body.quality,
                amenities: req.body.amenities,
                optional: req.body.optional,
                userId: req.user.id
            }
        })
        res.json(landmark)
    } catch (err) {
        //err
        next(err)
    }
}
exports.listLandmark = async (req, res, next) => {
    try {
        console.log(req.user.role);
        
        let landmarks;
        if (req.user.role === 'ADMIN') {   // 'ADMIN', จะดึงข้อมูล landmarks ทั้งหมดจากฐานข้อมูลโดยใช้ prisma.landmark.findMany(). นี่จะดึง landmarks ทุกอันที่มีอยู่ในฐานข้อมูล.
            landmarks = await prisma.landmark.findMany({});
            
            
        } else {
                                           //ถ้าผู้ใช้ไม่ได้เป็น 'ADMIN', จะดึงข้อมูล landmarks ที่เป็นของผู้ใช้นั้นๆ เท่านั้น โดยใช้ where เพื่อกรองข้อมูลจากฐานข้อมูลตาม userId
            landmarks = await prisma.landmark.findMany({
                where: {
                    userId: req.user.id
                }
            });
        }

        res.json(landmarks);
    } catch (err) {
        console.log(err);
        next(err);
    }
};

exports.allLandmark = async (req, res, next) => {
    try {
 
        let landmarks;
        landmarks = await prisma.landmark.findMany();


        res.json(landmarks);
    } catch (err) {
        console.log(err);
        next(err);
    }
};
// exports.listLandmark =async(req,res,next)=>{
//     try {
//         console.log(req.user.user.role)
//         const landmark =await prisma.landmark.findMany()
//         res.json(landmark)
//     } catch (err) {
//         console.log(err)
//         next(err)
//     }
// }

exports.updateLandmark = async (req,res,next) =>{
    try {
        //code
        const {landmarkId} =req.params
        const data  =req.body
        // const{amenities}  =req.body
        console.log(data)
        const landmark = await prisma.landmark.update({
            where:{
                id:Number(landmarkId)
            },
            data:data,
            
            
        }) 


  
        res.json({message: 'Update Success!!'}) 
    } catch (err) {
        //err
        // console.log(err)
        next(err)
    }
}
exports.removeLandmark = async (req,res,next) =>{
    try {
        const {landmarkId} =req.params
        const landmark =await prisma.landmark.delete({
            where:{
                id: Number(landmarkId)
            }
        })
        console.log(landmarkId)
        res.json({message: 'Delete Success!!'}) 
    } catch (err) {
        //err
        console.log(err)
        next(err)
    }
}