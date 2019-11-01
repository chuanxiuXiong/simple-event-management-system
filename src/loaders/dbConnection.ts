const fs = require('fs');
const { eventDBFilename, commentsDBFilename } = require('../config/dbFilenames');
const FoodEvent = require('../models/foodEvent');
const Comment = require('../models/comment');

export default class Connection {
  events: [object];
  comments: [object];
  constructor() {
    this.events = JSON.parse(fs.readFileSync(eventDBFilename));
    this.comments = JSON.parse(fs.readFileSync(commentsDBFilename));
  }

  public insertFoodEvent() {}
  public deleteFoodEvent() {}
  public getFoodEvents() {}
  public getFoodEventById(id: Number) {}

  public insertComment() {}
  public deleteComment() {}
  public getComments() {}
  public getCommentById(id: Number) {}
}
