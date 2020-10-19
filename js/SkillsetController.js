app.controller("SkillsetController", ["$scope", function ($scope) {
  $scope.title = "Skillset";
  $scope.skillsetCategories = [
    {
      "title": "Programming",
      "skills": [
        {
          "name": "JavaScript",
          "level": 10
        },
        {
          "name": "PHP",
          "level": 8
        },
        {
          "name": "C#",
          "level": 8
        },
        {
          "name": "Java",
          "level": 5
        },
        {
          "name": "C++",
          "level": 5
        }
      ]
    },
    {
      "title": "Frontend",
      "skills": [
        {
          "name": "HTML",
          "level": 10
        },
        {
          "name": "CSS",
          "level": 10
        }
      ]
    },
    {
      "title": "Frameworks",
      "skills": [
        {
          "name": "React",
          "level": 9
        },
        {
          "name": "jQuery",
          "level": 8
        },
        {
          "name": "SASS",
          "level": 8
        },
        {
          "name": "AngularJS",
          "level": 6
        },
      ]
    },
    {
      "title": "Databases",
      "skills": [
        {
          "name": "MySQL",
          "level": 8
        },
        {
          "name": "DB2",
          "level": 6
        },
        {
          "name": "Filemaker Pro",
          "level": 5
        },
      ]
    }
  ];

  $scope.skillLines = [
    {
      "desc":"Never used",
      "leftOffset": "148px"
    },
    {
      "desc":"I've dabbled",
      "leftOffset": "223px"
    },
    {
      "desc":"I sometimes use this",
      "leftOffset": "298px"
    },
    {
      "desc":"I use this often",
      "leftOffset": "373px"
    },
    {
      "desc":"I'm very good at this",
      "leftOffset": "448px"
    }
  ]

}]);
