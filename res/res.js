'use strict';

exports.ok = function(values, res) {
  var data = {
      'values': values
  };
  res.json(data);
  res.end();
};