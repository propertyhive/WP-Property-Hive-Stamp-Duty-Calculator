<div class="stamp-duty-calculator-scotland">

    <label><?php echo __( 'Purchase Price', 'propertyhive' ); ?> (&pound;)</label>
    <input type="text" name="purchase_price" value="<?php echo $atts['price']; ?>" placeholder="e.g. 500,000">

    <label><input type="checkbox" name="ftb_scotland" id="ftb_scotland" value="1"> I'm a first time buyer</label>
    <label><input type="checkbox" name="btl_second_scotland" id="btl_second_scotland" value="1"> Property is a buy-to-let or second home</label>

    <button><?php echo __( 'Calculate', 'propertyhive' ); ?></button>

    <div class="stamp-duty-calculator-results-scotland" id="results" style="display:none">

        <h4><?php echo __( 'LBTT', 'propertyhive' ); ?>:</h4>

        <label><?php echo __( 'LBTT', 'propertyhive' ); ?> (&pound;)</label>
        <input type="text" name="stamp_duty" value="" placeholder="" disabled>
    </div>

</div>