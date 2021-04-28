<div class="stamp-duty-calculator">

    <label><?php echo __( 'Purchase Price', 'propertyhive' ); ?> (&pound;)</label>
    <input type="text" name="purchase_price" value="<?php echo $atts['price']; ?>" placeholder="e.g. 500,000">

    <label><input type="checkbox" name="new_rates" id="new_rates" value="1"> Property sale will complete on or before 30th of June 2021?</label>
    <label><input type="checkbox" name="new_rates" id="new_rates_two" value="1"> Property sale will complete on or between 1st of July and 30th of September 2021?</label>
    <label><input type="checkbox" name="ftb" id="ftb" value="1"> I'm a first time buyer</label>
    <label><input type="checkbox" name="btl_second" id="btl_second" value="1"> Property is a buy-to-let or second home</label>

    <button><?php echo __( 'Calculate', 'propertyhive' ); ?></button>

    <div class="stamp-duty-calculator-results" id="results" style="display:none">

        <h4><?php echo __( 'Stamp Duty', 'propertyhive' ); ?>:</h4>

        <label><?php echo __( 'Stamp Duty', 'propertyhive' ); ?> (&pound;)</label>
        <input type="text" name="stamp_duty" value="" placeholder="" disabled>
    </div>

</div>