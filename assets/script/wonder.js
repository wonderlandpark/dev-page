land = {
menuSwitcher: function() {
        $('#menu').click(function(){
            $('.ui.sidebar').sidebar('setting', 'transition', 'overlay').sidebar('toggle');
        })

}
}
    

function park() {
    console.log('AkaPage, also we think User Interface is the language of the web.')
    console.log('----')
  
   land.menuSwitcher()
  }
  
  document.addEventListener('DOMContentLoaded', park)