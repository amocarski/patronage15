(function(){
'use strict';

	describe('cup service', function(){
		var CupService;
		
		beforeEach(module('cup'));
		beforeEach(inject(function(_CupService_){
			CupService=_CupService_;
		}));
		
		it('is initially empty', function(){
			expect(CupService.isEmpty()).toEqual(true);
		});

		it('a fillled cup is not empty', function(){
			CupService.fill();
			expect(CupService.isEmpty()).toEqual(false);
		});

		it('filling a full cup causes overflow', function(){
			CupService.fill();
			//expect(CupService.fill).toThrow(new Error('overflow'));
			expect(function() {CupService.fill();}).toThrow(new Error('overflow'));
		});

		it('drinking from a full cup empties it', function(){
			CupService.fill();
			expect(CupService.isEmpty()).toEqual(false);
			CupService.drink();
			expect(CupService.isEmpty()).toEqual(true);
		});

		it('drinking from an empty cup leaver it unchanged', function(){
			CupService.drink();
			expect(CupService.isEmpty()).toEqual(true);
		});
		
	})

})();