console.log('🐱');


class Kitten {
  constructor(obj){
    this._attributes = obj;
  }
  meow(){
    console.log(`${this.get('name')} says 'meow'`)
  }

  get(key){
    return this._attributes[key];
  }

  set(key, new_value){
    this._attributes[key] = new_value;
  }

  save(){
    $.ajax({
      method: 'PUT',
      url: `/kittens/${this.get('_id')}`,
      data: {
        // id: this.get('_id'),
        kitten: this._attributes
      }
    }).then(function(data){
      console.log("success! " , data)
    })
  }

  remove(){
    $.ajax({
      method: 'DELETE',
      url: `/kittens/${this.get('_id')}`
    }).then(data => {
      console.log("DELETED")
    })
  }

  static create(obj){
    // super(obj);
    // let kitten = new Kitten(obj);
    $.post('/kittens', {kitten: obj}, (data) => {
      console.log(data)
    })
  }

  static fetch(){
    $.get('/kittens', (data)=>{
      Kitten._all = data;
      // Kitten._all.forEach(function(kitty){
      //   kitty = {kitten: kitty}
      // })
    })
  }

  static all(){
    return Kitten._all
  }

  static first(){
    var firstKitten = Kitten.all();
    console.log(firstKitten[0])
    // return firstKitten.shift();
  }

  static last(){
    var lastKitten = Kitten.all();
    console.log(lastKitten[lastKitten.length-1]);
  }

}


let cat1 = new Kitten ({
  name: "catwoman",
  _id: "58910f4ace28b48dd49f6b13"
})
