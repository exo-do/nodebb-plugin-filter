"use strict";

var User = module.parent.require('./user');
var Topic = module.parent.require('./topics');
var SocketPlugins = module.parent.require('./socket.io/plugins');

var plugin = {};

SocketPlugins.updateRecentsFilters = function(socket, data, callback) {
  // Receive filters over websockets

  var filters = JSON.stringtify(data.filters);

  User.setUserField(socket.uid, "rencentsfilters", filters, function(err, result){
    callback(err, result);
  });
};

SocketPlugins.getRecentsFilters = function (socket, data, callback) {
  // Send filters over websockets

  User.getUserField(socket.uid, "rencentsfilters", callback);
};


module.exports = plugin;
