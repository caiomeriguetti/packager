var PACKAGER_ROOT=this;

function pack(packstr){
	
	if(packstr=='') return PACKAGER_ROOT;
	
	var list = packstr.split('.');
	
	var current = PACKAGER_ROOT;
	var packname=null;
	for(var i=0;i<list.length;i++){
		packname=list[i];

		if( current[packname] == undefined ){
			current[packname]={};
		}
		
		current = current[packname];
	}
	
	return current;
	
}

function define_class(classname,definition){
	var list = classname.split('.');
	var classname = list.pop();

	pack(list.join('.'))[classname]=new Class(new definition());
}
