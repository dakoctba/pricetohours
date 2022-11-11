// Em en
// onkeypress="return (event.charCode >= 48 && event.charCode <= 57) || event.charCode == 46 || event.charCode == 0"
// Em pt-br
// onkeypress="return (event.charCode >= 48 && event.charCode <= 57) ||  event.charCode == 44 || event.charCode == 0"

function calc(event) {
    let _cost = document.getElementById('cost').value;
    let _wage = document.getElementById('wage').value;

    _cost = _cost.replace(/\D/g, "");
    _wage = _wage.replace(/\D/g, "");

    console.log('_cost ~> '+ _cost);
    console.log('_wage ~> '+ _wage);
    console.log(_cost / _wage + ' horas');
}

function cost(event) {
    if ((event.charCode >= 48 && event.charCode <= 57) || event.charCode == 46 || event.charCode == 0) {
        console.log('cost ok...')
        return;
    } else {
        console.error('cost nok');
    }
}

function wage(event) {
    if ((event.charCode >= 48 && event.charCode <= 57) || event.charCode == 46 || event.charCode == 0) {
        console.log('wage ok...')
        return;
    } else {
        console.error('wage nok');
    }
}
