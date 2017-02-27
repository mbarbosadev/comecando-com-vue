var app = new Vue({
	el: '#app',
	data: {
		books: [],
		mySearch: ''
	},
	methods: {
	},
	ready: function() {

		var self = this;

		self.$http.get('dataServer.json').then(function(response) {
			// console.log(response);

			self.books = response.data;
		});

	}
});