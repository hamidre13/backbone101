var schoolApp = schoolApp || {};

schoolApp.studentsCollection = Backbone.Collection.extend ({
	model : schoolApp.singleStudent 
});

schoolApp.studentList = new schoolApp.studentsCollection ();
schoolApp.studentList.add(schoolApp.secondStudnet);
schoolApp.studentList.add(schoolApp.firstStudent);
schoolApp.studentList.add(schoolApp.thirdStudent);

schoolApp.allStudentsView = new schoolApp.allStudentsView({collection:schoolApp.studentList});
$(document).ready(function(){
	console.log("document is ready!!");
	$("#allStudents").html(schoolApp.allStudentsView.render().el);
});
