function makeProductCategory(categoryName, categoryIcon, productsCount) {
	return {
		categoryName: categoryName,
		categoryIcon: categoryIcon,
		productsCount: productsCount,
	}
}

export const prodCat = [
	makeProductCategory('Духовые шкафы', '/icons/oven.svg', 20),
	makeProductCategory('Отдельностоящие плиты', '/icons/Vector.svg', 180),
	makeProductCategory('Посудомоечные машины', '/icons/dishwasher.svg', 35),
	makeProductCategory('Варочные поверхности', '/icons/hob.svg', 45),
	makeProductCategory('Вытяжки', '/icons/extractor-hood.svg', 8),
	makeProductCategory('Микроволновые печи', '/icons/microwave-oven.svg', 14),
	makeProductCategory('Стиральные машины', '/icons/washing-machine.svg', 32),
	makeProductCategory('Холодильники', '/icons/friegje.svg', 78),
]
