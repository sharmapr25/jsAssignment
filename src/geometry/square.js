class Square{
  constructor(size){
    this.size = size;
  };

  area(){
    return this.size * this.size;
  }
};

module.exports = Square;