var fullWidth = $(".bestsellers_product").width() * $(".bestsellers_product").size();
var viewWidth = $("#bestsellers_slider").width();

$("#bestsellers_previous").click(function(){slideBestsellers(false)});
$("#bestsellers_next").click(function(){slideBestsellers(true)});

function slideBestsellers(toTheRight) {
	left = parseInt($("#bestsellers_products").css("left"));
	
	if (toTheRight) {
		// Slide the bestsellers right
		if (left - viewWidth <= -1 * fullWidth) {
			// Need to reset back to the start as there are no more products to the right
			newLeft = 0;
		} else {
			// There are still more products to see so slide right
			newLeft = left - viewWidth;
		}
	} else {
		// Slide the bestsellers left
		if (left + viewWidth > 0) {
			// Need to go to the end as there are no more products to the left
			var lastPageIndex = Math.ceil(fullWidth / viewWidth) - 1;
			newLeft = viewWidth * lastPageIndex * -1;
		} else {
			// There are still more products to see so slide left
			newLeft = left + viewWidth;
		}
	}
	
	$("#bestsellers_products").animate(
		{left: newLeft},
		400  // Time for animation in milliseconds (1000 = 1 second)
	);
}