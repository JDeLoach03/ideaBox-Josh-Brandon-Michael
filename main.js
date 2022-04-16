

// variables go here
var savedIdeas = [];
var activeIdeas = [];

var saveButton = document.querySelector('.save-button');
var titleBox = document.querySelector('input[name="title-box"]');
var bodyBox = document.querySelector('input[name="body-box"]');
var ideaSection = document.querySelector('.idea-section');
var deleteButton = document.querySelector('.delete-button');



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
        deleteIdeaArray(event)
    }
  }

  function deleteIdeaArray(event){
    for (var i = 0; i < activeIdeas.length; i++){
      if (activeIdeas[i].id === newIdea.id) {
        activeIdeas.splice(i, 1);
      }
    }
  }