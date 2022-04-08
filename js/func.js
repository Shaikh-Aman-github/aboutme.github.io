        $(document).ready(function(){
            $("#review_slider_content").lightSlider({
                auto: true,
                loop: true,
                responsive : [
                {
                    breakpoint:800,
                    settings: {
                        item:3,
                        slideMove:1,
                        slideMargin:6,
                    }
                },
                {
                    breakpoint:720,
                    settings: {
                        item:2,
                        slideMove:1,
                        slideMargin:3,
                    }
                },
                {
                    breakpoint:540,
                    settings: {
                        item:2,
                        slideMove:1,
                        slideMargin:3,
                    }
                },
                {
                    breakpoint:480,
                    settings: {
                        item:1,
                        slideMove:1
                    }
                }
                ]
            });
        })

/*json data loding


fetch("data.json")
    .then(function(resp){
        return resp.json();
    })
    .then(function(data){
        console.log(data);
    });

*/
var myArray = [
    {
        "name": "MongoDB",
        "progress": "0%"
      },
       {
        "name": "ExpressJs",
        "progress": "0%"
      }, 
      {
        "name": "ReactJs",
        "progress": "50%"
      }, 
      {
        "name": "NodeJs",
        "progress": "0%"
      },
      {
        "name": "HTML",
        "progress": "95%"
      },
       {
        "name": "CSS",
        "progress": "90%"
      }, 
      {
        "name": "JavaScript",
        "progress": "60%"
      }, 
      {
        "name": "Bootstrap",
        "progress": "80%"
      },
        {
        "name": "AngularJs",
        "progress": "70%"
      }, 
      {
        "name": "C-lang",
        "progress": "80%"
      },
        {
        "name": "Python",
        "progress": "30%"
      }, 
      {
        "name": "Java",
        "progress": "0%"
      },
      {
        "name": "PHP",
        "progress": "30%"
      },
        {
        "name": "R-lang",
        "progress": "50%"
      }, 
      {
        "name": "C++",
        "progress": "0%"
      },
        {
        "name": "Flutter/dart",
        "progress": "30%"
      }, 
      {
        "name": "React Native",
        "progress": "0%"
      },
        {
        "name": "SQL",
        "progress": "80%"
      }, 
      {
        "name": "RDBMS",
        "progress": "70%"
      },
        {
        "name": "django",
        "progress": "0%"
      },
        {
        "name": "Docker",
        "progress": "0%"
      }, 
      {
        "name": "Kubernetes",
        "progress": "0%"
      },
      {
        "name": "GIT/github",
        "progress": "0%"
      }
  ];
  
  myFunction(myArray);
  
  function myFunction(arr) {
    var out = "";
    var i;
    for(i = 0; i < arr.length; i++) {
      out +=  arr[i].name + '<br>';
      out +=  arr[i].progress + '<br>';
    }
    document.getElementById("s").innerHTML = out;
  }
  myFunction(myArray);

  var element;
    document.querySelector(".ski").classList.add("skills-card","card-body");
    element = document.querySelector(".ski").classList;
  console.log("hi");
/*loder      
        
window.onload = function (){
   $(".loader_container").css("display","none");
*/