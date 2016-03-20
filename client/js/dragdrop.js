	$(document).ready(function() {
		$(".palette").draggable({
		  revert:true
		});
		$(".panels").droppable({
		  drop: function(e, ui) {
		    console.log(ui.draggable)
		    $(this).css("background", ui.draggable.attr("background"));
		  }
		});
	});