function ph_sdc_add_commas(nStr) {
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

function ph_sdc_calculate() {
  var purchase_price = jQuery(
    ".stamp-duty-calculator input[name='purchase_price']"
  )
    .val()
    .replace(/,/g, '');

  if (purchase_price != '') {
      var bands = [
        { min: 0, max: 250000, pct: 0 },
        { min: 250000, max: 925000, pct: 0.05 },
        { min: 925000, max: 1500000, pct: 0.1 },
        { min: 1500000, max: null, pct: 0.12 },
      ];

      if (jQuery('#btl_second').is(':checked')) {
        bands = [
            { min: 0, max: 250000, pct: 0.03 },
            { min: 250000, max: 925000, pct: 0.08 },
            { min: 925000, max: 1500000, pct: 0.13 },
            { min: 1500000, max: null, pct: 0.15 },
        ];
      }

    if (jQuery('#buyer_overseas').is(':checked')) {

        for (var i = 0; i < bands.length; ++i) {
            var band_with_surcharge = bands[i].pct + 0.02;

            bands[i].pct = +band_with_surcharge.toFixed(2);
        }
    }

    var number_bands = bands.length;
    var total_tax = 0;

    for (var i = 0; i < number_bands; ++i) {
      var band = bands[i];
      var max = purchase_price;
      if (band.max != null) {
        max = Math.min(band.max, max);
      } else {
      }
      var taxable_sum = Math.max(0, max - band.min);
      var tax = taxable_sum * band.pct;
      total_tax += tax;
    }

    if (
      jQuery('#ftb').is(':checked') &&
      purchase_price <= 625000
    ) {

        if (jQuery('#buyer_overseas').is(':checked')) {
            // Overseas buyers get a 2% surcharge so calculate 2% tax on the amount up to the first £300,000
            // For first time buyers, this is 0% for the first £300,000
            var first_band_amount = Math.min(300000, purchase_price);
            total_tax = first_band_amount * 0.02;

            var tax_rate = 0.07;
        } else {
            var tax_rate = 0.05;
            total_tax = 0;
        }
      
      purchase_price = purchase_price - 425000;
      purchase_price = Math.max(0, purchase_price);
      total_tax += purchase_price * tax_rate;
    }

    jQuery(".stamp-duty-calculator #results input[name='stamp_duty']").val(
      ph_sdc_add_commas(total_tax.toFixed(2).replace('.00', ''))
    );

    jQuery('.stamp-duty-calculator #results').slideDown();
  }
}

jQuery(document).ready(function () {
  jQuery('body').on('change', '#ftb', function () {
    jQuery('#btl_second').attr('checked', false);
  });
  jQuery('body').on('change', '#btl_second', function () {
    jQuery('#ftb').attr('checked', false);
  });

  jQuery('body').on('blur', '.stamp-duty-calculator input', function () {
    ph_sdc_calculate();
  });
  jQuery('body').on('change', '.stamp-duty-calculator input', function () {
    ph_sdc_calculate();
  });
  jQuery('body').on('click', '.stamp-duty-calculator button', function () {
    ph_sdc_calculate();
  });

  ph_sdc_calculate();
});
