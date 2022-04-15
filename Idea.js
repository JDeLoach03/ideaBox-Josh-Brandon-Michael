class Idea {
  constructor(title, body) {
    this.id = Date.now() + Math.random();
    this.title = title;
    this.body = body;
    this.star = false;
    }
    updateIdea() {
      this.star = true;
    }
  }
