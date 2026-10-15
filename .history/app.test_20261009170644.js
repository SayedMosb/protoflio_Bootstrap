const {sum} = require('./app');
test('sum - should return 3 + 2 = 5',()=>{
   const result =sum(2,3);
   expect(result).toBe(30);
})