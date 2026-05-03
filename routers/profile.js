const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const User = require("../models/user.js");


const Listing = require("../models/listing.js");
const Booking = require("../models/booking.js");

const { isLoggedIn, isOwner, isOwnerAll } = require("../middleware.js");
const profileController = require("../controllers/profiles.js");

router.get("/", isLoggedIn, (req, res) => {
  res.render("users/profile.ejs", { user: req.user });
});

router.get("/listings", isLoggedIn, wrapAsync(async (req, res) => {
  const listings = await Listing.find({ owner: req.user._id });
  res.render("users/myListings.ejs", { listings });
}));

router.get("/trips", isLoggedIn, wrapAsync(async (req, res) => {
  const bookings = await Booking.find({ user: req.user._id })
    .populate("listing")
    .sort({ createdAt: -1 });
    const validBookings = bookings.filter(booking => booking.listing !== null);
    res.render("users/trips.ejs", { bookings: validBookings });
}));

router.get("/edit", isLoggedIn, (req, res) => {
  res.render("users/editProfile.ejs", { user: req.user });
});

router.put("/", isLoggedIn, wrapAsync(async (req, res) => {
  const { fName, lName, email } = req.body.user;

  await User.findByIdAndUpdate(req.user._id, { fName, lName, email });

  req.flash("success", "Profile updated successfully!");
  res.redirect("/profile");
}));

router.delete("/all-listings-delete/:id", isLoggedIn, isOwnerAll, wrapAsync(profileController.allListingDestroy));
router.delete("/listing/:id", isLoggedIn, isOwner, wrapAsync(profileController.profileDestroyListing));

router.delete("/trips/:id", isLoggedIn, wrapAsync(async (req, res) => {
  await Booking.findByIdAndDelete(req.params.id);
  
  req.flash("success", "Trip cancelled successfully!");
  res.redirect("/profile/trips");
}));

module.exports = router;