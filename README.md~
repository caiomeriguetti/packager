packager
=========

Easier way to emulate packages with mootools. 

In the following example, two classes are defined to illustrate the use:

````javascript

define_class('mypack.subpack1.subpack2.User',function(){



	this.initialize=function(){

		

	};

	this.sayHi=function(){
		return 'Hi, i am a simple user';
	}



});

define_class('mypack.Admin',function(){

	this.Extends=mypack.subpack1.subpack2.User;

	this.initialize=function(){
		this.parent();
	};

	// override
	this.sayHi=function(){

		return 'Hi, i am admin';

	};


});


var user = new mypack.subpack1.subpack2.User();
var admin = new mypack.Admin();
console.log(user.sayHi());
console.log(admin.sayHi());

````


