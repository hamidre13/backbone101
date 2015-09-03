var schoolApp = schoolApp || {};


// This will be base student class that we have to instansiate from
schoolApp.singleStudent = Backbone.Model.extend({
	defaults : {
		name : "Kevin",
		age  : "19",
		gpa  : "2.0"
	},
	initialize : function () {
		//console.log("A new student initialized. student name is" + this.get("name"));
		this.on("change",function (){
			//console.log("One of the student properties is changes." + this.get("name"));
		}); 
	}

});

schoolApp.firstStudent  = new schoolApp.singleStudent();
schoolApp.firstStudent.set({
	name : "Jhon",
	age  : "23",
	gpa  : "4.0"
});
schoolApp.secondStudnet  = new schoolApp.singleStudent({
	name : "Edward",
	age  : "20",
	gpa  : "3.0"
});

schoolApp.thirdStudnet  = new schoolApp.singleStudent({
	name : "Nick",
	age  : "50",
	gpa  : "3.3"
});

//console.log(schoolApp.firstStudent.toJSON());
//console.log(schoolApp.secondStudnet.toJSON());