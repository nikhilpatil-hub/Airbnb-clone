const express = require("express");
const router = express.Router({ mergeParams: true });
const Booking = require("../models/booking.js");
const Listing = require("../models/listing.js");
const { isLoggedIn } = require("../middleware.js");

router.get("/checkout", isLoggedIn, async (req, res) => {
  const { listingId } = req.params;
  const { checkIn, checkOut } = req.query.booking; 
  
  const listing = await Listing.findById(listingId);

  const dateIn = new Date(checkIn);
  const dateOut = new Date(checkOut);
  
  const timeDiff = Math.abs(dateOut - dateIn);
  const totalNights = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
  
  const totalPrice = listing.price * totalNights;
  
  res.render("bookings/checkout.ejs", { 
      listing, 
      dateIn,       
      dateOut,      
      totalNights,  
      totalPrice 
  });
});

router.post("/", isLoggedIn, async (req, res) => {
  try {
    const { listingId } = req.params;
    const { checkIn, checkOut, name, phone } = req.body.booking;
    
    const listing = await Listing.findById(listingId);
    
    const start = new Date(checkIn);
    const end = new Date(checkOut);
    const dayDiff = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
    const totalPrice = listing.price * dayDiff;

    const newBooking = new Booking({
      listing: listingId,
      user: req.user._id,
      name: name,
      phone: phone,
      checkIn: start,
      checkOut: end,
      totalPrice: totalPrice,
      status: "confirmed" 
    });

    await newBooking.save();

    req.flash("success", "Booking Confirmed! See you soon.");
    res.redirect("/listings"); 

  } catch (e) {
    console.log(e);
    req.flash("error", "Booking failed.");
    res.redirect(`/listings/${req.params.listingId}`);
  }
});

module.exports = router;