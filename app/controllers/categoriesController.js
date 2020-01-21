const Category = require("../models/category");
const Note = require("../models/note");

module.exports.list = (req, res) => {
  Category.find()
    .then((category) => {
      res.json(category);
    })
    .catch((err) => {
      res.json(err);
    });
};

module.exports.show = (req, res) => {
  const id = req.params.id;
  Promise.all([
    Category.findOne({ _id: id, user: req.user._id }),
    Note.find({ category: id })
  ]).then((values) => {
    const [category, notes] = values;
    if (req.user._id) {
      const categoryObj = category.toObject();
      categoryObj.notes = notes;
      res.json({
        ...categoryObj
      });
    } else {
      res.send({});
    }
  });
};

module.exports.create = (req, res) => {
  const body = req.body;
  const category = new Category(body);
  category.user = req.user._id;
  category
    .save()
    .then((category) => {
      res.json(category);
    })
    .catch((err) => {
      res.json(err);
    });
};

module.exports.update = (req, res) => {
  const id = req.params.id;
  const body = req.body;
  Category.findOneAndUpdate({ _id: id, user: req.user._id }, body, {
    new: true,
    runValidators: true
  })
    .then((category) => {
      if (category) {
        res.json(category);
      } else {
        res.json({});
      }
    })
    .catch((err) => {
      res.json(err);
    });
};

module.exports.destroy = (req, res) => {
  const id = req.params.id;
  Category.findOneAndDelete({ _id: id, user: req.user._id })
    .then((category) => {
      if (category) {
        res.json(category);
      } else {
        res.json({});
      }
    })
    .catch((err) => {
      res.json(err);
    });
};
