<div class="stamp-duty-calculator-commercial">

    <label id="purchase_price_label"><?php echo __( 'Purchase Price', 'propertyhive' ); ?> (&pound;)</label>
    <input type="text" name="purchase_price" value="<?php echo $atts['price']; ?>" placeholder="e.g. 500,000">

    <label><input type="checkbox" name="leasehold" id="leasehold" value="1"> Calculate net present value (NPV) of rent on a lease?</label>

    <button><?php echo __( 'Calculate', 'propertyhive' ); ?></button>

    <div class="stamp-duty-calculator-results-commercial" id="results" style="display:none">

        <h4><?php echo __( 'Stamp Duty', 'propertyhive' ); ?>:</h4>

        <label><?php echo __( 'Stamp Duty', 'propertyhive' ); ?> (&pound;)</label>
        <input type="text" name="stamp_duty" value="" placeholder="" disabled>
    </div>

</div>