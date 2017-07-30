app.controller("ExperienceController", ["$scope", function($scope){
  $scope.title = "Experience";

  $scope.expList = [
    {
      "name":"Nanotronics Imaging",
      "logoPath":"assets/nano_logo.png",
      "logoStyleTweak":"margin-top: 20px;",
      "desc":"Designed and developed desktop application to control automated silicon wafer inspection system.",
      "langList":[
        "C++",
        "Embedded C",
        "MATLAB"
      ],
      "projects":[
        {
          "name":"NSPEC",
          "url":"http://www.nanotronics.co/technology/"
        }
      ]
    },
    {
      "name":"STERIS Corporation",
      "logoPath":"assets/steris_logo.png",
      "logoStyleTweak":"",
      "desc":"Worked to create a brand new type of surgical lighting system.  Worked with both hardware and software.",
      "langList":[
        "C++",
        "Embedded C",
        "VB"
      ],
      "projects":[
        {
          "name":"Harmony LED/vLED",
          "url":"http://www.steris.com/products/surgical-lights/harmony-led-surgical-lighting-and-visualization-system"
        }
      ]
    },
    {
      "name":"SapientRazorfish",
      "logoPath":"assets/sapientrazorfish_logo.png",
      "logoStyleTweak":"",
      "desc":"Design, implement, and maintain large-scale e-commerce sites using Websphere Commerce.",
      "langList":[
        "Java (+Struts)",
        "JavaScript (+AngularJS, +jQuery)",
        "HTML",
        "CSS (+SASS)",
        "DB2 / SQL"
      ],
      "projects":[
        {
          "name":"sherwin-williams.com",
          "url":"http://www.sherwin-williams.com/"
        },
        {
          "name":"steris.com (service parts store)",
          "url":"http://www.steris.com/healthcare/service-and-service-parts/steris-service-parts/"
        }
      ]
    }
  ];
}]);