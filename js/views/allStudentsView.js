var schoolApp = schoolApp || {};

schoolApp.allStudentsView = Backbone.View.extend({
	tagName : "section",
	className  : "allStudents",
	render : function  () {
		this.collection.each(this.addStudent,this);
		return this;
	},
	addStudent : function (student) {
		var studentView  = new schoolApp.singleStudentView({model : student});
		this.$el.append(studentView.render().el);
	}
});