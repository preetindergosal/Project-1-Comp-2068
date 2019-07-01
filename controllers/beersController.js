const Beer = require('../models/beer');

exports.new = (req, res) => {
  res.render('beers/new', {
    title: 'New Beer Post'
  });
};

exports.index = (req, res) => {
  Beer.find()
    .then(beers => {
      res.render('beers/index', {
        beers: beers,
        title: 'Archive'
      });
    })
    .catch(err => {
      req.flash('error', `ERROR: ${err}`);
      res.redirect('/');
    });
};

exports.show = (req, res) => {
  Beer.findById(req.params.id)
    .then(beer => {
      res.render('beers/show', {
        title: beer.title,
        beer: beer
      });
    })
    .catch(err => {
      req.flash('error', `ERROR: ${err}`);
      res.redirect('/beers');
    });
};

exports.create = (req, res) => {
  console.log("You are here");
  Beer.create(req.body.beer)
    .then(() => {
      req.flash('success', 'Your new beer was added successfully.');
      res.redirect('/beers');
    })
    .catch(err => {
      req.flash('error', `ERROR: ${err}`);
      res.render('beers/new', {
        beer: req.body.beer,
        title: 'New Beer'
      });
    });
};

exports.drafts = (req, res) => {
  Beer.find().drafts()
    .then(drafts => {
      res.render('beers/index', {
        title: 'Drafts',
        beers: drafts
      });
    })
    .catch(err => {
      req.flash('error', `ERROR: ${err}`);
      res.redirect('/beers');
    });
};

exports.published = (req, res) => {
  Beer.find().published()
    .then(published => {
      res.render('beers/index', {
        title: 'Published',
        beers: published
      });
    })
    .catch(err => {
      req.flash('error', `ERROR: ${err}`);
      res.redirect('/beers');
    });
};

exports.edit = (req, res) => {
  Beer.findById(req.params.id)
    .then(beer => {
      res.render('beers/edit', {
        title: `Edit ${beer.title}`,
        beer: beer
      });
    })
    .catch(err => {
      req.flash('error', `ERROR: ${err}`);
      res.redirect('/beers');
    });
};

exports.update = (req, res) => {
  Beer.updateOne({
      _id: req.body.id
    }, req.body.beer, {
      runValidators: true
    })
    .then(() => {
      req.flash('success', 'Your beer was updated successfully.');
      res.redirect('/beers');
    })
    .catch(err => {
      req.flash('error', `ERROR: ${err}`);
      res.render('beers/edit', {
        beer: req.body.beer,
        title: `Edit ${req.body.beer.title}`
      });
    });
};

exports.destroy = (req, res) => {
  Beer.deleteOne({
      _id: req.body.id
    })
    .then(() => {
      req.flash('success', 'Your beer was deleted successfully.');
      res.redirect("/beers");
    })
    .catch(err => {
      req.flash('error', `ERROR: ${err}`);
      res.redirect('/beers');
    });
};