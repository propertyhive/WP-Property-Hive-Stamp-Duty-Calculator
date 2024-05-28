function ph_sdcw_add_commas(nStr) {
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

// Calculate the LTT(Land Transaction Tax), the Welsh equivalent of Stamp Duty
function ph_sdcw_calculate() {
  var purchase_price = jQuery(".stamp-duty-calculator-wales input[name='purchase_price']").val().replace(/,/g, '');

  if (purchase_price != '') {
      var bands = [
        { min: 0, max: 225000, pct: 0 },
        { min: 225000, max: 400000, pct: 0.06 },
        { min: 400000, max: 750000, pct: 0.075 },
        { min: 750000, max: 1500000, pct: 0.1 },
        { min: 1500000, max: null, pct: 0.12 },
      ];

      if (jQuery('#btl_second_wales').is(':checked')) {
        if ( purchase_price <= 40000 )
        {
          bands = [
            { min: 0, max: 40000, pct: 0 },
          ];
        }
        else
        {
          bands = [
            { min: 0, max: 180000, pct: 0.04 },
            { min: 180000, max: 250000, pct: 0.075 },
            { min: 250000, max: 400000, pct: 0.09 },
            { min: 400000, max: 750000, pct: 0.115 },
            { min: 750000, max: 1500000, pct: 0.14 },
            { min: 1500000, max: null, pct: 0.16 },
          ];
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

    jQuery(".stamp-duty-calculator-wales #results input[name='stamp_duty']").val(
      ph_sdcw_add_commas(total_tax.toFixed(2).replace('.00', ''))
    );

    jQuery('.stamp-duty-calculator-wales #results').slideDown();
  }
}

jQuery(document).ready(function () {
  jQuery('body').on('blur', '.stamp-duty-calculator-wales input', function () {
    ph_sdcw_calculate();
  });
  jQuery('body').on('change', '.stamp-duty-calculator-wales input', function () {
    ph_sdcw_calculate();
  });
  jQuery('body').on('click', '.stamp-duty-calculator-wales button', function () {
    ph_sdcw_calculate();
  });

  ph_sdcw_calculate();
});
