dir1=Environment.Value("Park")
 @@ script infofile_;_ZIP::ssf90.xml_;_
 Browser("Thales International Suc.").Page("Thales International Suc.").Image("Cómo llegar").Click @@ script infofile_;_ZIP::ssf641.xml_;_
Browser("Thales International Suc.").Page("Google Maps").WebEdit("Punto de partida Parque").Set dir1 @@ script infofile_;_ZIP::ssf645.xml_;_
Browser("Thales International Suc.").Page("Google Maps").WebButton("Buscar").Click @@ script infofile_;_ZIP::ssf647.xml_;_
 @@ script infofile_;_ZIP::ssf122.xml_;_

'Validate and Checkpoints
validate_object Browser("Thales International Suc."), Browser("Thales International Suc.").Page("de Parque de los Hippies").WebElement("WebElement"), "Bitmap Hippies", "Success", "Failure", 20 @@ script infofile_;_ZIP::ssf650.xml_;_
Browser("Thales International Suc.").Page("de Parque de los Hippies").WebElement("WebElement").Check CheckPoint("Bitmap Hippies") @@ script infofile_;_ZIP::ssf655.xml_;_
Browser("Thales International Suc.").Page("de Parque de los Hippies").WebButton("Detalles").Click @@ script infofile_;_ZIP::ssf657.xml_;_
Browser("Thales International Suc.").Page("de Parque de los Hippies").Output CheckPoint("Fast Route Hippies") @@ script infofile_;_ZIP::ssf660.xml_;_
Browser("Thales International Suc.").Page("de Parque de los Hippies").WebButton("Atrás").Click @@ script infofile_;_ZIP::ssf662.xml_;_


