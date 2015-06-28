
(function(RencentsFilter) {
	
	init = function()
	{
		$(window).on('action:ajaxify.contentLoaded', function () {
		});
	}


	showHideFilters = function()
	{
		if($("#filtersContainer").is(":visible"))
		{
			$("#filtersContainer").hide();
		}
		else
		{
			$("#filtersContainer").show();
		}
	}

	saveFilters = function()
	{}

	init();

})(window.RecentsFilter);

