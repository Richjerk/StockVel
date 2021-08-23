var StockVel = require('../src/StockVel.js');

describe('Algorithm', function() {
  describe('#apply()', function() {
    it('should result in a hello message', function(done) {
      StockVel.apply("Jane", function(err, res) {
        if(err) { return done(err); }

        if(res == "Hello Jane") {
          done();
        } else {
          done("Expected 'Hello Jane'. Receieved '" + res + "'.");
        }
      });
    });
  });
});
