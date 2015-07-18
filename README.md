# Recents Filter for NodeBB

This plugin allows to filter topics in the recents page by title name and tags

To use this pluging you MUST put this code in your recent.tpl file of your theme. And put the styles you like :)

```
<!-- Recents Filter Plugin Code -->
	<a href="#!" onclick="showHideFilters()">Filtros <i class="fa fa-long-arrow-right"></i></a>
	<div id="filtersContainer" style="display:none">
		<div class="col-xs-4">
			<label class="control-label" for="excludedTitleWords">Filtro de palabras en título (los hilos que contengan alguna de estas palabras en el título se ocultarán)</label>
			<br>
			<input class="col-xs-12" type="text" id="excludedTitleWords" placeholder="Separadas por espacios">
		</div>

		<div class="col-xs-4">
			<label class="control-label" for="excludedTags">Filtro de etiquetas (los hilos que contengan alguna de estas etiquetas se ocultarán)</label>
			<br>
			<input class="col-xs-12" type="text" id="excludedTags" placeholder="Separadas por espacios">
		</div>
		
		<div class="col-xs-4">
			<label class="control-label" for="onlyThisTags">Filtro de etiquetas (solo los hilos que contengan estas etiquetas serán mostrados)</label>
			<br>
			<input class="col-xs-12" type="text" id="onlyThisTags" placeholder="Separadas por espacios">
		</div>
		<br>
		<br>
		<a align="center" id="submitBtn" href="#!" onclick="saveFilters()" class="btn btn-primary left">Guardar filtros</a>
		<br>
		<br>
	</div>

```