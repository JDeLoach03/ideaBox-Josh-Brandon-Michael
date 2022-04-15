// variables go here
var savedIdeas = [];
var activeIdeas = [];

var saveButton = document.querySelector('.save-button');
var titleBox = document.querySelector('input[name="title-box"]');
var bodyBox = document.querySelector('input[name="body-box"]');


var ideaSection = document.querySelector('.idea-section');




//buttons go here










//event listeners go here
saveButton.addEventListener('click', showIdea);







//
// currentPoster = new Poster(userImgURL, userNewTitle, userNewQuote)
//   images.push(imgURL.value)
//   titles.push(newTitle.value)
//   quotes.push(newQuote.value)
//



//functions go here

function createIdea() {
  if (titleBox.value === ""|| bodyBox.value === "") {
    window.alert("Information required");
  } else {
    newIdea = new Idea(title, body)
    activeIdeas.push(newIdea)
  }
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
