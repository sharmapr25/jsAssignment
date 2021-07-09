class Rectangle{
  constructor(width, length){
    this.width = width;
    this.length = length;
  };

  area(){
    return this.width * this.length;
  };

  perimeter(){
    return 2 * ( this.width + this.length );
  };

};

module.exports = Rectangle;