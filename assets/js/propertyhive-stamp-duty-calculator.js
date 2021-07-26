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
    if (jQuery('#new_rates').is(':checked')) {
      // Updated bands following changes that last until end of
     var bands = [
       {
         min: 0,
         max: 250000,
         pct: 0
       },
       {
         min: 250000,
         max: 925000,
         pct: 0.05
       },
       {
         min: 925000,
         max: 1500000,
         pct: 0.1
       },
       {
         min: 1500000,
         max: null,
         pct: 0.12
       },
     ];

      if (jQuery('#btl_second').is(':checked')) {
        bands = [{
            min: 0,
            max: 250000,
            pct: 0.03
          },
          {
            min: 250000,
            max: 925000,
            pct: 0.08
          },
          {
            min: 925000,
            max: 1500000,
            pct: 0.13
          },
          {
            min: 1500000,
            max: null,
            pct: 0.15
          },
        ];
      }
      //New conditional to take into account July-September holiday starts here
    } else {
      var bands = [
        { min: 0, max: 125000, pct: 0 },
        { min: 125000, max: 250000, pct: 0.02 },
        { min: 250000, max: 925000, pct: 0.05 },
        { min: 925000, max: 1500000, pct: 0.1 },
        { min: 1500000, max: null, pct: 0.12 },
      ];

      if (jQuery('#btl_second').is(':checked')) {
        bands = [
          { min: 0, max: 125000, pct: 0.03 },
          { min: 125000, max: 250000, pct: 0.05 },
          { min: 250000, max: 925000, pct: 0.08 },
          { min: 925000, max: 1500000, pct: 0.13 },
          { min: 1500000, max: null, pct: 0.15 },
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

    if (
      
      jQuery('#ftb').is(':checked') &&
      purchase_price <= 500000
    ) {
      
      purchase_price = purchase_price - 300000;
      purchase_price = Math.max(0, purchase_price);
      total_tax = purchase_price * 0.05;
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
