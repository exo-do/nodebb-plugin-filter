
(function(RencentsFilter) {
	
	init = function()
	{
		$(window).on('action:ajaxify.contentLoaded', filterTopics);
		$(window).on('action:topics.loaded', filterTopics);
		$(window).on('action:categories.loaded', filterTopics);
	}

	filterTopics = function(){
		var excludedTitleWords = $("#excludedTitleWords");
		var excludedTags = $("#excludedTags");
		var onlyThisTags = $("#onlyThisTags");
		var topicCreationFilter = $("#topicCreation");

		if(excludedTags && (document.URL.indexOf("/recent") >=0 || document.URL.indexOf("/category") >=0)  )
		{
			socket.emit("plugins.getRecentsFilters", {}, function(err, res){
				if(!err && res)
				{
					var filters = JSON.parse(res);
					localStorage.recentFilters = res;
					excludedTitleWords.val(filters.excludedTitleWords);
					excludedTags.val(filters.excludedTags);
					onlyThisTags.val(filters.onlyThisTags);
					topicCreationFilter.val(filters.topicCreationFilter);
					filterRecentsList();
				}
			});
		}
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
	{
		var excludedTitleWords = $("#excludedTitleWords").val();
		var excludedTags = $("#excludedTags").val();
		var onlyThisTags = $("#onlyThisTags").val();
		var topicCreationFilter = $("#topicCreation").val();
		socket.emit("plugins.updateRecentsFilters", {excludedTitleWords:excludedTitleWords, excludedTags:excludedTags, onlyThisTags:onlyThisTags, topicCreationFilter:topicCreationFilter}, function(err, res){
			if(err)
			{
				app.alert({
					type: 'danger',
					timeout: 3000,
					title: "Filtros",
					message: "Error al guardar!",
					alert_id: 'post_success'
				});
			}
			else
			{
				app.alert({
					type: 'success',
					timeout: 3000,
					title: "Filtros",
					message: "Guardados correctamente!",
					alert_id: 'post_success'
				});
			}
		});
		filterRecentsList();
	}

	filterRecentsList = function()
	{
		var topics = $(".category-item");
		topics.hide();

		var excludedTitleWords = $("#excludedTitleWords").val().split(" ");
		var excludedTags = $("#excludedTags").val().split(" ");
		var onlyThisTags = $("#onlyThisTags").val().split(" ");
		var topicCreationFilter = $("#topicCreation").val();

		for(var i=0;i<topics.length;i++)
		{
			var title = $(topics[i]).find(".topic-title").text().toLowerCase();
			var tags = $(topics[i]).find(".fa.fa-tags").attr("title");

			for(var j=0;j<onlyThisTags.length;j++)
			{
				if(title.indexOf(onlyThisTags[j]) >= 0)
				{
					$(topics[i]).show();
				}
			}

			for(var j=0;j<excludedTitleWords.length;j++)
			{
				if(title.indexOf(excludedTitleWords[j]) >= 0 && excludedTitleWords[j] != "")
				{
					$(topics[i]).hide();
				}
			}

			for(var j=0;j<excludedTags.length;j++)
			{
				if(tags && tags.indexOf(excludedTags[j]) >= 0 && excludedTags[j] != "")
				{
					$(topics[i]).hide();
				}
			}

			var topicCreation = $(topics[i]).find(".timeago").attr("title");
			var topicCreationSince = moment(topicCreation).fromNow();
			var numberSince = parseInt(topicCreationSince.match(/[0-9]+/ig));
			if(numberSince >= topicCreationFilter && topicCreationSince.indexOf("month")>=0 )
			{
				$(topics[i]).hide();
			}
			
		}
	}

	init();

})(window.RecentsFilter);

