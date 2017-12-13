=== UCF Charts Plugin ===
Contributors: ucfwebcom
Tags: charts, chart.js, shortcodes
Requires at least: 4.7.5
Tested up to: 4.7.6
Stable tag: 1.0.1
License: GPLv3 or later
License URI: http://www.gnu.org/copyleft/gpl-3.0.html

Provides custom post type and shortcode for creating chart.js charts and graphs.


== Description ==

Provides custom post type and shortcode for creating [chart.js](http://www.chartjs.org/) charts and graphs. The shortcode accepts a json data and options file, and the provided javascript file creates the appropriate chart based on the chart type provided.


== Installation ==

= Manual Installation =
1. Upload the plugin files (unzipped) to the `/wp-content/plugins` directory, or install the plugin through the WordPress plugins screen directly.
2. Activate the plugin through the "Plugins" screen in WordPress
3. Update any settings necessary on the Settings > UCF Charts page.

= WP CLI Installation =
1. `$ wp plugin install --activate https://github.com/UCF/UCF-Charts-Plugin/archive/master.zip`.  See [WP-CLI Docs](http://wp-cli.org/commands/plugin/install/) for more command options.
2. Update any settings necessary on the Settings > UCF Charts page.


== Changelog ==

= 1.0.1 =
Bug Fixes:
* Fixed bug related to first time click on file
* Updated shortcode to generate id based on post id and not slug
* Fixed expected chart ID value when attempting to generate a chart legend

= 1.0.0 =
* Initial Release


== Upgrade Notice ==

n/a


== Installation Requirements ==

None


== Development & Contributing ==

NOTE: this plugin's readme.md file is automatically generated.  Please only make modifications to the readme.txt file, and make sure the `gulp readme` command has been run before committing readme changes.
