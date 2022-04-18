
// variables go here
var savedIdeas = [];
var activeIdeas = [];

var saveButton = document.querySelector('.save-button');
var titleBox = document.querySelector('input[name="title-box"]');
var bodyBox = document.querySelector('input[name="body-box"]');
var ideaSection = document.querySelector('.idea-section');
var deleteButton = document.querySelector('.delete-button');
var starButton = document.querySelector(".star-button");



//event listeners go here
saveButton.addEventListener('click', function(){
checkInput();
createIdea();
showIdea();
clearInput();
checkInput();
});

titleBox.addEventListener('keyup', checkInput);
bodyBox.addEventListener('keyup', checkInput);
ideaSection.addEventListener('click', function(event){
  deleteIdea(event);
});
ideaSection.addEventListener('click', function(event){
  saveIdea(event);
});


// functions go here

function checkInput(){
  if (titleBox.value && bodyBox.value){
    saveButton.disabled = false;
  } else {
    saveButton.disabled = true;
  }
}

function clearInput(){
  titleBox.value = "";
  bodyBox.value = "";
}

function createIdea() {
  newIdea = new Idea(titleBox.value, bodyBox.value)
  activeIdeas.push(newIdea)
}

    function showIdea(){
      var makeIdea = `
  <div class="idea-section">
        <section class="idea-cards" id="${newIdea.id}">
            <div class="button-wrapper">
                <div class="idea-card-head">
                    <div>
                        <button class="star-button"></button>
                    </div>
                    <div>
                        <button class="delete-button"></button>
                    </div>
                </div>
                </div>
                <div class="idea-card-body">
                    <div class="idea-title">${newIdea.title}</div>
                    <div class="idea-text">${newIdea.body}</div>
                </div>
                <div class="idea-card-foot">
                    <div class="comment"><button id="comment-button"></button>Comment</div>
                </div>
        </section>
    </div>`
      ideaSection.innerHTML += makeIdea;
    }

    function deleteIdea(event){
      if (event.target.classList.contains("delete-button")){
        event.target.closest('section').remove();
        deleteIdeaArray(activeIdeas)
    }
  }

  function deleteIdeaArray(array){
    for (var i = 0; i < array.length; i++){
      if (array[i].id === newIdea.id) {
        array.splice(i, 1);
      }
    }
  }

  //push new instance to new array saved if the star is clicked
  //removing it from that array with some sort of toggle

  function saveIdea(event){
    // if (savedIdeas.includes(newIdea.id)) return
    if (event.target.classList.contains("star-button")){
      if (savedIdeas.star === true) {
        deleteIdeaArray(savedIdeas);
      }
      // if (savedIdeas.star === false) {
        savedIdeas.unshift(newIdea);
        newIdea.updateIdea();
      } else {
        // removeIdea();
      }
    }



  // function removeIdea() {
  //    for (var i = 0; savedIdeas.length; i++) {
  //     if (savedIdeas[i].id === savedIdeas.id) {
  //       savedIdeas.splice(i, 1);
  //     }
  //    }
  //  }


   //
   // function someShit() {
   //   savedIdeas.unshift(newIdea);
   //   newIdea.updateIdea();
   // }



  // function compareArray() {
  //   if (activeIdeas.star) {
  //     savedIdeas.unshift(newIdea);
  //     newIdea.updateIdea();
  //   }
  //   for (var i = 0; activeIdeas.length && savedIdeas.length)
  // }
  //
  //
  //
  // function checkStar() {
  //   for (var i = 0; i < savedIdeas.length; i++) {
  //     if (savedIdeas[i].star === false) {
  //       someShit();
  //     } else {
  //       removeIdea();
  //     }
  //   }
  // }
