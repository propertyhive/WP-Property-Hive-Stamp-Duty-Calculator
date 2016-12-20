<?php
/**
 * Plugin Name: Property Hive Stamp Duty Calculator
 * Plugin Uri: http://wp-property-hive.com/addons/stamp-duty-calculator/
 * Description: Quickly and easily add a stamp duty calculator to your website using a simple shortcode 
 * Version: 1.0.2
 * Author: PropertyHive
 * Author URI: http://wp-property-hive.com
 */

if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly

if ( ! class_exists( 'PH_Stamp_Duty_Calculator' ) ) :

final class PH_Stamp_Duty_Calculator {

    /**
     * @var string
     */
    public $version = '1.0.2';

    /**
     * @var Property Hive The single instance of the class
     */
    protected static $_instance = null;
    
    /**
     * Main Property Hive Stamp Duty Calculator Instance
     *
     * Ensures only one instance of Property Hive Stamp Duty Calculator is loaded or can be loaded.
     *
     * @static
     * @return Property Hive Stamp Duty Calculator - Main instance
     */
    public static function instance() 
    {
        if ( is_null( self::$_instance ) ) 
        {
            self::$_instance = new self();
        }
        return self::$_instance;
    }

    /**
     * Constructor.
     */
    public function __construct() {

        $this->id    = 'stampdutycalculator';
        $this->label = __( 'Stamp Duty Calculator', 'propertyhive' );

        // Define constants
        $this->define_constants();

        // Include required files
        $this->includes();

        add_action( 'wp_enqueue_scripts', array( $this, 'load_stamp_duty_calculator_scripts' ) );
        add_action( 'wp_enqueue_scripts', array( $this, 'load_stamp_duty_calculator_styles' ) );

        add_shortcode( 'stamp_duty_calculator', array( $this, 'propertyhive_stamp_duty_calculator_shortcode' ) );
    }

    /**
     * Define PH Stamp Duty Calculator Constants
     */
    private function define_constants() 
    {
        define( 'PH_STAMP_DUTY_CALCULATOR_PLUGIN_FILE', __FILE__ );
        define( 'PH_STAMP_DUTY_CALCULATOR_VERSION', $this->version );
    }

    private function includes()
    {
        //include_once( dirname( __FILE__ ) . "/includes/class-ph-map-search-install.php" );
    }

    public function propertyhive_stamp_duty_calculator_shortcode( $atts )
    {
        $atts = shortcode_atts( array(
            
        ), $atts );

        wp_enqueue_style( 'ph-stamp-duty-calculator' );

        wp_enqueue_script( 'jquery' );
        wp_enqueue_script( 'ph-stamp-duty-calculator' );

        ob_start();
?>
    <div class="stamp-duty-calculator">

        <label><?php echo __( 'Purchase Price', 'propertyhive' ); ?> (&pound;)</label>
        <input type="text" name="purchase_price" value="" placeholder="500,000">

        <label><input type="checkbox" name="btl_second" id="btl_second" value="1"> Property is a buy-to-let or second home</label>

        <button><?php echo __( 'Calculate', 'propertyhive' ); ?></button>

        <div class="stamp-duty-calculator-results" id="results" style="display:none">

            <h4><?php echo __( 'Stamp Duty', 'propertyhive' ); ?>:</h4>

            <label><?php echo __( 'Stamp Duty', 'propertyhive' ); ?> (&pound;)</label>
            <input type="text" name="stamp_duty" value="" placeholder="" disabled>
        </div>

    </div>
<?php
        return ob_get_clean();
    }

    public function load_stamp_duty_calculator_scripts() {

        $assets_path = str_replace( array( 'http:', 'https:' ), '', untrailingslashit( plugins_url( '/', __FILE__ ) ) ) . '/assets/';

        wp_register_script( 
            'ph-stamp-duty-calculator', 
            $assets_path . 'js/propertyhive-stamp-duty-calculator.js', 
            array(), 
            PH_STAMP_DUTY_CALCULATOR_VERSION,
            true
        );
    }

    public function load_stamp_duty_calculator_styles() {

        $assets_path = str_replace( array( 'http:', 'https:' ), '', untrailingslashit( plugins_url( '/', __FILE__ ) ) ) . '/assets/';

        wp_register_style( 
            'ph-stamp-duty-calculator', 
            $assets_path . 'css/propertyhive-stamp-duty-calculator.css', 
            array(), 
            PH_STAMP_DUTY_CALCULATOR_VERSION
        );
    }
}

endif;

/**
 * Returns the main instance of PH_Stamp_Duty_Calculator to prevent the need to use globals.
 *
 * @since  1.0.0
 * @return PH_Stamp_Duty_Calculator
 */
function PHSDC() {
    return PH_Stamp_Duty_Calculator::instance();
}

PHSDC();