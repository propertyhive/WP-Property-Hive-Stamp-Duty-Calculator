function ph_sdcc_add_commas(nStr)
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

function ph_sdcc_calculate()
{
    var purchase_price = jQuery('.stamp-duty-calculator-commercial input[name=\'purchase_price\']').val().replace(/,/g, '');

    if ( purchase_price != '' )
    {
        if ( jQuery('#leasehold').length > 0 && jQuery('#leasehold').is(':checked') )
        {
            var bands = [
                { min: 0, max: 150000, pct: 0 },
                { min: 150000, max: 5000000, pct: 0.01 },
                { min: 5000000, max: null, pct: 0.02 },
            ];
        }
        else
        {
            var bands = [
                { min: 0, max: 150000, pct: 0 },
                { min: 150000, max: 250000, pct: 0.02 },
                { min: 250000, max: null, pct: 0.05 },
            ];
        }

        var number_bands = bands.length;
        var total_tax = 0;

        for (var i = 0; i < number_bands; ++i)
        {
            var band = bands[i];
            var max = purchase_price;
            if (band.max != null)
            {
                max = Math.min(band.max, max);
            }

            var taxable_sum = Math.max(0, max - band.min);
            var tax = taxable_sum * band.pct;
            total_tax += tax;
        }

        jQuery(".stamp-duty-calculator-commercial #results input[name=\'stamp_duty\']").val(ph_sdcc_add_commas(total_tax.toFixed(2).replace(".00", "")));

        jQuery('.stamp-duty-calculator-commercial #results').slideDown();
    }
}

jQuery(document).ready(function()
{
    jQuery("body").on('change', '#leasehold', function()
    {
        if ( jQuery('#purchase_price_label').length > 0 )
        {
            if ( jQuery(this).is(':checked') )
            {
                jQuery('#purchase_price_label').text("Net Present Value of Rent (£)");
            }
            else
            {
                jQuery('#purchase_price_label').text("Purchase Price (£)");
            }
        }
    });

    jQuery("body").on('blur', '.stamp-duty-calculator-commercial input', function()
	{
		ph_sdcc_calculate();
	});
    jQuery("body").on('change', '.stamp-duty-calculator-commercial input', function()
    {
        ph_sdcc_calculate();
    });
    jQuery("body").on('click', '.stamp-duty-calculator-commercial button', function()
	{
		ph_sdcc_calculate();
	});

    ph_sdcc_calculate();
});