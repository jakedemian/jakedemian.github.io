app.controller("ExperienceController", ["$scope", function($scope){
  $scope.title = "Experience";

  $scope.expList = [
    {
      "name":"Health Street",
      "logoPath":"assets/hs-logo-square.png",
      "logoStyleTweak":"",
      // TODO insert sg link here when released
      "desc":"Create and maintain health-street.net, which is a drug testing " +
          "and onboarding service ordering platform that manages tens of thousands of businesses and clients.",
      "langList":[
        "JavaScript (vanilla + ReactJS + node)",
        "PHP",
        "HTML",
        "CSS (+SASS)",
        "AWS",
        "Filemaker Pro"
      ],
      "projects":[
        {
          "name":"health-street.net",
          "url":"https://www.health-street.net/"
        },
        {
          "name":"StaffGlass",
          "url":"https://www.staffglass.io/"
        }
      ]
    },
    {
      "name":"Sapient Razorfish",
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
          "name":"Luxottica",
          "url":"http://www.luxottica.com/en/eyewear-brands"
        },
        {
          "name":"steris.com (service parts store)",
          "url":"http://www.steris.com/healthcare/service-and-service-parts/steris-service-parts/"
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
          "url":"https://www.steris.com/healthcare/products/surgical-lights-and-examination-lights/surgical-lights"
        }
      ]
    },
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
          "url":"https://nanotronics.co/products/"
        }
      ]
    },


  ];
}]);
