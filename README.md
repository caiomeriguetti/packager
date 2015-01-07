packager
=========


````javascript

easier way to emulate packages with mootools


define_class('mypack.User',function(){
	this.initialize=function(){
		
	};
	this.sayHi=function(){
		return 'Hi, i am a simple user';
	}
});
define_class('mypack.Admin',function(){
	this.Extends=mypack.User;
	this.initialize=function(){
		this.parent();
	};
	// override
	this.sayHi=function(){
		return 'Hi, i am admin';
	};
});

var user = new mypack.User();
var admin = new mypack.Admin();

console.log(user.sayHi());
console.log(admin.sayHi());

````


