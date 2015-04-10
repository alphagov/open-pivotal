export default Backbone.View.extend({
  tagName: "div",
  className: "well",
  template: App.templates.card,
  events: {
    "click .open": "open"
  },
  initialize: function(card, apiKey, project) {
    this.card = card;
    this.apiKey = apiKey;
    this.project = project;
    this.render();
  },
  render: function() {
    this.$el.html(this.template(this.card));
    return this;
  },
  open: function () {
    App.router.navigate(`/${this.apiKey}/${this.project}/cards/${this.card.id}`, {trigger: true});
  }
});

