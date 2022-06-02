function Myarray(){
    Object.defineProperty(this,"length",{
        enumerable:false,
        writable:true
    });
    for(var i =0;i<arguments.length;i++){
        this[i] = arguments[i];
    }
    this.length = arguments.length;
}

// push

Myarray.prototype.push = function(ele){
    var index = this.length;
    this[index] = ele;
    this.length++;
}

//pop

Myarray.prototype.pop = function(){
    var index = this.length-1;
    var poppedele = this[index];
    delete this[index];
    this.length--;
    return poppedele

};

// top 

Myarray.prototype.top = function(){
    var index = this.length-1;
    var top = this[index];
    return top;
};

// print

Myarray.prototype.print = function(){
    var arr = [];
    var length = this.length;
    for(var i =0;i<length;i++){
        arr.push (this[i]);
    }
    console.log(arr);
};

// printReverse;

Myarray.prototype.printReverse = function(){

    var arr = [];
    var length = this.length;
    for(var i = length-1;i>=0;i--){
        arr.push(this[i]);
    }

    console.log(arr);

};


// size

Myarray.prototype.size = function(){
    return this.length
};

var arr = new Myarray(1,2,"vivek","Hello world");

arr.push("masai");
arr.print();
arr.printReverse();
console.log(arr.size());
console.log(arr.pop());
console.log(arr.top());
console.log(arr);