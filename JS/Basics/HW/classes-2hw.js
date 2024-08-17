// Завдання:

// Опишіть клас Restaurant(visitors, rating, avgPrice, private(feedbacks))

// feedbacks - Array of string

// Опишіть методи: deleteFeedback(feedback), addFeedback(feedback), clear - removes all the feedbacks

// Створіть екземпляр та протестуйте перелічені методи

class Restaurant {
  #feedbacks;

  constructor(visitors, rating, avgPrice, feedbacks) {
    this.visitors = visitors;
    this.rating = rating;
    this.avgPrice = avgPrice;

    this.#feedbacks = feedbacks;
  }

  addFeedback(feedback) {
    this.#feedbacks.push(feedback);
  }

  removeFeedback(feedback) {
    this.#feedbacks = this.#feedbacks.filter((fb) => fb !== feedback);
  }

  clearFeedbacks() {
    this.#feedbacks = [];
  }
}

const restaurant = new Restaurant(50, 5, 150, []);

console.table(restaurant);

restaurant.addFeedback("Great");
console.log(restaurant);

restaurant.removeFeedback("Great");
console.log(restaurant);

restaurant.addFeedback("Good");
restaurant.addFeedback("Fine");
restaurant.addFeedback("Tasty");
restaurant.addFeedback("Bad");

restaurant.clearFeedbacks();

console.log(restaurant);
