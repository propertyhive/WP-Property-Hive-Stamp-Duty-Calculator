function ph_sdc_add_commas(nStr)
{
	nStr += '';
	x = nStr.split('.');
	x1 = x[0];
	x2 = x.length > 1 ? '.' + x[1] : '';
	var rgx = /(\d+)(\d{3})/;
	while (rgx.test(x1)) {
		x1 = x1.replace(rgx, '$1' + ',' + '$2');
	}
	return x1 + x2;
}

function ph_sdc_calculate()
{
	var purchase_price = jQuery('.stamp-duty-calculator input[name=\'purchase_price\']').val().replace(/,/g, '');

    if ( purchase_price != '' )
    {
    	var $stampDuty = 0;
        if (purchase_price > 125000 && purchase_price <= 250000)
        {
            $workingAmount = purchase_price - 125001;
            $am1 = 0;
            $am2 = 0;
            $am3 = 0;
            $am4 = $workingAmount;
        }
        else if (purchase_price > 250000 && purchase_price <= 925000)
        {
            $workingAmount = purchase_price - 250001;
            $am1 = 0;
            $am2 = 0;
            $am3 = $workingAmount;
            $am4 = 250000 - 125001;
        }
        else if (purchase_price > 925000 && purchase_price <= 1500000)
        {
            $workingAmount = purchase_price - 925001;
            $am1 = 0;
            $am2 = $workingAmount;
            $am3 = 925000 - 250001;
            $am4 = 250000 - 125001;
        }
        else if (purchase_price > 1500000)
        {
            $workingAmount = purchase_price - 1500001;
            $am1 = $workingAmount;
            $am2 = 1500000 - 925001;;
            $am3 = 925000 - 250001;
            $am4 = 250000 - 125001;
        }

        $t1 = (12 / 100) * $am1;
        $t2 = (10 / 100) * $am2;
        $t3 = (5 / 100) * $am3;
        $t4 = (2 / 100) * $am4;

        $stampDuty = $t1 + $t2 + $t3 + $t4;

        jQuery(".stamp-duty-calculator #results input[name=\'stamp_duty\']").val(ph_sdc_add_commas($stampDuty.toFixed(2)));
        
        jQuery('.stamp-duty-calculator #results').slideDown();
    }
}

jQuery(document).ready(function()
{
	jQuery("body").on('blur', '.stamp-duty-calculator input', function() 
	{
		ph_sdc_calculate();
	});
	jQuery("body").on('click', '.stamp-duty-calculator button', function() 
	{
		ph_sdc_calculate();
	});
});