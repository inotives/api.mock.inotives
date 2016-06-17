module.exports = {
  getProfile: {
      details: {
          name: 'Toni Lim',
          email: "inotives@gmail.com",
          image: "http://localhost:1513/images/profile.png",
          title: "Web Application Developer",
          baseIn: "Singapore",
          availability: "Freelance Project",
          selfDescr: "Web Technology Believers. All the application will be running from the web eventually.",
          coreDevLanguage: "Javascript (Node.js / React+Redux)"
      }
      ,
      skills: [
        {type: "Languages", details: ["Javascript","ES2015 Javascript","TypeScript","SQL","NoSQL","Css(Sass & Less)","Ruby","Python","PHP"]},
        {type: "Backend Frameworks", details: ["Node.Js","Express","KoaJs", "Laravel 4"]},
        {type: "Frontend Frameworks", details: ["ReactJS","AngularJS","jQuery", "Meteor", "Backbone", "Ember"]},
        {type: "UI Frameworks", details: ["Bootstrap","Foundations", "Materialze", "KenUi", "Onsen", "Ionic", "cordova", "ReactNative"]},
        {type: "Web Plugins", details: ["ThreeJS", "socket.io", "D3.js"]},
        {type: "Designs", details: ["Photoshop","Blender","Autodesk 3DS Max"]},
        {type: "Tools", details: ["Git","Grunt","Gulp","Webpack","RabbitMQ","Nginx","LAMP","Kibana","Graphana", "Jenkins"]},
        {type: "Paradigms", details: ["Agile", "Scrum", "MVC", "MVVM", "TDD", "OOP", "Reactive Programming"]},
        {type: "Storages", details: ["MySQL","RethinkDB","MongoDB","SQLite", "Redis", "ElasticSearch", "Blockchain"]},
        {type: "Platforms", details: ["Amazon Web Services (AWS)", "Digital Ocean", "Heroku"]},
        {type: "Code Repos", details: ["Github","BitBucket","GitLab"]}
      ],
      portfolios: [
        {name: "", type: "", link: "", thumbnail: ""}
      ],
      experiences: [
        {
          type: 'Skill Overview',
          text: 'Skills',
          icon: 'code',
          labels: ["Frontend", "Backend", "Designing", "Deployment", "Server Management", "Data Management"],
          score: [ 68, 79, 59, 50, 56, 65]
        }
      ],
      educations: [
        {
          title: "Diploma in Electronic Communication & Computing",
          from: "Nanyang Polytechnic",
          countryOrigin: "Singapore",
          academicYear: "2010 - 2014"
        },
        {
          title: "Degree in Computer Science",
          from: "Nanyang Technological University",
          countryOrigin: "Singapore",
          academicYear: "2010 - 2014"
        }
      ],
      project: [
        {
          title: "REST API Documentation site",
          details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
          title: "Some experience",
          details: "some thing here "
        }
      ],
      sourceOfKnowlege:[
        {type: 'Blog', text: 'Blog'}
      ],
      preferredEnv: [ "Git", "Linux", "Atom", "sublimeText" ],
      employments: [
        {
          company: "itBit pte ltd",
          period: "2015-Present",
          jobTitle: "IT Support Engineer",
          responsibilities: [
            "responsibility 1",
            "responsibility 2"
          ],
          technologies: [
            "PHP",
            "Ruby",
            "Python",
            "NodeJs",
            "ReactJs",
            "Blockchain"
          ]
        },
        {
          company: "Balanced Consultancy",
          period: "2014-2015",
          jobTitle: "Senior Software Engineer",
          responsibilities: [
            "responsibility 1",
            "responsibility 2"
          ],
          technologies: [
            "PHP - Laravel 4",
            "Linux - CentOS",
            "AngularJS",
            "Android",
            "iOS",
            "Cordova",
            "Ionic"
          ]
        },
        {
          company: "inotives.com",
          period: "2011-Present",
          jobTitle: "Freelance Web Application Developer",
          responsibilities: [
            "responsibility 1",
            "responsibility 2"
          ],
          technologies: [
            "NodeJs",
            "NoSQL",
            "AngularJs",
            "ReactJs",
            "ThreeJs",
            "Cordova"
          ]
        }
      ]
  }
}
