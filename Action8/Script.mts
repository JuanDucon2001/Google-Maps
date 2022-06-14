Browser("de Hotel Casa La Riviera").Page("de Hotel Casa La Riviera").Sync @@ script infofile_;_ZIP::ssf57.xml_;_
Browser("de Hotel Casa La Riviera").Navigate "https://www.google.com/maps/dir/Starbucks+-+Parque+El+Virrey,+Cra.+15+%2388-14,+Bogot%C3%A1/Thales+International+Suc.+Colombia,+Cra.+12+%23%2393-8,+Bogot%C3%A1/@4.6754773,-74.0533057,17z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x8e3f9bb2c40f036f:0xf36f3703060f6c17!2m2!1d-74.053498!2d4.6730902!1m5!1m1!1s0x8e3f9a8dfc7c4765:0x6b5fec1b2e355d16!2m2!1d-74.0489233!2d4.6752666!3e0?hl=es-ES" @@ hightlight id_;_527048_;_script infofile_;_ZIP::ssf59.xml_;_

'Validate and Checkpoints
validate_object Browser("de Hotel Casa La Riviera"), Browser("de Hotel Casa La Riviera").Page("de Starbucks - Parque").WebElement("WebElement"), "Bitmap Starbucks", "Success", "Failure", 20 @@ script infofile_;_ZIP::ssf62.xml_;_
Browser("de Hotel Casa La Riviera").Page("de Starbucks - Parque").WebElement("WebElement").Check CheckPoint("Bitmap Starbucks") @@ script infofile_;_ZIP::ssf67.xml_;_
Browser("de Hotel Casa La Riviera").Page("de Starbucks - Parque").WebButton("Detalles").Click @@ script infofile_;_ZIP::ssf69.xml_;_
Browser("de Hotel Casa La Riviera").Page("de Starbucks - Parque_2").Output CheckPoint("Fast Route Starbucks") @@ script infofile_;_ZIP::ssf74.xml_;_
Browser("de Hotel Casa La Riviera").Page("de Starbucks - Parque_2").WebButton("Atrás").Click @@ script infofile_;_ZIP::ssf76.xml_;_
 @@ hightlight id_;_65864_;_script infofile_;_ZIP::ssf7.xml_;_
