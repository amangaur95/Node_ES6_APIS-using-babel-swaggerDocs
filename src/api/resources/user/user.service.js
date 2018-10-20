import joi from 'joi';
import bcrypt from 'bcryptjs';
export default{
    encryptPassword(plainPass){
        const salt = bcrypt.genSaltSync(10);
        return bcrypt.hashSync(plainPass,salt);
    },
validateSignup(body){
const schema = joi.object().keys({
    firstName : joi.string().required(),
    lastName: joi.string().required(),
    email: joi.string().email().required(),
    password: joi.string().required()
});
const {value , error} = joi.validate(body, schema);
if(error && error.details)
return {error}
return {value}
}
}