$('button').on('click', function(event){
    alert('hello')
    var whichButton = $(event.target).attr('class')
    if(whichButton === "correct"){
      alert("you clicked the correct button!")
    } else if(whichButton === "kindaCorrect"){
      alert("you didn't click the correct button, but you were close!")
    }
  })