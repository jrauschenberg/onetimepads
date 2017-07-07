angular.module('MyApp').run(['$templateCache', function($templateCache) {$templateCache.put('partials/404.html','<div class="container text-center">\n  <h1>404</h1>\n  <p>Page Not Found</p>\n</div>');
$templateCache.put('partials/contact.html','<div class="container">\n  <div class="panel">\n    <div class="panel-heading">\n      <h3 class="panel-title">Contact Form</h3>\n    </div>\n    <div class="panel-body">\n      <div ng-if="messages.error" role="alert" class="alert alert-danger">\n        <div ng-repeat="error in messages.error">{{error.msg}}</div>\n      </div>\n      <div ng-if="messages.success" role="alert" class="alert alert-success">\n        <div ng-repeat="success in messages.success">{{success.msg}}</div>\n      </div>\n      <form ng-submit="sendContactForm()" class="form-horizontal">\n        <div class="form-group">\n          <label for="name" class="col-sm-2">Name</label>\n          <div class="col-sm-8">\n            <input type="text" name="name" id="name" class="form-control" ng-model="contact.name" autofocus>\n          </div>\n        </div>\n        <div class="form-group">\n          <label for="email" class="col-sm-2">Email</label>\n          <div class="col-sm-8">\n            <input type="email" name="email" id="email" class="form-control" ng-model="contact.email">\n          </div>\n        </div>\n        <div class="form-group">\n          <label for="message" class="col-sm-2">Body</label>\n          <div class="col-sm-8">\n            <textarea name="message" id="message" rows="7" class="form-control" ng-model="contact.message"></textarea>\n          </div>\n        </div>\n        <div class="form-group">\n          <div class="col-sm-offset-2 col-sm-8">\n            <button type="submit" class="btn btn-success">Send</button>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>');
$templateCache.put('partials/footer.html','<footer>\n  <p>\xA9 2017 <a href="mailto:john.rauschenberg@gmail.com">John Rauschenberg.</a></p>\n</footer>');
$templateCache.put('partials/header.html','<nav ng-controller="HeaderCtrl" class="navbar navbar-default navbar-static-top">\n  <div class="container">\n      <h2 align="center">\n      Encode or Decode One-Time Pad Messages!\n      </h2>\n  </div>\n</nav>\n');
$templateCache.put('partials/home.html','<div class="container-fluid">\n  <div class="row">\n    <div class="col-sm-6">\n      <div class="panel">\n        <div class="panel-body">\n          <h3>Text You\'d Like to Encode or Decode</h3>\n          <p>Type either the encoded message you\'ve received or the uncoded message you\'d like to encode here.</p>\n          <input type="text" class="form-control" placeholder="Enter message here" ng-model="message" id="message" rows="3"></textarea>\n        </div>\n      </div>\n    </div>\n    <div class="col-sm-6">\n      <div class="panel">\n        <div class="panel-body">\n          <h3>Key From Your One-Time Pad</h3>\n          <p>Type the key you\'ll find on your one-time pad below.</p>\n          <input type="text" class="form-control" placeholder="Enter key here" ng-model="key" id="key" rows="3"></textarea>\n        </div>\n      </div>\n    </div>\n  </div>\n  <p align="center">\n  <a class="btn btn-primary" ng-click="encodeDecode(message, key, \'code\')" role="button">Encode</a>\n  <a class="btn btn-primary" ng-click="encodeDecode(message, key, \'decode\')" role="button">Decode</a>\n  <h3 align="center">Your Encoded or Decoded Message Is:</h3>\n  <h4 align="center">{{translation}}</h4>\n\n</div>\n<datalist id="json-datalist"></datalist>');}]);