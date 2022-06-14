 @@ hightlight id_;_921928_;_script infofile_;_ZIP::ssf1.xml_;_
Browser("de Starbucks - Parque").Page("de Starbucks - Parque").Sync @@ script infofile_;_ZIP::ssf34.xml_;_
Browser("de Starbucks - Parque").Navigate "https://www.google.com/maps/dir/Parque+Urbano+El+Virrey,+Cl.+88,+Bogot%C3%A1/Thales+International+Suc.+Colombia,+Cra.+12+%23%2393-8,+Bogot%C3%A1/@4.6752169,-74.0593287,17z/data=!4m14!4m13!1m5!1m1!1s0x8e3f9af2f7f68973:0x5d0f7a15b8905c6!2m2!1d-74.0565422!2d4.6742908!1m5!1m1!1s0x8e3f9a8dfc7c4765:0x6b5fec1b2e355d16!2m2!1d-74.0489233!2d4.6752666!3e0" @@ hightlight id_;_527048_;_script infofile_;_ZIP::ssf36.xml_;_
Browser("de Starbucks - Parque").Page("de Parque Urbano El Virrey,").WebElement("WebElement").Click @@ script infofile_;_ZIP::ssf39.xml_;_

'Validate and Checkpoints
validate_object Browser("de Starbucks - Parque"), Browser("de Starbucks - Parque").Page("de Parque Urbano El Virrey,_2").WebElement("WebElement"),  "Bitmap Virrey", "Success", "Failure", 20 @@ script infofile_;_ZIP::ssf41.xml_;_
Browser("de Starbucks - Parque").Page("de Parque Urbano El Virrey,_2").WebElement("WebElement").Check CheckPoint("Bitmap Virrey") @@ script infofile_;_ZIP::ssf46.xml_;_
Browser("de Starbucks - Parque").Page("de Parque Urbano El Virrey,_2").WebButton("Detalles").Click @@ script infofile_;_ZIP::ssf49.xml_;_
Browser("de Starbucks - Parque").Page("de Parque Urbano El Virrey,_3").Output CheckPoint("Fast Route Virrey") @@ script infofile_;_ZIP::ssf54.xml_;_
Browser("de Starbucks - Parque").Page("de Parque Urbano El Virrey,_3").WebButton("Atrás").Click @@ script infofile_;_ZIP::ssf57.xml_;_
