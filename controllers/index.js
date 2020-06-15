

module.exports = {
  getIndex(req, res, next) {
    res.render('index', { title: 'YumBook | Home' });
  },
  getAbout(req, res, next) {
    res.render('about', { title: 'YumBook | About' });
  }
}