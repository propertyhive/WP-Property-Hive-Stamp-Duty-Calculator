function ph_sdcs_add_commas(nStr)
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

// Calculate the LBTT(Land and Buildings Transaction Tax), the Scottish equivalent of Stamp Duty
function ph_sdcs_calculate()
{
    var purchase_price = jQuery('.stamp-duty-calculator-scotland input[name=\'purchase_price\']').val().replace(/,/g, '');

    if ( purchase_price != '' )
    {
        var first_band_threshold = 145000;
        if ( jQuery('#ftb_scotland').is(':checked') )
        {
            // First time buyers get a starting LBTT threshold of 175,000
            first_band_threshold = 175000;
        }

        var bands = [
            { min: 0, max: first_band_threshold, pct: 0 },
            { min: first_band_threshold, max: 250000, pct: 0.02 },
            { min: 250000, max: 325000, pct: 0.05 },
            { min: 325000, max: 750000, pct: 0.1 },
            { min: 750000, max: null, pct: 0.12 }
        ];

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

        if ( jQuery('#btl_second_scotland').is(':checked') && purchase_price >= 40000)
        {
            // When purchasing a second home for £40,000 or more, an Additional Dwelling Supplement of 6% of the purchase price is charged
            additional_tax = purchase_price * 0.06;
            total_tax += additional_tax;
        }

        jQuery(".stamp-duty-calculator-scotland #results input[name=\'stamp_duty\']").val(ph_sdcs_add_commas(total_tax.toFixed(2).replace(".00", "")));

        jQuery('.stamp-duty-calculator-scotland #results').slideDown();
    }
}

jQuery(document).ready(function()
{
    jQuery("body").on('change', '#ftb_scotland', function()
    {
        jQuery('#btl_second_scotland').attr('checked', false);
    });
    jQuery("body").on('change', '#btl_second_scotland', function()
    {
        jQuery('#ftb_scotland').attr('checked', false);
    });

    jQuery("body").on('blur', '.stamp-duty-calculator-scotland input', function()
	{
		ph_sdcs_calculate();
	});
    jQuery("body").on('change', '.stamp-duty-calculator-scotland input', function()
    {
        ph_sdcs_calculate();
    });
    jQuery("body").on('click', '.stamp-duty-calculator-scotland button', function()
	{
		ph_sdcs_calculate();
	});

    ph_sdcs_calculate();
});