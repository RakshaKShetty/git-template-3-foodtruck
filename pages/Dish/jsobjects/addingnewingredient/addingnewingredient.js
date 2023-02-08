export default {
	
	run: () => {
		insert_dish.run(
(data) => {
storeValue("newDishId", data[0]['id']);
Insert_Dish_Details.run();

Insert_Ingredients.run();
showAlert('Added Dish successfully','success')

}
)
	}
}