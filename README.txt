=== Property Hive Stamp Duty Calculator ===
Contributors: PropertyHive,BIOSTALL
Tags: stamp duty, stamp duty calculator, stampduty, propertyhive, property hive, property, real estate, estate agents, estate agent
Requires at least: 3.8
Tested up to: 6.6.2
Stable tag: 1.0.21
License: GPLv3
License URI: https://www.gnu.org/licenses/gpl-3.0.html

Quickly and easily add a stamp duty calculator to your website.

== Description ==

This plugin, from the creators of [Property Hive](https://wordpress.org/plugins/propertyhive/), allows you to quickly and easily add a stamp duty calculator to your website by simply adding a shortcode where you want it to appear.

Contains stamp duty calculators for England, Scotland, Wales and Commercial.

The supported shortcodes are as follows:

[stamp_duty_calculator]
[stamp_duty_calculator_scotland]
[stamp_duty_calculator_wales]
[stamp_duty_calculator_commercial]

Users simply enter the purchase price then the stamp duty information is calculated instantly.

[Documentation](https://docs.wp-property-hive.com/category/537-stamp-duty-calculator)

Note: This plugin is independent of Property Hive. You DO NOT need to be using Property Hive to download and use this plugin.

== Installation ==

= Automatic installation =

Automatic installation is the easiest option as WordPress handles the file transfers itself and you don’t need to leave your web browser. To do an automatic install of Property Hive, log in to your WordPress dashboard, navigate to the Plugins menu and click Add New.

In the search field type “Property Hive Stamp Duty Calculator” and click Search Plugins. Once you’ve found our plugin you can view details about it such as the point release, rating and description. Most importantly of course, you can install it by simply clicking “Install Now”.

= Manual installation =

The manual installation method involves downloading the plugin and uploading it to your webserver via your favourite FTP application. The WordPress codex contains [instructions on how to do this here](http://codex.wordpress.org/Managing_Plugins#Manual_Plugin_Installation).

= Updating =

Updating should work like a charm; as always though, ensure you backup your site just in case.

= The Shortcode =

Simply add the shortcode [stamp_duty_calculator], [stamp_duty_calculator_scotland], [stamp_duty_calculator_wales] or [stamp_duty_calculator_commercial] where you want it to appear.

== Screenshots ==

1. Once you've added the shortcode the stamp_duty calculator becomes avalaible for people to complete
2. Users are instantly shown the stamp duty owed once they've completed the form

== Changelog ==

= 1.0.21 =
* Declared support for WordPress 6.6.2

= 1.0.20 =
* Updated README containing shortcodes and docs link

= 1.0.19 =
* Allow both England and Wales stamp duty calculators to be used on the same page
* Declared support for WordPress 6.5.3

= 1.0.18 =
* Purchase price to have autocomplete disabled
* PHP8.2 compatibility
* Declared support for WordPress 6.4.3

= 1.0.17 =
* The Additional Dwelling Supplement (ADS) rate in LBTT calculator raised from 4% to 6% following change in December 2022
* Declared support for WordPress 6.1.1

= 1.0.16 =
* Updated Wales LTT calculator to include new rates that came into effect on 10th October 2022

= 1.0.15 =
* Added support for amended England/NI stamp duty rates introduced September 2022
* Declared support for WordPress 6.0.2

= 1.0.14 =
* Added support for Wales LTT calculator using new shortcode [stamp_duty_calculator_wales]
* Declared support for WordPress 5.9.1

= 1.0.13 =
* Remove references to stamp duty holidays
* Declared support for WordPress 5.8.3

= 1.0.12 =
* Added non-UK buyer option to standard Stamp Duty Calculator
* Changed 'Stamp Duty' reference in Scotland template to 'LBTT'

= 1.0.11 =
* Removed reference to stamp duty rates for sales completing in June (Credit: https://github.com/marktiddy)
* Declared support for WordPress 5.8

= 1.0.10 =
* Declared support for WordPress 5.7.2

= 1.0.9 =
* Added support for amended stamp duty rates on or between 1st of July and 30th of September 2021
* Removed reference to reduced LBTT rates for sales completing in March
* Declared support for WordPress 5.7.1

= 1.0.8 =
* Added support for extended stamp duty holiday until June 20th 2021
* Declared support for WordPress 5.6.2

= 1.0.7 =
* Added support for Scottish LBTT rates by adding new [stamp_duty_calculator_scotland] shortcode
* Added support for commercial property stamp duty rates by adding new [stamp_duty_calculator_commercial] shortcode
* Declared support for WordPress 5.6.1

= 1.0.6 =
* Includes the new 2020/21 temporary reduced rates
* Declared support for WordPress 5.4.2

= 1.0.5 =
* Added ability to pass in 'price' attribute to shortcode for when being used on a property page
* Declared support for WordPress 4.9.8

= 1.0.4 =
* Update to include 2017 budget changes regading first time buyers
* Declared support for WordPress 4.9.1

= 1.0.3 =
* Provided ability to override template by creating a copy in yourtheme/propertyhive/stamp-duty-calculator.php
* Declared support for WordPress 4.7.3

= 1.0.2 =
* Fix odd formatting of recently added checkbox
* Declared support for WordPress 4.7

= 1.0.1 =
* Cater for Buy-To-Let and second homes where rates differ

= 1.0.0 =
* First working release of the plugin