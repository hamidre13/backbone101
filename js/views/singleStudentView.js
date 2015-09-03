var schoolApp = schoolApp || {};

schoolApp.singleStudentView = Backbone.View.extend({
	tagName : "article",
	className : "singleStudent",
	template : _.template($("#singleStudentTemplate").html()),
	render : function  () {
		// This line will tell where to get the data for the view
		var studentTemplate = this.template(this.model.toJSON());
		//This will populate the article element with the model data
		console.log(studentTemplate);
		this.$el.html(studentTemplate);
		return this;
	}
});

