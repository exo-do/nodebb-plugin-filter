# Recents Filter for NodeBB

This plugin allows to filter topics in the recents page by title name and tags

To use this pluging you MUST put this code in your recent.tpl file of your theme. And put the styles you like :)

```
<!-- Recents Filter Plugin Code -->
	<!-- Recents Filter Plugin Code -->
	<a href="#!" onclick="showHideFilters()"><span class="btn-group"><button class="btn btn-exodo">Filtros<span><i class="fa fa-filter"></i></span></button></span></a>
	<br><br>
	<div id="filtersContainer" style="display:none">
        <div class="col-xs-4">
		<label class="control-label" for="excludedTitleWords"><h5>Filtro de palabras en título</h5>
			<small>Los hilos que contengan alguna de estas palabras en el título se ocultarán.</small>
		</label>
            <br>
            <input class="col-xs-12" type="text" id="excludedTitleWords" placeholder="Separadas por espacios">
        </div>

        <div class="col-xs-4">
		<label class="control-label" for="excludedTags"><h5>Filtro de etiquetas</h5>
			<small>Los hilos que contengan alguna de estas etiquetas se ocultarán.</small>
		</label>
            <br>
            <input class="col-xs-12" type="text" id="excludedTags" placeholder="Separadas por espacios">
        </div>

        <div class="col-xs-4">
		<label class="control-label" for="onlyThisTags"><h5>Filtro de etiquetas</h5>
			<small>Solo los hilos que contengan estas etiquetas serán mostrados</small>
		</label>
            <br>
            <input class="col-xs-12" type="text" id="onlyThisTags" placeholder="Separadas por espacios">
        </div>
	<div class="clearfix"></div>
		<br>
		<br>
        <div clas="pull-right">
		<a align="center" id="submitBtn" href="#!" onclick="saveFilters()" class="btn btn-exodo">Guardar filtros<span><i class="fa fa-cloud"></i></span></a>
	</div>
		<br>
		<br>
    </div>

```