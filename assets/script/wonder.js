land = {
sidebarToggle: function() {
        $('#menu').click(function(){
            $('.ui.sidebar').sidebar('setting', 'transition', 'overlay').sidebar('toggle');
        })

},
dropdownToggle: function() {
    $('#dropdown')
    .dropdown('show');
  ;
}
}
    

function park() {
    console.log('Hello,')
    console.log('----')
    land.sidebarToggle()

  
   
  }
  
  document.addEventListener('DOMContentLoaded', park)