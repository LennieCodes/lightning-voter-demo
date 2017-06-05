angular.module('app').component('nav', {
  template: `
  <div 
  class="navbar navbar-fixed-top navbar-inverse">
  <div class="container">
    <div class="navbar-header"><a href="/" class="navbar-brand">Lightning Talks</a></div>
    <div class="navbar-collapse collapse">
      <ul class="nav navbar-nav">
        <li><a href="#/">Home <span class="badge">{{$ctrl.unreviewedSessionCount.value}}</span> </a></li>
        <li><a href="#/createsession">Create Session</a></li>
        <li><a href="#/profile">Profile</a></li>
        <li><a href="#/admin/createusers" ng-show="$ctrl.currentUser.isAdmin">Create Users</a></li>
        <li><a href="#/admin/results" ng-show="$ctrl.currentUser.isAdmin">Results</a></li>
        <li><a href="#/users" ng-show="$ctrl.currentUser.isAdmin">Users</a></li>
        <li><a href="#/logout">Logout</a></li>
      </ul>
      
      <ul class="nav navbar-right navbar nav">
        <li class="navbar-text">
          Welcome {{$ctrl.currentUser.firstName}} {{$ctrl.currentUser.lastName}}
        </li>
      </ul>
    </div>
  </div>
</div>

  `,
  bindings: {
  },
  controller: function(currentIdentity, sessions, unreviewedSessionCount) {
    
    this.currentUser = currentIdentity.currentUser;
    
    unreviewedSessionCount.updateUnreviewedSessionCount();
    this.unreviewedSessionCount = unreviewedSessionCount;
    
  }
});