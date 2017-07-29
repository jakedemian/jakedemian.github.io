app.controller("SkillsetController", ["$scope", function ($scope) {
  $scope.title = "Skillset";
  $scope.skillsetCategories = [
    {
      "title": "Backend",
      "skills": [
        {
          "name": "Java",
          "level": 5
        },
        {
          "name": "PHP",
          "level": 4
        },
        {
          "name": "C#",
          "level": 4
        },
        {
          "name": "C++",
          "level": 3
        }
      ]
    },
    {
      "title": "Frontend",
      "skills": [
        {
          "name": "Javascript",
          "level": 5
        },
        {
          "name": "HTML",
          "level": 5
        },
        {
          "name": "CSS",
          "level": 3
        }
      ]
    },
    {
      "title": "Frameworks",
      "skills": [
        {
          "name": "Angular",
          "level": 4
        },
        {
          "name": "jQuery",
          "level": 4
        },
        {
          "name": "SASS",
          "level": 4
        },
        {
          "name": "Struts",
          "level": 4
        },
        {
          "name": "React",
          "level": 3
        }
      ]
    },
    {
      "title": "Databases",
      "skills": [
        {
          "name": "MySQL",
          "level": 5
        },
        {
          "name": "DB2",
          "level": 5
        }
      ]
    }
  ];
  
}]);