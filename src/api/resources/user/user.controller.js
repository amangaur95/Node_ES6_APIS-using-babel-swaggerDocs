import userService from "./user.service";
import User from './user.model';
import jwt from "../../helper/jwt";
export default {
    async signup(req, res) {
        try {
            const {
                value,
                error
            } = userService.validateSignup(req.body);
            if (error)
                return res.status(400).json(error);
            const encryptedPass = userService.encryptPassword(value.password);
            const user = await User.create({
                email: value.email,
                firstName: value.firstName,
                lastName: value.lastName,
                password: encryptedPass
            });
            return res.status(200).json({
                sucess: true
            });
        } catch (err) {
            console.error(err);
            res.status(500).json(err);
        }
    },
    async login(req, res) {
        try {
            const {
                value,
                error
            } = userService.validatelogin(req.body);
            if (error)
                return res.status(400).json(error);
            const user = await User.findOne({
                email: value.email
            });
            if (!user) {
                return res.status(401).json({
                    error: "Invalid email or password"
                });
            }
            const authpassword = userService.comparePassword(value.password, user.password);
            if (!authpassword)
                return res.status(401).json({
                    error: "Invalid email or password"
                });
            const token = jwt.issue({
                _id: user._id
            }, '1d');
            return res.status(200).json({token : token});
        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },
    auth(req,res){
        return  res.json(req.user);
    }
}