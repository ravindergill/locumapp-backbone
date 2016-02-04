/**
 * 
 */

var serviceURL = 'http://localhost:8081/locumservice'

var Grades = Backbone.Collection.extend({

	url : serviceURL + "/grades",

	parse : function(response) {
		console.log(JSON.stringify(response));
		for (var i = 0; i < response.length; i++) {
			this.push({
				grade : response[i]
			});
		}
		return this.models;
	},

});

var Specialties = Backbone.Collection.extend({

	url : serviceURL + '/specialties',

	parse : function(response) {
		console.log(JSON.stringify(response));
		for (var i = 0; i < response.length; i++) {
			this.push({
				specialty : response[i]
			});
		}
		return this.models;
	},

});

var grades = new Grades();

var specialties = new Specialties();

grades.fetch({
	success : function(models) {
		models.each(function(model) {
			$('#grades').append('<p>' + model.get("grade") + '</p>');
		})
	}
});

specialties.fetch({
	success : function(models) {
		models.each(function(model) {
			$('#specialties').append('<p>' + model.get("specialty") + '</p>');
		})
	}
});
