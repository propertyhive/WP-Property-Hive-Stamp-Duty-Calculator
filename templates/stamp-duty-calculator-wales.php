<div class="stamp-duty-calculator-wales">

    <label><?php echo __( 'Purchase Price', 'propertyhive' ); ?> (&pound;)</label>
    <input type="text" name="purchase_price" value="<?php echo $atts['price']; ?>" placeholder="e.g. 500,000">

    <label><input type="checkbox" name="btl_second_wales" id="btl_second_wales" value="1"> Property is a buy-to-let or second home</label>

    <button><?php echo __( 'Calculate', 'propertyhive' ); ?></button>

    <div class="stamp-duty-calculator-results-wales" id="results" style="display:none">

        <h4><?php echo __( 'LTT', 'propertyhive' ); ?>:</h4>

        <label><?php echo __( 'LTT', 'propertyhive' ); ?> (&pound;)</label>
        <input type="text" name="stamp_duty" value="" placeholder="" disabled>
    </div>

</div>