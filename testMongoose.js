const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/test', {
  useNewUrlParser: true
});

let cMongoDB = mongoose.connection;

cMongoDB
  .on('error', (err) => console.error(`connection error :`, err))
  .once('open', () => console.log('connection open~'));


let nekoSchema = new mongoose.Schema({
  'name': String,
  'age': Number
}, {
  'collection': 'cat',
  'timestamps': {
    'createdAt': 'creatTime',
    'updatedAt': 'modifyTime'
  }
});

nekoSchema.methods.speak = function () {
  console.log(`${this.name} : 喵喵喵~`);
}

let neko = mongoose.model('miruku', nekoSchema);

let miruku = new neko({
  'name': 'miruku'
});
console.log(`miruku.name`, miruku.name);
miruku.speak();

miruku.save((err, miruku) => {
  console.log(`err`, err);
  miruku.speak();
})