var App = Em.Application.create();

App.MyView = Em.View.extend({
  mouseDown: function() {
    window.alert("hello world!");
  }
});

App.ButtonView = Em.View.extend({
    tagName: 'button',
    didInsertElement: function () {
        this.$().button();
    }
});