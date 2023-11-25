
function handleClick() {
    alert('Click event!');
  }
  function handleMouseOver() {
    console.log('Mouseover event!');
  }
  
  function handleKeyPress(event) {
    console.log('Keypress event! Key pressed:', event.key);
  }
  
  $(document).ready(function() {
    $('#submitButton').on('click', handleClick);
  
    $('.parallax-photo').on('mouseover', handleMouseOver);
    $(document).on('keypress', handleKeyPress);
  });
  