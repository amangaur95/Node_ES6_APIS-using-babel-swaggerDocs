import joi from 'joi';
export default {
    async create(req, res) {
        console.log(req.body);
        //  return  res.json({msg:'Todo : Song Created'});
        const schema = joi.object().keys({
            tittle: joi.string().required(),
            url: joi.string().required(),
            rating: joi.number().integer().min(0).max(5).optional(),
        });
const { value, error } = joi.validate(req.body, schema);
        if(error && error.details){
        return res.status(400).json(error);
    }
    return  res.json(value);
    },
};