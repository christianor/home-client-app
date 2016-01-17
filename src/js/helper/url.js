var url = {
  getRootUrl: function (url) {
    if (url === undefined)
      url = 'file://' + __dirname;
    return url.substr(0, url.lastIndexOf('/js'));
  }
};

module.exports = url;
