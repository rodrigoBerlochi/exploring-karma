require('should');

describe('main test', function () {
	
	it('should be true', function () {
		
		var z = true;
		
		z.should.be.True();
		
	});
	
	it('should be false', function () {
		
		var z = false;
		
		z.should.be.False();
		
	});	
	
	it('should have a window object because it runs on the browser', function () {
		window.should.not.be.undefined();
	});
});