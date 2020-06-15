

module.exports = {
  getIndex(req, res, next) {
    res.send('INDEX');
  },
  getAbout(req, res, next) {
    res.send('ABOUT');
  }
}