function retroceder(ano, mes, dia) {
	dia--;
	if (dia == 0) {
		mes--;
		if (mes == 0) {
			mes = 12;
			ano--;
		}
		dia = mes != 2 ?
			((mes < 8 && mes % 2 == 1) || (mes >= 8 && mes % 2 == 0)) ?
				31
			:
				30
		:
			(ano % 4 == 0 && ano % 100 > 0) ?
				29
			:
				28
		;
	}
	return [addZero(ano), addZero(mes), addZero(dia)];
}

function avancar(ano, mes, dia) {
	if (
		(
			mes != 2 &&
			(
				(mes < 8 && ((mes % 2 == 1 && dia == 31) || (mes % 2 == 0 && dia == 30))) ||
				(mes >= 8 && ((mes % 2 == 0 && dia == 31) || (mes % 2 == 1 && dia == 30)))
			)
		) ||
		(
			mes == 2 &&
			(
				(ano % 4 == 0 && ano % 100 > 0 && dia == 29) ||
				(!(ano % 4 == 0 && ano % 100 > 0) && dia == 28)
			)
		)
	) {
		dia = 1;
		if (mes == 12) {
			mes = 1;
			ano++;
		} else mes++;
	} else dia++;
	return [addZero(ano), addZero(mes), addZero(dia)];
}

function addZero(val) {
	val = val.toString();
	if (val.length < 2) val = "0" + val;
	return val;
}