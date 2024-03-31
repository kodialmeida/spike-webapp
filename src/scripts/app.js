var spike;
!function (spike) {
  "use strict";

  function initDebug($compileProvider) {
    $compileProvider.debugInfoEnabled(!0)
  }

  function initRouter($stateProvider, $urlRouterProvider) {
    $stateProvider.state("login", {
      url: "/login",
      controller: "LoginController",
      controllerAs: "login",
      templateUrl: "/app/login/login.view.html",
      data: {authenticate: !1}
    }).state("resetPassword", {
      url: "/resetPassword?redirect&token/",
      controller: "ResetPasswordController",
      controllerAs: "vm",
      templateUrl: "/app/user/reset-password.view.html",
      data: {authenticate: !1}
    }).state("admin", {
      url: "/admin",
      controller: "AdminController",
      controllerAs: "admin",
      templateUrl: "/app/admin/admin.view.html",
      data: {authenticate: !0, role: "Admin"}
    }), $urlRouterProvider.otherwise("/login")
  }

  function initAuth($httpProvider) {
    $httpProvider.interceptors.push("authInterceptor")
  }

  function run($rootScope, $state, session) {
    $rootScope.$on("$stateChangeStart", function (event, toState, toParams, fromState, fromParams) {
      (toState.data.authenticate && !session.user.isAuth || "Admin" === toState.data.role && !session.user.isAdmin) && ($state.transitionTo("login"), event.preventDefault())
    })
  }

  angular.module("templates", []), angular.module("spikeAuth", ["ui.router", "LocalStorageModule", "angular-loading-bar", "jqwidgets", "ngMessages", "templates"]).config(initDebug).config(initRouter).config(initAuth).run(run), initDebug.$inject = ["$compileProvider"], initRouter.$inject = ["$stateProvider", "$urlRouterProvider"], initAuth.$inject = ["$httpProvider"], run.$inject = ["$rootScope", "$state", "session"]
}(spike || (spike = {}));
var spike;
!function (spike) {
  "use strict";
  var AppController = function () {
    function AppController($scope, $state, authService, session) {
      this.$scope = $scope, this.$state = $state, this.authService = authService, this.session = session, this.user = null, this.user = session.user
    }

    return AppController.prototype.logout = function () {
      this.authService.logout(), this.$state.go("login")
    }, AppController.$inject = ["$scope", "$state", "authService", "session"], AppController
  }();
  angular.module("spikeAuth").controller("AppController", AppController)
}(spike || (spike = {})), angular.module("templates").run(["$templateCache", function ($templateCache) {
  $templateCache.put("app/admin/users/add-user.partial.html", '<div class="tab" ng-controller="AddUserController as vm"><form class="form" name="vm.form" novalidate autocomplete="off"><table><tr><td><label>Role:</label></td><td><select name="role" ng-model="vm.role" ng-options="role as role for role in vm.roles" ng-required="true"></select></td><td><div class="error" ng-messages="vm.form.role.$error"><div class="error-message" ng-message="required">Required....</div></div></td></tr><tr><td><label>FirstName:</label></td><td><input type="text" name="firstName" ng-model="vm.firstName" ng-required="true" spellcheck="false"></td><td><div class="error" ng-messages="vm.form.firstName.$error"><div class="error-message" ng-message="required">Required....</div></div></td></tr><tr><td><label>LastName:</label></td><td><input type="text" name="lastName" ng-model="vm.lastName" ng-required="true" spellcheck="false"></td><td><div class="error" ng-messages="vm.form.lastName.$error"><div class="error-message" ng-message="required">Required....</div></div></td></tr><tr><td><label>Company:</label></td><td><input type="text" name="company" ng-model="vm.company" ng-required="true" spellcheck="false"></td><td><div class="error" ng-messages="vm.form.company.$error"><div class="error-message" ng-message="required">Required....</div></div></td></tr><tr><td><label>Email:</label></td><td><input type="email" name="email" ng-model="vm.email" ng-required="true" spellcheck="false"></td><td><div class="error" ng-messages="vm.form.email.$error"><div class="error-message" ng-message="required">Required....</div><div class="error-message" ng-message="pattern">Invalid....</div></div></td></tr><tr><td><label>UserName:</label></td><td><input type="text" name="userName" ng-model="vm.userName" ng-required="true" spellcheck="false"></td><td><div class="error" ng-messages="vm.form.userName.$error"><div class="error-message" ng-message="required">Required....</div></div></td></tr><tr><td><label>Password:</label></td><td><input type="text" name="password" ng-model="vm.password" ng-required="true" password spellcheck="false"></td><td><div class="error" ng-messages="vm.form.password.$error"><div class="error-message" ng-message="required">Required....</div><div class="error-message" ng-message="password">{{vm.messages.password}}</div></div></td></tr><tr><td><label>Confirm Password:</label></td><td><input type="text" name="confirmPassword" ng-model="vm.confirmPassword" ng-required="true" match="password" spellcheck="false"></td><td><div class="error" ng-messages="vm.form.confirmPassword.$error"><div class="error-message" ng-message="required">Required....</div><div class="error-message" ng-message="match">Passwords must match....</div></div></td></tr><tr><td><label>Domain:</label></td><td><input type="text" name="domain" ng-model="vm.domain" ng-required="vm.role!==\'Admin\'" ng-disabled="vm.role===\'Admin\'" spellcheck="false"></td><td><div class="error" ng-messages="vm.form.domain.$error"><div class="error-message" ng-message="required">Required....</div></div></td></tr><tr><td><label>Timeout:</label></td><td><input type="date" name="timeout" ng-model="vm.timeout" ng-required="vm.role!==\'Admin\'" ng-disabled="vm.role===\'Admin\'"></td><td><div class="error" ng-messages="vm.form.timeout.$error"><div class="error-message" ng-message="required">Required....</div></div></td></tr><tr><td colspan="2" style="text-align: center"><button class="form-submit-btn btn btn-success" ng-disabled="!vm.form.$valid" ng-click="vm.add()">Add</button></td></tr></table></form></div>'), $templateCache.put("app/admin/users/list-user-activity.partial.html", '<div class="tab" ng-controller="ListUserActivityController as vm"><form class="form" name="vm.form" novalidate autocomplete="off"><table><tr><td><label>User:</label></td><td><select name="user" ng-model="vm.user" ng-options="user as user.userName + \' (\' + user.name + \')\' for user in admin.users | orderBy:\'userName\'"></select></td><td><div class="error" ng-messages="vm.form.user.$error"><div class="error-message" ng-message="required">Required....</div></div></td></tr><tr><td colspan="2" style="text-align: center"><button class="form-submit-btn btn btn-success" ng-disabled="!vm.form.$valid" ng-click="vm.getActivity(vm.user)">List</button></td></tr></table></form><div class="table-container"><table class="activity-table table table-striped"><thead><tr><th style="width:10%">Record</th><th style="width:45%">Timestamp</th><th style="width:45%">Domain</th></tr></thead><tbody><tr ng-repeat="record in vm.activity"><td style="width:10%">{{$index + 1}}</td><td style="width:45%">{{record.timestamp | date:\'MM/dd/yyyy @ h:mma\' }}</td><td style="width:45%">{{record.domain}}</td></tr></tbody></table></div></div>'), $templateCache.put("app/admin/users/list-users.partial.html", '<div class="tab" ng-controller="ListUsersController as vm"><div class="user-container"><div class="user-search"><label>Search</label><input type="text" name="searchText" ng-model="vm.searchText" spellcheck="false"></div><div class="user-list"><ul><li class="user" ng-repeat="user in admin.users | orderBy:\'dateAdded\' | filter:vm.searchText" ng-click="vm.select(user, $index)" ng-class="{\'selected-user\': $index===vm.index}">{{user.name}}</li></ul></div></div><div class="user-details"><table><tr><td><label>Name:</label></td><td><input type="text" name="name" ng-model="vm.user.name" spellcheck="false" ng-readonly="true"></td></tr><tr><td><label>Company:</label></td><td><input type="text" name="company" ng-model="vm.user.company" spellcheck="false" ng-readonly="true"></td></tr><tr><td><label>Email:</label></td><td><input type="text" name="email" ng-model="vm.user.email" spellcheck="false" ng-readonly="true"></td></tr><tr><td><label>UserName:</label></td><td><input type="text" name="userName" ng-model="vm.user.userName" spellcheck="false" ng-readonly="true"></td></tr><tr><td><label>Role:</label></td><td><input type="text" name="role" ng-model="vm.user.role" spellcheck="false" ng-readonly="true"></td></tr><tr><td><label>Domain:</label></td><td><input type="text" name="domain" ng-model="vm.user.domain" spellcheck="false" ng-readonly="true"></td></tr><tr><td><label>Timeout:</label></td><td><input type="date" name="timeout" ng-model="vm.user.timeout" ng-readonly="true"></td></tr><tr><td><label>Date Added:</label></td><td><input type="date" name="dateAdded" ng-model="vm.user.dateAdded" ng-readonly="true"></td></tr><tr><td><label>Last Login:</label></td><td><input type="datetime-local" name="name" ng-model="vm.user.lastLogin" ng-readonly="true"></td></tr></table></div></div>'), $templateCache.put("app/admin/users/remove-user.partial.html", '<div class="tab" ng-controller="RemoveUserController as vm"><form class="form" name="vm.form" novalidate autocomplete="off"><table><tr><td><label>User:</label></td><td><select name="user" ng-model="vm.user" ng-options="user as user.userName + \' (\' + user.name + \')\' for user in admin.users | orderBy:\'userName\'"></select></td><td><div class="error" ng-messages="vm.form.user.$error"><div class="error-message" ng-message="required">Required....</div></div></td></tr><tr><td colspan="2" style="text-align: center"><button class="form-submit-btn btn btn-success" ng-disabled="!vm.form.$valid" ng-click="vm.remove(vm.user)">Remove</button></td></tr></table></form></div>'), $templateCache.put("app/admin/users/update-user.partial.html", '<div class="tab" ng-controller="UpdateUserController as vm"><form class="form" name="vm.form1" novalidate autocomplete="off"><table><tr><td><label>User:</label></td><td><select ng-model="vm.user" ng-options="user as user.userName + \' (\' + user.name + \')\' for user in admin.users | orderBy:\'userName\'" ng-change="vm.userSelected(vm.user)"></select></td><td></td></tr></table></form><form class="form" name="vm.form2" novalidate autocomplete="off"><h5>Update Password</h5><table style="margin-top:10px"><tr><td><label>Password:</label></td><td><input type="text" name="password" ng-model="vm.password" ng-required="true" password spellcheck="false" ng-disabled="!vm.user"></td><td><div class="error" ng-messages="vm.form2.password.$error"><div class="error-message" ng-message="required">Required....</div><div class="error-message" ng-message="password">{{vm.messages.password}}</div></div></td></tr><tr><td><label>Confirm Password:</label></td><td><input type="text" name="confirmPassword" ng-model="vm.confirmPassword" ng-required="true" match="password" spellcheck="false" ng-disabled="!vm.user"></td><td><div class="error" ng-messages="vm.form2.confirmPassword.$error"><div class="error-message" ng-message="required">Required....</div><div class="error-message" ng-message="match">Passwords must match....</div></div></td></tr><tr><td colspan="2" style="text-align: center"><button class="form-submit-btn btn btn-success" ng-disabled="!vm.user || !vm.form2.$valid" ng-click="vm.updatePassword(vm.user, vm.password, vm.confirmPassword)">Update</button></td></tr></table></form><form class="form" name="vm.form3" novalidate autocomplete="off"><h5>Update Domain</h5><table style="margin-top:10px"><tr><td><label>Domain:</label></td><td><input type="text" name="domain" ng-model="vm.domain" ng-required="true" spellcheck="false" ng-disabled="!vm.user||vm.user.role===\'Admin\'"></td><td><div class="error" ng-messages="vm.form3.domain.$error"><div class="error-message" ng-message="required">Required....</div></div></td></tr><tr><td colspan="2" style="text-align: center"><button class="form-submit-btn btn btn-success" ng-disabled="!vm.user || !vm.form3.$valid" ng-click="vm.updateDomain(vm.user, vm.domain)">Update</button></td></tr></table></form><form class="form" name="vm.form4" novalidate autocomplete="off"><h5>Update Timeout</h5><table style="margin-top:10px"><tr><td><label>Timeout:</label></td><td><input type="date" name="timeout" ng-model="vm.timeout" ng-required="true" ng-disabled="!vm.user||vm.user.role===\'Admin\'"></td><td><div class="error" ng-messages="vm.form4.timeout.$error"><div class="error-message" ng-message="required">Required....</div></div></td></tr><tr><td colspan="2" style="text-align: center"><button class="form-submit-btn btn btn-success" ng-disabled="!vm.user || !vm.form4.$valid" ng-click="vm.updateTimeout(vm.user, vm.timeout)">Update</button></td></tr></table></form></div>')
}]), angular.module("templates").run(["$templateCache", function ($templateCache) {
  $templateCache.put("app/admin/admin.view.html", '<jqx-notification jqx-settings="admin.settings.notification" jqx-instance="admin.ntf.success" jqx-template="success"><div id="ntfSuccess"></div></jqx-notification><jqx-notification jqx-settings="admin.settings.notification" jqx-instance="admin.ntf.error" jqx-template="error"><div id="ntfError"></div></jqx-notification><div class="nav-bar" ng-class="{menu:vm.user.isAuth}"><ul><li><a ng-click="vm.logout()">Logout</a></li></ul></div><div class="body-table admin"><div class="body-cell body-cell-admin"><div class="body-content"><h3>Application Users</h3><jqx-tabs jqx-settings="admin.settings.tabs" jqx-instance="admin.tabs" jqx-on-created="admin.created(admin.tabs)"><ul><li>List</li><li>Add</li><li>Remove</li><li>Update</li><li>Activity</li></ul><div list-users></div><div add-user></div><div remove-user></div><div update-user></div><div list-user-activity></div></jqx-tabs></div></div></div>'), $templateCache.put("app/login/login.view.html", '<div class="body-table"><div class="body-cell body-cell-login"><div class="body-form-content"><img src="images/hal-logo.png" style="width:100%;height:100%;margin-bottom:100px"><form name="login.form" novalidate autocomplete="off"><jqx-input jqx-settings="login.settings.input" name="name" placeholder="Username" ng-model="login.name" ng-required="true" autofocus ng-change="login.onChange()"></jqx-input><div class="error" ng-messages="login.form.name.$error"><div ng-message="required">Required....</div></div><jqx-password-input jqx-settings="login.settings.pass" name="pass" placeholder="Password" ng-model="login.pass" ng-required="true" ng-change="login.onChange()"></jqx-password-input><div class="error" ng-messages="login.form.pass.$error"><div ng-message="required">Required....</div></div><jqx-button style="height:24px" class="form-submit-btn" jqx-settings="login.settings.btn" ng-disabled="!login.form.$valid" ng-click="login.login(login.name, login.pass)">Sign In</jqx-button><div class="form-response form-invalid-response" ng-hide="login.message == \'\'">{{login.message}}</div></form></div></div></div>'), $templateCache.put("app/user/reset-password.view.html", '<div class="body-table"><div class="body-cell body-cell-login"><div class="body-form-content"><img src="images/hal-logo.png" style="width:100%;height:100%;margin-bottom:100px"><form name="vm.form" novalidate autocomplete="off"><jqx-input jqx-settings="vm.settings.input" name="email" placeholder="Email" ng-model="vm.email" ng-required="true" autofocus ng-change="vm.onChange()" spellcheck="false"></jqx-input><div class="error" ng-messages="vm.form.email.$error"><div ng-message="required">Required....</div></div><jqx-password-input jqx-settings="vm.settings.pass" name="password" placeholder="Password" ng-model="vm.password" ng-required="true" valid-password="vm" ng-change="vm.onChange()"></jqx-password-input><div class="error" ng-messages="vm.form.password.$error"><div ng-message="required">Required....</div><div ng-message="validPassword">{{vm.passwordMessage}}</div></div><jqx-password-input jqx-settings="vm.settings.pass" name="confirmPassword" placeholder="Confirm Password" ng-model="vm.confirmPassword" ng-required="true" match="password" ng-change="vm.onChange()"></jqx-password-input><div class="error" ng-messages="vm.form.confirmPassword.$error"><div ng-message="required">Required....</div><div ng-message="match">Passwords must match....</div></div><jqx-button class="form-submit-btn" jqx-settings="vm.settings.btn" ng-disabled="!vm.form.$valid" ng-click="vm.reset(vm.email, vm.password, vm.confirmPassword)">Reset</jqx-button><div class="form-response form-invalid-response" ng-hide="vm.message == \'\'">{{vm.message}}</div></form></div></div></div>')
}]);
var spike;
!function (spike) {
  var admin;
  !function (admin) {
    "use strict";
    var AdminController = function () {
      function AdminController($scope, adminService, $http) {
        var _this = this;
        this.$scope = $scope, this.adminService = adminService, this.$http = $http, this.settings = {
          tabs: {
            theme: "arctic",
            width: "100%",
            height: "98%"
          },
          grid: {theme: "arctic", sortable: !1, width: "100%", height: "100%", altrows: !0},
          input: {theme: "arctic", width: 300, height: "1.7em"},
          dateTime: {theme: "arctic", width: 300, height: "25"},
          pass: {theme: "arctic", width: 300, height: "1.7em", showPasswordIcon: !1},
          btn: {theme: "arctic", width: 120, height: "1.7em", template: "success"},
          dropdown: {theme: "arctic", width: 300, height: "25"},
          notification: {
            theme: "artic",
            width: "auto",
            position: "top-right",
            opacity: .9,
            autoOpen: !1,
            autoClose: !0
          }
        }, this.columns = [{
          text: "Name",
          datafield: "name",
          align: "center",
          cellsrenderer: this.cellsrenderer,
          width: "170"
        }, {
          text: "Company",
          datafield: "company",
          align: "center",
          cellsrenderer: this.cellsrenderer,
          width: "170"
        }, {
          text: "Email",
          datafield: "email",
          align: "center",
          cellsrenderer: this.cellsrenderer,
          width: "240"
        }, {
          text: "UserName",
          datafield: "userName",
          align: "center",
          cellsrenderer: this.cellsrenderer,
          width: "125"
        }, {
          text: "Role",
          datafield: "role",
          align: "center",
          cellsrenderer: this.cellsrenderer,
          width: "125"
        }, {
          text: "Domain",
          datafield: "domain",
          align: "center",
          cellsrenderer: this.cellsrenderer,
          width: "240"
        }, {
          text: "Timeout",
          datafield: "timeout",
          align: "center",
          cellsrenderer: this.cellsrenderer,
          width: "240"
        }, {
          text: "Date Added",
          datafield: "dateAdded",
          align: "center",
          cellsrenderer: this.cellsrenderer,
          width: "240"
        }, {
          text: "Last Login",
          datafield: "lastLogin",
          align: "center",
          cellsrenderer: this.cellsrenderer,
          width: "240"
        }], this.$success = $("#ntfSuccess"), this.$error = $("#ntfError"), this.ntf = {
          success: null,
          error: null
        }, this.tabs = null, this.listUsers = function () {
          _this.adminService.get().then(function (users) {
            _this.users = users
          })["catch"](function (err) {
            return console.log("Error getting users " + err)
          })
        }, this.created = function () {
          _this.$scope.admin.tabs.refresh()
        }, this.displaySuccessNotification = function (event, message) {
          _this.$success.html(message), _this.ntf.success.open()
        }, this.displayErrorNotification = function (event, errors) {
          _this.$error.html("ERROR: " + errors[0]), _this.ntf.error.open()
        }, this.$scope.$on("notify-success", this.displaySuccessNotification), this.$scope.$on("notify-error", this.displayErrorNotification), this.listUsers()
      }

      return AdminController.prototype.cellsrenderer = function (row, columnfield, value, defaulthtml, columnproperties) {
        return '<span style="margin:4px;display:block;text-align:center;">' + value + "</span>"
      }, AdminController.$inject = ["$scope", "adminService", "$http"], AdminController
    }();
    angular.module("spikeAuth").controller("AdminController", AdminController)
  }(admin = spike.admin || (spike.admin = {}))
}(spike || (spike = {}));
var spike;
!function (spike) {
  var auth;
  !function (auth) {
    "use strict";
    var AuthService = function () {
      function AuthService($http, $q, localStorageService, session) {
        this.$http = $http, this.$q = $q, this.localStorageService = localStorageService, this.session = session
      }

      return AuthService.prototype.login = function (name, pass) {
        var _this = this, deferred = this.$q.defer(),
          data = "grant_type=password&username=" + name + "&password=" + pass;
        return this.$http.post("/token", data, {headers: {"Content-Type": "application/x-www-form-urlencoded"}}).success(function (response) {
          _this.localStorageService.set("authorizationData", {
            token: response.access_token,
            userName: name
          }), _this.session.user.isAuth = !0, _this.session.user.userName = name, _this.session.user.isAdmin = "Admin" === response[spike.auth.Claims.Role], deferred.resolve(_this.session.user)
        }).error(function (error, status) {
          _this.logout(), deferred.reject(error)
        }), deferred.promise
      }, AuthService.prototype.resetPassword = function (token, email, password, confirmPassword) {
        var deferred = this.$q.defer(),
          data = "email=" + email + "&password=" + password + "&confirmPassword=" + confirmPassword + "&token=" + token;
        return this.$http.post("/api/user/resetPassword", data, {headers: {"Content-Type": "application/x-www-form-urlencoded"}}).success(function (response) {
          deferred.resolve()
        }).error(function (error, status) {
          deferred.reject(error)
        }), deferred.promise
      }, AuthService.prototype.logout = function () {
        this.localStorageService.remove("authorizationData"), this.session.user.isAuth = !1, this.session.user.userName = "", this.session.user.isAdmin = !1
      }, AuthService.prototype.getClaimValue = function (user, claim) {
        for (var count = user.claims.length; count--;) if (user.claims[count].claimType === claim) return user.claims[count].claimValue
      }, AuthService.$inject = ["$http", "$q", "localStorageService", "session"], AuthService
    }();
    angular.module("spikeAuth").service("authService", AuthService)
  }(auth = spike.auth || (spike.auth = {}))
}(spike || (spike = {}));
var spike;
!function (spike) {
  var auth;
  !function (auth) {
    "use strict";
    var AuthInterceptor = function () {
      function AuthInterceptor($q, $injector, localStorageService) {
        this.$q = $q, this.$injector = $injector, this.localStorageService = localStorageService
      }

      return AuthInterceptor.Factory = function ($q, $injector, localStorageService) {
        return AuthInterceptor._instance = new AuthInterceptor($q, $injector, localStorageService), AuthInterceptor._instance
      }, AuthInterceptor.prototype.request = function (config) {
        config.headers = config.headers || {};
        var authData = AuthInterceptor._instance.localStorageService.get("authorizationData");
        return authData && (config.headers.Authorization = "Bearer " + authData.token), config
      }, AuthInterceptor.prototype.responseError = function (rejection) {
        if (401 === rejection.status) {
          var $state = AuthInterceptor._instance.$injector.get("$state");
          $state.go("login")
        }
        return AuthInterceptor._instance.$q.reject(rejection)
      }, AuthInterceptor.$inject = ["$q", "$injector", "localStorageService"], AuthInterceptor
    }();
    angular.module("spikeAuth").factory("authInterceptor", AuthInterceptor.Factory)
  }(auth = spike.auth || (spike.auth = {}))
}(spike || (spike = {}));
var spike;
!function (spike) {
  var auth;
  !function (auth) {
    "use strict";
    !function (Claims) {
      Claims[Claims.Anonymous = "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/anonymous"] = "Anonymous", Claims[Claims.Email = "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress"] = "Email", Claims[Claims.Expiration = "http://schemas.microsoft.com/ws/2008/06/identity/claims/expiration"] = "Expiration", Claims[Claims.Expired = "http://schemas.microsoft.com/ws/2008/06/identity/claims/expired"] = "Expired", Claims[Claims.Gender = "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/gender"] = "Gender", Claims[Claims.GivenName = "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/givenname"] = "GivenName", Claims[Claims.MobilePhone = "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/mobilephone"] = "MobilePhone", Claims[Claims.Name = "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"] = "Name", Claims[Claims.NameIdentifier = "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"] = "NameIdentifier", Claims[Claims.Role = "http://schemas.microsoft.com/ws/2008/06/identity/claims/role"] = "Role", Claims[Claims.Surname = "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/surname"] = "Surname", Claims[Claims.UserData = "http://schemas.microsoft.com/ws/2008/06/identity/claims/userdata"] = "UserData"
    }(auth.Claims || (auth.Claims = {}));
    auth.Claims
  }(auth = spike.auth || (spike.auth = {}))
}(spike || (spike = {}));
var spike;
!function (spike) {
  var auth;
  !function (auth) {
    "use strict";
    var session = {user: {firstName: null, surName: null, userName: null, isAuth: !1, isAdmin: !1}};
    angular.module("spikeAuth").value("session", session)
  }(auth = spike.auth || (spike.auth = {}))
}(spike || (spike = {}));
var spike;
!function (spike) {
  var common;
  !function (common) {
    "use strict";
    var UtilityService = function () {
      function UtilityService() {
      }

      return UtilityService.prototype.parseErrors = function (response) {
        var errors = [];
        for (var key in response.modelState) for (var i = 0; i < response.modelState[key].length; i++) errors.push(response.modelState[key][i]);
        return errors
      }, UtilityService.$inject = [], UtilityService
    }();
    common.UtilityService = UtilityService, angular.module("spikeAuth").service("utilityService", UtilityService)
  }(common = spike.common || (spike.common = {}))
}(spike || (spike = {}));
var spike;
!function (spike) {
  var login;
  !function (login) {
    "use strict";
    var LoginController = function () {
      function LoginController($state, authService) {
        this.$state = $state, this.authService = authService, this.name = "", this.password = "", this.message = "", this.settings = {
          input: {
            theme: "arctic",
            width: "23em",
            height: "1.7em"
          },
          pass: {theme: "arctic", width: "23em", height: "1.7em", showPasswordIcon: !1},
          btn: {theme: "arctic", width: "9em", height: "1.7em", template: "success"}
        }
      }

      return LoginController.prototype.login = function (name, password) {
        var _this = this;
        this.authService.login(name, password).then(function (user) {
          return _this.$state.go("admin")
        })["catch"](function (error) {
          error.error_description ? _this.message = error.error_description : _this.message = error
        })
      }, LoginController.prototype.onChange = function () {
        this.message && (this.message = "")
      }, LoginController.$inject = ["$state", "authService"], LoginController
    }();
    angular.module("spikeAuth").controller("LoginController", LoginController)
  }(login = spike.login || (spike.login = {}))
}(spike || (spike = {}));
var spike;
!function (spike) {
  var login;
  !function (login) {
    "use strict";
    var ResetPasswordController = function () {
      function ResetPasswordController($state, authService, $stateParams, $document, utilityService) {
        this.$state = $state, this.authService = authService, this.$stateParams = $stateParams, this.$document = $document, this.utilityService = utilityService, this.email = "", this.password = "", this.confirmPassword = "", this.message = "", this.settings = {
          input: {
            theme: "arctic",
            width: "23em",
            height: "1.7em"
          },
          pass: {theme: "arctic", width: "23em", height: "1.7em", showPasswordIcon: !1},
          btn: {theme: "arctic", width: "9em", height: "1.7em", template: "success"}
        }
      }

      return ResetPasswordController.prototype.reset = function (email, password, confirmPassword) {
        var _this = this, redirect = this.$stateParams.redirect, token = this.$stateParams.token;
        this.authService.resetPassword(token, email, password, confirmPassword).then(function () {
          return _this.$document[0].location.href = redirect
        })["catch"](function (error) {
          var errors = _this.utilityService.parseErrors(error);
          _this.message = errors[0]
        })
      }, ResetPasswordController.prototype.onChange = function () {
        this.message && (this.message = "")
      }, ResetPasswordController.$inject = ["$state", "authService", "$stateParams", "$document", "utilityService"], ResetPasswordController
    }();
    angular.module("spikeAuth").controller("ResetPasswordController", ResetPasswordController)
  }(login = spike.login || (spike.login = {}))
}(spike || (spike = {}));
var spike;
!function (spike) {
  var admin;
  !function (admin) {
    "use strict";

    function MatchValidator() {
      function link(scope, element, attrs, ngModel) {
        var input = attrs.match;
        ngModel.$validators.match = function (modelValue) {
          var inputValue = scope.vm[input];
          return modelValue === inputValue
        }
      }

      return {restrict: "A", require: "ngModel", link: link}
    }

    MatchValidator.$inject = [], angular.module("spikeAuth").directive("match", MatchValidator)
  }(admin = spike.admin || (spike.admin = {}))
}(spike || (spike = {}));
var spike;
!function (spike) {
  var admin;
  !function (admin) {
    "use strict";

    function PasswordValidator() {
      function link(scope, element, attrs, ngModel) {
        ngModel.$validators.validPassword = function (modelValue) {
          return modelValue ? modelValue.length < 6 ? (scope[attrs.validPassword].passwordMessage = "Too short....", !1) : modelValue.match(/[A-Z]/g) ? modelValue.match(/[a-z]/g) ? modelValue.match(/\d+/g) ? modelValue.match(/[!@#\$%\^\&*\)\(+=._-]+/g) ? !0 : (scope[attrs.validPassword].passwordMessage = "Must contain a special character....", !1) : (scope[attrs.validPassword].passwordMessage = "Must contain a digit....", !1) : (scope[attrs.validPassword].passwordMessage = "Must contain lowercase....", !1) : (scope[attrs.validPassword].passwordMessage = "Must contain uppercase....", !1) : !1
        }
      }

      return {restrict: "A", require: "ngModel", link: link}
    }

    PasswordValidator.$inject = [], angular.module("spikeAuth").directive("validPassword", PasswordValidator)
  }(admin = spike.admin || (spike.admin = {}))
}(spike || (spike = {}));
var spike;
!function (spike) {
  var admin;
  !function (admin) {
    "use strict";
    var AddUserController = function () {
      function AddUserController($scope, adminService) {
        var _this = this;
        this.$scope = $scope, this.adminService = adminService, this.role = null, this.firstName = null, this.lastName = null, this.company = null, this.email = null, this.userName = null, this.password = null, this.confirmPassword = null, this.domain = null, this.timeout = null, this.roles = ["Admin", "User"], this.message = "", this.messages = {password: ""}, this.add = function () {
          var user = _this.getData();
          "User" === _this.role && (_this.domain = _this.domain.replace("http://", "").replace("https:///", "")), _this.adminService.create(user).then(function () {
            _this.resetData(), _this.$scope.admin.listUsers(), _this.$scope.$emit("notify-success", "User created successfully")
          })["catch"](function (response) {
            var errors = _this.adminService.parseErrors(response.data);
            _this.$scope.$emit("notify-error", errors)
          })
        }, this.getData = function () {
          return {
            role: _this.role,
            firstName: _this.firstName,
            lastName: _this.lastName,
            company: _this.company,
            email: _this.email,
            userName: _this.userName,
            password: _this.password,
            confirmPassword: _this.confirmPassword,
            domain: _this.domain,
            timeout: _this.timeout
          }
        }, this.resetData = function () {
          _this.role = null, _this.firstName = null, _this.lastName = null, _this.company = null, _this.email = null, _this.userName = null, _this.password = null, _this.confirmPassword = null, _this.domain = null, _this.timeout = null
        }
      }

      return AddUserController.$inject = ["$scope", "adminService"], AddUserController
    }();
    angular.module("spikeAuth").controller("AddUserController", AddUserController)
  }(admin = spike.admin || (spike.admin = {}))
}(spike || (spike = {}));
var spike;
!function (spike) {
  var admin;
  !function (admin) {
    "use strict";

    function addUser() {
      return {restrict: "A", templateUrl: "/app/admin/users/add-user.partial.html"}
    }

    addUser.$inject = [], angular.module("spikeAuth").directive("addUser", addUser)
  }(admin = spike.admin || (spike.admin = {}))
}(spike || (spike = {}));
var spike;
!function (spike) {
  var admin;
  !function (admin) {
    "use strict";
    var ListUserActivityController = function () {
      function ListUserActivityController($scope, adminService) {
        var _this = this;
        this.$scope = $scope, this.adminService = adminService, this.user = null, this.activity = null, this.getActivity = function (user) {
          _this.adminService.getActivity({userName: user.userName}).then(function (response) {
            response.data.forEach(function (activity) {
              activity.timestamp = moment(activity.timestamp).toDate()
            }), _this.activity = response.data
          })["catch"](function (response) {
            var errors = _this.adminService.parseErrors(response.data);
            _this.$scope.$emit("notify-error", errors)
          })
        }
      }

      return ListUserActivityController.$inject = ["$scope", "adminService"], ListUserActivityController
    }();
    angular.module("spikeAuth").controller("ListUserActivityController", ListUserActivityController)
  }(admin = spike.admin || (spike.admin = {}))
}(spike || (spike = {}));
var spike;
!function (spike) {
  var admin;
  !function (admin) {
    "use strict";

    function listUserActivity() {
      return {restrict: "A", templateUrl: "/app/admin/users/list-user-activity.partial.html"}
    }

    listUserActivity.$inject = [], angular.module("spikeAuth").directive("listUserActivity", listUserActivity)
  }(admin = spike.admin || (spike.admin = {}))
}(spike || (spike = {}));
var spike;
!function (spike) {
  var admin;
  !function (admin) {
    "use strict";
    var ListUsersController = function () {
      function ListUsersController($scope, adminService) {
        var _this = this;
        this.$scope = $scope, this.adminService = adminService, this.index = -1, this.searchText = null, this.select = function (user, index) {
          _this.index = index, _this.user = user
        }
      }

      return ListUsersController.$inject = ["$scope", "adminService"], ListUsersController
    }();
    angular.module("spikeAuth").controller("ListUsersController", ListUsersController)
  }(admin = spike.admin || (spike.admin = {}))
}(spike || (spike = {}));
var spike;
!function (spike) {
  var admin;
  !function (admin) {
    "use strict";

    function listUsers() {
      return {restrict: "A", templateUrl: "/app/admin/users/list-users.partial.html"}
    }

    listUsers.$inject = [], angular.module("spikeAuth").directive("listUsers", listUsers)
  }(admin = spike.admin || (spike.admin = {}))
}(spike || (spike = {}));
var spike;
!function (spike) {
  var admin;
  !function (admin) {
    "use strict";
    var RemoveUserController = function () {
      function RemoveUserController($scope, adminService) {
        var _this = this;
        this.$scope = $scope, this.adminService = adminService, this.user = null, this.remove = function (user) {
          _this.adminService.remove({userName: user.userName}).then(function () {
            _this.user = null, _this.$scope.admin.listUsers(), _this.$scope.$emit("notify-success", "User removed successfully")
          })["catch"](function (response) {
            var errors = _this.adminService.parseErrors(response.data);
            _this.$scope.$emit("notify-error", errors)
          })
        }
      }

      return RemoveUserController.$inject = ["$scope", "adminService"], RemoveUserController
    }();
    angular.module("spikeAuth").controller("RemoveUserController", RemoveUserController)
  }(admin = spike.admin || (spike.admin = {}))
}(spike || (spike = {}));
var spike;
!function (spike) {
  var admin;
  !function (admin) {
    "use strict";

    function removeUser() {
      return {restrict: "A", templateUrl: "/app/admin/users/remove-user.partial.html"}
    }

    removeUser.$inject = [], angular.module("spikeAuth").directive("removeUser", removeUser)
  }(admin = spike.admin || (spike.admin = {}))
}(spike || (spike = {}));
var spike;
!function (spike) {
  var admin;
  !function (admin) {
    "use strict";
    var UpdateUserController = function () {
      function UpdateUserController($scope, adminService) {
        var _this = this;
        this.$scope = $scope, this.adminService = adminService, this.password = null, this.confirmPassword = null, this.domain = null, this.timeout = null, this.messages = {password: ""}, this.userSelected = function (user) {
          user && (_this.domain = user.domain, _this.timeout = user.timeout)
        }, this.updatePassword = function (user, password, confirmPassword) {
          _this.adminService.updatePassword({
            userName: user.userName,
            password: password,
            confirmPassword: confirmPassword
          }).then(function () {
            _this.reset(), _this.$scope.admin.listUsers(), _this.$scope.$emit("notify-success", "User password updated")
          })["catch"](function (response) {
            var errors = _this.adminService.parseErrors(response.data);
            _this.$scope.$emit("notify-error", errors)
          })
        }, this.updateDomain = function (user, domain) {
          _this.adminService.updateDomain({userName: user.userName, domain: domain}).then(function () {
            _this.reset(), _this.$scope.admin.listUsers(), _this.$scope.$emit("notify-success", "User domain updated")
          })["catch"](function (response) {
            var errors = _this.adminService.parseErrors(response.data);
            _this.$scope.$emit("notify-error", errors)
          })
        }, this.updateTimeout = function (user, timeout) {
          _this.adminService.updateTimeout({userName: user.userName, timeout: timeout}).then(function () {
            _this.reset(), _this.$scope.admin.listUsers(), _this.$scope.$emit("notify-success", "User timeout updated")
          })["catch"](function (response) {
            var errors = _this.adminService.parseErrors(response.data);
            _this.$scope.$emit("notify-error", errors)
          })
        }, this.reset = function () {
          _this.password = null, _this.confirmPassword = null, _this.domain = null, _this.timeout = null
        }
      }

      return UpdateUserController.$inject = ["$scope", "adminService"], UpdateUserController
    }();
    angular.module("spikeAuth").controller("UpdateUserController", UpdateUserController)
  }(admin = spike.admin || (spike.admin = {}))
}(spike || (spike = {}));
var spike;
!function (spike) {
  var admin;
  !function (admin) {
    "use strict";

    function updateUser() {
      return {restrict: "A", templateUrl: "/app/admin/users/update-user.partial.html"}
    }

    updateUser.$inject = [], angular.module("spikeAuth").directive("updateUser", updateUser)
  }(admin = spike.admin || (spike.admin = {}))
}(spike || (spike = {}));
var spike;
!function (spike) {
  var admin;
  !function (admin) {
    "use strict";
    var AdminService = function () {
      function AdminService($http, $q, authService) {
        this.$http = $http, this.$q = $q, this.authService = authService
      }

      return AdminService.prototype.get = function () {
        var _this = this, deferred = this.$q.defer();
        return this.$http.get("/api/user/list").then(function (response) {
          response.data.forEach(function (user) {
            user.name = user.firstName + " " + user.lastName, user.role = _this.authService.getClaimValue(user, spike.auth.Claims.Role), user.dateAdded = null !== user.dateAdded ? moment(user.dateAdded).toDate() : null, user.timeout = null !== user.timeout ? moment(user.timeout).toDate() : null, user.lastLogin = null !== user.lastLogin ? moment(user.lastLogin).toDate() : null
          }), deferred.resolve(response.data)
        })["catch"](function (err) {
          return deferred.reject(err)
        }), deferred.promise
      }, AdminService.prototype.create = function (data) {
        return this.httpPost("/api/user/create", data)
      }, AdminService.prototype.remove = function (data) {
        return this.httpPost("/api/user/remove", data)
      }, AdminService.prototype.changePassword = function (data) {
        return this.httpPost("/api/user/changePassword", data)
      }, AdminService.prototype.parseErrors = function (response) {
        var errors = [];
        for (var key in response.modelState) for (var i = 0; i < response.modelState[key].length; i++) errors.push(response.modelState[key][i]);
        return errors
      }, AdminService.prototype.updatePassword = function (data) {
        return this.httpPost("/api/user/updatePassword", data)
      }, AdminService.prototype.updateDomain = function (data) {
        return this.httpPost("/api/user/updateDomain", data)
      }, AdminService.prototype.updateTimeout = function (data) {
        return this.httpPost("/api/user/updateTimeout", data)
      }, AdminService.prototype.getActivity = function (data) {
        return this.httpGet("/api/user/getActivity", data)
      }, AdminService.prototype.httpPost = function (url, data) {
        var deferred = this.$q.defer();
        return this.$http.post(url, data).then(function () {
          return deferred.resolve()
        })["catch"](function (error) {
          return deferred.reject(error)
        }), deferred.promise
      }, AdminService.prototype.httpGet = function (url, data) {
        var deferred = this.$q.defer();
        return this.$http.get(url, {params: data}).then(function (data) {
          return deferred.resolve(data)
        })["catch"](function (error) {
          return deferred.reject(error)
        }), deferred.promise
      }, AdminService.$inject = ["$http", "$q", "authService"], AdminService
    }();
    admin.AdminService = AdminService, angular.module("spikeAuth").service("adminService", AdminService)
  }(admin = spike.admin || (spike.admin = {}))
}(spike || (spike = {}));
