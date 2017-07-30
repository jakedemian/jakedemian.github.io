app.controller("SkillsetController", ["$scope", function ($scope) {
  $scope.title = "Skillset";
  $scope.skillsetCategories = [
    {
      "title": "Backend",
      "skills": [
        {
          "name": "Java",
          "level": 10
        },
        {
          "name": "PHP",
          "level": 8
        },
        {
          "name": "C#",
          "level": 7
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
          "name": "Javascript",
          "level": 10
        },
        {
          "name": "HTML",
          "level": 9
        },
        {
          "name": "CSS",
          "level": 5
        }
      ]
    },
    {
      "title": "Frameworks",
      "skills": [
        {
          "name": "Angular",
          "level": 9
        },
        {
          "name": "jQuery",
          "level": 9
        },
        {
          "name": "SASS",
          "level": 5
        },
        {
          "name": "Struts",
          "level": 5
        },
        {
          "name": "React",
          "level": 4
        }
      ]
    },
    {
      "title": "Databases",
      "skills": [
        {
          "name": "MySQL",
          "level": 10
        },
        {
          "name": "DB2",
          "level": 9
        }
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
      "desc":"I use this",
      "leftOffset": "298px"
    },
    {
      "desc":"I'm pretty good at this",
      "leftOffset": "373px"
    },
    {
      "desc":"I'm an expert at this",
      "leftOffset": "448px"
    }
  ]

}]);