function makeProduct(
	id,
	categoryName,
	serial,
	image,
	cost,
	prevCost,
	stock,
	isOnDiscount,
	isForCredit
) {
	return {
		_id: id,
		name: categoryName,
		serial: serial,
		image: image,
		cost: cost,
		prevCost: prevCost,
		stock: stock,
		isOnDiscount: isOnDiscount,
		isForCredit: isForCredit,
	}
}

export const prods = [
	makeProduct(
		0,
		'Холодильная камера Hansa FM1337.3RAA Красный',
		'СП-00032943',
		'/images/Frame 3.png',
		'25 990 ₽',
		'35 800 ₽',
		true,
		true,
		true
	),
	makeProduct(
		1,
		'Встраиваемый холодильник Hansa BK315.3',
		'СП-00032943',
		'/images/Frame 32.png',
		'40 990 ₽',
		'50 800 ₽',
		true,
		false,
		true
	),
	makeProduct(
		2,
		'Духовой шкаф Hansa BOES64111 Черный',
		'СП-00032943',
		'/images/Frame 31.png',
		'17 990 ₽',
		'25 850 ₽',
		true,
		false,
		true
	),
	makeProduct(
		3,
		'Посудомоечная машина Hansa ZWV414WH',
		'СП-00032943',
		'/images/Frame 34.png',
		'24 490 ₽',
		'28 500 ₽',
		true,
		true,
		true
	),
	makeProduct(
		4,
		'Dарочная поверхность Hansa BHCS38120030',
		'СП-00032943',
		'/images/Frame 23.png',
		'25 990 ₽',
		'35 800 ₽',
		true,
		false,
		true
	),
	makeProduct(
		5,
		'Стиральная машина Hansa WHE1041',
		'СП-00032943',
		'/images/Frame 534.png',
		'40 990 ₽',
		'50 800 ₽',
		true,
		true,
		true
	),
	makeProduct(
		6,
		'Lуховой шкаф Hansa BOEW68162 Белый',
		'СП-00032943',
		'/images/Frame 6.png',
		'17 990 ₽',
		'25 850 ₽',
		true,
		false,
		true
	),
	makeProduct(
		7,
		'Стиральная машина Hansa WHE1041',
		'СП-00032943',
		'/images/Frame 3.png',
		'40 990 ₽',
		'50 800 ₽',
		true,
		true,
		true
	),
]
