Browser("de Parque de los Hippies").Page("de Parque de los Hippies").Sync @@ script infofile_;_ZIP::ssf226.xml_;_
Browser("Browser").Navigate "https://www.google.com/maps/dir/Centro+93+torre+norte,+Cl.+93a+%2314-17,+Bogot%C3%A1,+Cundinamarca/Thales+International+Suc.+Colombia,+Cra.+12+%23%2393-8,+Bogot%C3%A1/@4.6765725,-74.051302,18z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x8e3f9a928ded626b:0x2148af57551f5e8a!2m2!1d-74.051579!2d4.67679!1m5!1m1!1s0x8e3f9a8dfc7c4765:0x6b5fec1b2e355d16!2m2!1d-74.0489233!2d4.6752666!3e0" @@ hightlight id_;_527048_;_script infofile_;_ZIP::ssf230.xml_;_
 @@ script infofile_;_ZIP::ssf4.xml_;_
'Validate and Checkpoints
validate_object Browser("Browser") , Browser("Browser").Page("de Centro 93 torre norte").WebElement("WebElement"), "Bitmap Center 93", "Success", "Failure", 20 @@ script infofile_;_ZIP::ssf232.xml_;_
Browser("Browser").Page("de Centro 93 torre norte").WebElement("WebElement").Check CheckPoint("Bitmap Center 93") @@ script infofile_;_ZIP::ssf237.xml_;_
Browser("Browser").Page("de Centro 93 torre norte").WebButton("Detalles").Click @@ script infofile_;_ZIP::ssf239.xml_;_
Browser("Browser").Page("de Centro 93 torre norte_2").Output CheckPoint("Fast Route Center 93") @@ script infofile_;_ZIP::ssf244.xml_;_
Browser("Browser").Page("de Centro 93 torre norte_2").WebButton("Atrás").Click @@ script infofile_;_ZIP::ssf246.xml_;_
