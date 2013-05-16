<!DOCTYPE HTML>
<html>
<head>
    <title>Ship Builder</title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <script src="//ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min.js"></script>

    <?php

        findResource('js');
        findResource('css');

        function findResource($dir)
        {
            foreach (glob("$dir/*") as $file)
            {
                if (is_dir($file))
                {
                    findResource($file);
                }
                else if (preg_match("/.js$/", $file) > 0)
                {
                    echo "<script src=\"$file\"></script>";
                }
                else if (preg_match("/.css$/", $file) > 0)
                {
                    echo '<link href="'.
                        $file
                        .'" rel="stylesheet" type="text/css">';
                }
            }
        }
    ?>
    <script>
        jQuery(function()
        {
            var height = window.innerHeight;
            var width = window.innerWidth;
            $("#view").css("height", height+"px");
            $("#view").css("width", (width-300)+"px");

            var dispatcher = new EventDispatcher();

            var shipLayout = new ShipLayout({hullName:"hull1"});
            var ship = new Ship(shipLayout, dispatcher);

            var view = new ShipView(ship, $("#view"), dispatcher);
            var hullEditor = new HullEditor(ship.layout, view, $("#menu"), dispatcher);
            window.ship = ship;

            $(window).resize(resizeView);

            function resizeView()
            {
                var width = window.innerWidth;
                var height = window.innerHeight;
                $("#view").css("width", width+"px");
                $("#view").css("height", height+"px");
            }
        });
    </script>
	</head>
	<body style="padding:0; margin:0;">
        <div id="menu"style="margin:0; padding:0;position:absolute;width:300px;left:0px;top:0px;"></div>
        <div id="view" style="margin: 0 0 0 300px; padding:0; width:800px;position:relative;"></div>
	</body>

</html>