//Define an object to generate three random course to the console
const menu = {
  //Define the course structure
  _course: {
    appetizers: [],
    mains: [],
    desserts: []
  },
  //Define three meals' getter and setter
  get appetizers(){
    return this._course.appetizers;
  },
  set appetizers(appetizers){
    this._course.appetizers.push(appetizers);
  },
  get mains(){
    return this._course.mains;
  },
  set mains(mains){
    this._course.mains.push(mains);
  },
  get desserts(){
    return this._course.desserts;
  },
  set desserts(desserts){
    this._course.desserts.push(desserts)
  },
  //Define a function to get all menu
  get courses(){
    return {
      appetizers: this._course.appetizers,
      mains: this._course.mains,
      desserts: this._course.desserts
    }
  },
  //Add dish to menu: Remember you don't need to use this here because we want to get the parameters from the user input(not the original menu stack)
  addDishToCourse(courseName, dishName, dishPrice){
    const dish = {
      name: dishName,
      price: dishPrice
    };
    this._course[courseName].push(dish);
  },

// Get random course by using random funciton
  getRandomDishFromCourse(courseName){
    const dishes = this._course[courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex];
  },
// Generate random meal
  generateRandomMeal(){
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const main = this.getRandomDishFromCourse('mains');
    const dessert = this.getRandomDishFromCourse('desserts');
    const totalPrice = appetizer.price + main.price + dessert.price;
    // Calculate the price
   return `Your meal is ${appetizer.name}, ${main.name}, ${dessert.name}.\nThe price is $${totalPrice}.`;
  }
};

// Call the object and add come course to it
menu.addDishToCourse('appetizers', 'Caesar Salad', 4.25);
menu.addDishToCourse('appetizers', 'Aaesar Salad', 5.25);
menu.addDishToCourse('appetizers', 'Baesar Salad', 6.25);
menu.addDishToCourse('appetizers', 'Daesar Salad', 7.25);
menu.addDishToCourse('mains', 'Lobster', 17.25);
menu.addDishToCourse('mains', 'French Steak', 20.25);
menu.addDishToCourse('mains', 'Taiwan Shark', 21.25);
menu.addDishToCourse('desserts', 'Cake', 3.25);
menu.addDishToCourse('desserts', 'Ice-cream', 4.25);
menu.addDishToCourse('desserts', 'Fruit bowl', 5.25);
// console.log(menu._course);
// menu.appetizers = {name: 13, price: 100}
// console.log(menu.courses);
const meal = menu.generateRandomMeal()
console.log(meal);
