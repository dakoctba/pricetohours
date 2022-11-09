// Em en
// onkeypress="return (event.charCode >= 48 && event.charCode <= 57) || event.charCode == 46 || event.charCode == 0"
// Em pt-br
// onkeypress="return (event.charCode >= 48 && event.charCode <= 57) ||  event.charCode == 44 || event.charCode == 0"

console.log("ok");

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
