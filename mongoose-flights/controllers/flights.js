const Flight = require('../models/flight');

module.exports = {
    index,
    create,
    new: newFlight,
    show
};

function newFlight(req, res) {
    res.render('flights/new', { errorMsg: '' })
}

async function create(req, res) {
    try {
        await Flight.create(req.body);
        res.redirect('/flights');
    } catch (err) {
        console.log(err);
        res.render('flights/new', { errorMsg: err.message });
    }
}

async function index(req, res) {
    const allFlights = await Flight.find({})
    console.log(allFlights)
    res.render('flights/index', { flights: allFlights })
}

async function show(req, res) {
    const flight = await Flight.findById(req.params.id);
    res.render('flights/show', { title: 'Flight Details', flight });
  }