$(function() {

  function linkifyLaunchConfigName() {
    var launchConfigLabel = $("span:contains('Launch Configuration')");
    // eurgh
    var launchConfigDiv = launchConfigLabel.parent().next().children(":first-child").children(":first-child").children(":first-child:not(:has(a))");
    var launchConfigName = launchConfigDiv.text();
    var launchConfigLink = '<a target="_blank" href="/ec2/autoscaling/home' + window.location.search + '#LaunchConfigurations:id=' + launchConfigName + '">' + launchConfigName + '</a>';
    launchConfigDiv.html(launchConfigLink);
  }

  function linkifyLoadBalancerNames() {
    var loadBalancersLabel = $("span:contains('Load Balancers')");
    // eurgh
    var loadBalancersDiv = loadBalancersLabel.parent().next().children(":first-child").children(":first-child").children(":first-child:not(:has(a))");
    var loadBalancerNames = loadBalancersDiv.text().split(", ");
    var loadBalancerLinks = loadBalancerNames.map(function(name) {
      return '<a target="_blank" href="/ec2/v2/home' + window.location.search + '#LoadBalancers:search=' + name + '">' + name + '</a>';
    }).join(", ");

    loadBalancersDiv.html(loadBalancerLinks);
  }

  window.setInterval(function() {
    linkifyLaunchConfigName();
    linkifyLoadBalancerNames();
  }, 100); // just run the functions periodically (as they're cheap and idempotent) instead of trying to reverse engineer what events we should listen to

});

