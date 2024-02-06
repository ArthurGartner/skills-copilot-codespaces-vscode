function skillsMember() {
  return {
    name: 'skillsMember',
    description: 'This is a member skill',
    version: '0.0.1',
    init: function (app) {
      app.get('/member', function (req, res) {
        res.send('This is a member skill');
      });
    }
  };
}
