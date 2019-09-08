/* GET 'home' page */
const homelist = (req, res) => {
    res.render('index', { title: 'Home' });
};
/* GET 'Location info' page */
const locationInfo = (req, res) => {
    res.render('index', { title: 'Location info' });
};
/* GET 'Add review' page */
const homelist = (req, res) => {
    res.render('locations-list', { title: 'Home' });
};
module.exports = {
    homelist,
    locationInfo,
    addReview
};