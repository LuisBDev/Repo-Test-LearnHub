import User from "../models/user";
import Course from "../models/course";
import queryString from "query-string";
const stripe = require("stripe")(process.env.STRIPE_SECRET);

export const makeInstructor = async (req, res) => {
    try {
        const user = await User.findById(req.user._id).exec();
        const updatedRoles = user.role.filter(role => role !== "Subscriber");
        updatedRoles.push("Instructor");
        user.role = updatedRoles;
        const statusUpdated = await user.save();
        res.json(statusUpdated);
    } catch (err) {
        console.log(err);
    }
};

export const getAccountStatus = async (req, res) => {
    try {
        const user = await User.findById(req.user._id).exec();
        const account = await stripe.accounts.retrieve(user.stripe_account_id);

        if (!account.charges_enabled) {
            return res.status(401).send("No autorizado");
        } else {
            const statusUpdated = await User.findByIdAndUpdate(
                user._id,
                {
                    stripe_seller: account,
                    $addToSet: { role: "Instructor" },
                },
                { new: true }
            )
                .select("-password")
                .exec();
            res.json(statusUpdated);
        }
    } catch (err) {
        console.log(err);
    }
};

export const currentInstructor = async (req, res) => {
    try {
        let user = await User.findById(req.user._id).select("-password").exec();
        if (!user.role.includes("Instructor")) {
            return res.sendStatus(403);
        } else {
            res.json({ ok: true });
        }
    } catch (err) {
        console.log(err);
    }
};

export const instructorCourses = async (req, res) => {
    try {
        const courses = await Course.find({ instructor: req.user._id })
            .sort({ createdAt: -1 })
            .exec();
        res.json(courses);
    } catch (err) {
        console.log(err);
    }
};
