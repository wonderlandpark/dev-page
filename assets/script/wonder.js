land = {
<<<<<<< HEAD
sidebarToggle: function() {
=======
menuSwitcher: function() {
>>>>>>> ea097c05df1141ccfb0b004c79ea22df17c5044d
        $('#menu').click(function(){
            $('.ui.sidebar').sidebar('setting', 'transition', 'overlay').sidebar('toggle');
        })

<<<<<<< HEAD
},
dropdownToggle: function() {
    $('#dropdown')
    .dropdown('show');
  ;
=======
>>>>>>> ea097c05df1141ccfb0b004c79ea22df17c5044d
}
}
    

function park() {
<<<<<<< HEAD
    console.log('Hello,')
    console.log('----')
    land.sidebarToggle()

  
   
=======
    console.log('AkaPage, also we think User Interface is the language of the web.')
    console.log('----')
  
   land.menuSwitcher()
>>>>>>> ea097c05df1141ccfb0b004c79ea22df17c5044d
  }
  
  document.addEventListener('DOMContentLoaded', park)