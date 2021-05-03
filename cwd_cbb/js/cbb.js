/* Center for Bright Beams scripting
   -
   ------------------------------------------------------------------------- */

jQuery(document).ready(function($) {
  
  // Tippy Tooltip WA Enhancement
  $('.tippy-tooltip-text').each(function() {
  	$(this).attr('tabindex','0').attr('role','button');
  	$(this).attr('aria-label', $(this).text() + ': ' + $(this).attr('data-tippy-content') );
  });
});
