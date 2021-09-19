document.getElementsByTagName('body')[0].classList.add('override')
document.querySelectorAll('header').classList.add('override2')

//Accordieon in information coronavirus
var finder = document.getElementsByClassName("pull-right text-right");
var accordionCell = finder.nextElementSibling;
var i;

//creation of the toggle for the accordion
var acc = document.createElement("button");
acc.className = "accordion";
var text = document.createTextNode("Voir plus ...");
acc.appendChild(text);
accordionCell.appendChild(acc);

// fonction on listener 
for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      /* Toggle between adding and removing the "active" class,
      to highlight the button that controls the panel */
      this.classList.toggle("active");
  
      /* Toggle between hiding and showing the active panel */
      var panel = this.nextElementSibling;
      var panelSecond = panel.nextElementSibling;
      if (panel.style.display === "block") {
        panel.style.display = "none";
        panelSecond.style.display = "none";
      } else {
        panel.style.display = "block";
        panelSecond.style.display = "block";
      }
    });
  }