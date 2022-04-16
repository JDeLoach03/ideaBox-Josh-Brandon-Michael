

// variables go here
var savedIdeas = [];
var activeIdeas = [];

var saveButton = document.querySelector('.save-button');
var titleBox = document.querySelector('input[name="title-box"]');
var bodyBox = document.querySelector('input[name="body-box"]');
var ideaSection = document.querySelector('.idea-section');



//event listeners go here
saveButton.addEventListener('click', function(){
checkInput();
createIdea();
showIdea();
});



//functions go here
function checkInput(){
  if (titleBox.value && bodyBox.value){
    saveButton.disable = false;
    saveButton.classList.add(".disabled-button");
  } else {
    saveButton.disable = true;
}
}
function createIdea() {
  newIdea = new Idea(this.title, this.body)
  activeIdeas.push(newIdea)
}

    function showIdea() {
      var makeIdea = `
  <div class="idea-section">
        <section class="idea-cards">
            <div class="button-wrapper">
                <div class="idea-card-head">
                    <div>
                        <button class="star-button"></button>
                    </div>
                    <div>
                        <button class="delete-button"> </button>
                    </div>
                </div>
                </div>
                <div class="idea-card-body">
                    <div class="idea-title">${titleBox.value}</div>
                    <div class="idea-text">${bodyBox.value}</div>
                </div>
                <div class="idea-card-foot">
                    <div class="comment"><button id="comment-button"></button>Comment</div>
                </div>
        </section>
    </div>`
      ideaSection.innerHTML += makeIdea;
    }
