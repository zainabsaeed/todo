(function(){

    var todo = document.querySelector( '#todolist' ),
        form = document.querySelector( 'form' ),
        field = document.querySelector( '#newitem' );
      
    form.addEventListener( 'submit', function( el ) {
      todo.innerHTML += '<li>' + field.value + '</li>';
      field.value = '';
      field.focus();
      el.preventDefault();
    }, false);
  
    todo.addEventListener( 'click', function( el ) {
      var t = el.target;
      if ( t.tagName === 'LI') {
        if ( t.classList.contains( 'done' ) ) {
          t.parentNode.removeChild( t );
        } else {  
          t.classList.add( 'done' );
        }
      };
      el.preventDefault();
    }, false);
  
  })();