# jQuery Transfer

Transfer is a jQuery plugin designed to add automatic file uploads.

## Installation

To install copy the *images*, *javascripts*, and *stylesheets* directories into your project and add the following snippet to the header:

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js" type="text/javascript"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.8.13/jquery-ui.min.js" type="text/javascript"></script>
    <script src="javascript/jquery.transfer.js" type="text/javascript"></script> 
    <link href="stylesheets/style.css" rel="stylesheet" type="text/css" />
  
## Examples

Setting up a transfer is easy. The following snippet is a good start:
    
    <form>
      <input type="file" class="transfer" />
    </form>

    <script type="text/javascript">
      $('.transfer').transfer();
    </script>

## Copyright

Copyright (c) 2010 - 2011 Kevin Sylvestre. See LICENSE for details.
