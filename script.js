//Piilotetaan kerätyt tuotteet
$("#valmis").hide();
//Piilotetaanpainikkeet 1,2,3
$(".btn1, .btn2, .btn3").hide();
//Luodaan tekstikenttä
$('form').on('submit', function(e) {
	e.preventDefault();
//Luodaan muuttuja. Tähän muuttujaan tulevat tiedot tekstikentästä
	var uusiTuote = $('#tavarat').val();
	//luodaan div-elementti tuotteille
	var elementtiTuotteille = $('<div>')
	//Luodaan checkbox, josta kuitataan ostokset kerätyiksi
		.append('<input type="checkbox">')
		//Lisätään luokka tavarat
		.addClass('tavarat')
		//Lisätään elementti uusiTuote tietoja
		.append(uusiTuote);
	$('#keräämättä').append(elementtiTuotteille);
});

$('body').on('click', 'input[type="checkbox"]', function() {
	//Luodaan muuttuja tavarat
	var tavarat = $(this).parents('.tavarat');
//Tarkistaa onko luokan nimi kerätty
	if(tavarat.hasClass('kerätty')) {
		//Poistaa luokan kerätty
		tavarat.removeClass('kerätty');
		//Lisää elementin keräämättömien perään
		tavarat.appendTo($('#keräämättä'));
	} else {
		//Lisää luokan kerätty
		tavarat.addClass('kerätty');
		//Lisää elementin valiiden perään
		tavarat.appendTo($('#valmis'));
	}
	//Näyttää painikkeen 1.
	$(".btn1").show();
	//Aktivoi painikkeen 1
	$(".btn1").click(function(){
		//Näyttää Id:llä valmis olevat tiedot
		$("#valmis").show();
		//Piilotetaan painike 1
		$(".btn1").hide();
		//Piilotetaan Id:n tavarat tiedot
		$("#tavarat").hide();
		//Painike 2 ja 3 tulevat näkyviin
		$(".btn2, .btn3").fadeIn();
	});
	//Aktivoi painikkeen 2
	$(".btn2").click(function(){
		//Näyttää Id:llä valmis olevat tiedot
		$("#valmis").show();
		//Piilotetaan painike 1 ja 2
		$(".btn1, .btn2").hide();
		//Näyttää painikkeen 3.
		$(".btn3").show();
		//Näyttää Id:llä tavarat olevat tiedot
		$("#tavarat").show();
		//Piilotetaan tiedot Id:stä valmis
		$("#valmis").hide();
	});
	//Aktivoi painikkeen 3
	$(".btn3").click(function(){
		//Poistaa ID:n valmis tiedot
		$("#valmis").remove();
		//Painikkeet 1 ja 2 ja 3 poistuvat nähtäviltä
		$(".btn1, .btn2, .btn3").fadeOut();
		//Piilotetaan tiedot Id:stä tavarat, keräämättä ja valmis
		$("#tavarat, #keräämättä, #valmis").fadeOut();
		//Muuttaa otsikkotekstin.
		$("h1").html("Olet juuri tyhjentänyt" + "<br>ostoslistasi!");
	});
});