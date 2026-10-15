const {sum} = require('./app');
test('sum - should return 3 + 2 = 5',()=>{
   const result =sum(10,20);
   expect(result)
})