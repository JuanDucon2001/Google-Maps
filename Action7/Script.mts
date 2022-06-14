 @@ hightlight id_;_65864_;_script infofile_;_ZIP::ssf7.xml_;_
Browser("de Centro 93 torre norte").Page("de Centro 93 torre norte").Sync @@ script infofile_;_ZIP::ssf93.xml_;_
Browser("de Centro 93 torre norte").Navigate "https://www.google.com/maps/dir/Hotel+Casa+La+Riviera,+Cl.+103+%2311b-26,+Bogot%C3%A1/Thales+International+Suc.+Colombia,+Cra.+12+%23%2393-8,+Bogot%C3%A1/@4.6813233,-74.0524875,16z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x8e3f9abe560e34bd:0xa3e6887e6d2f2e67!2m2!1d-74.0435328!2d4.6860493!1m5!1m1!1s0x8e3f9a8dfc7c4765:0x6b5fec1b2e355d16!2m2!1d-74.0489233!2d4.6752666!3e0" @@ hightlight id_;_527048_;_script infofile_;_ZIP::ssf95.xml_;_

'Validate and Checkpoints
validate_object Browser("de Centro 93 torre norte"), Browser("de Centro 93 torre norte").Page("de Hotel Casa La Riviera").WebElement("WebElement"), "Bitmap Hotel", "Success", "Failure", 20 @@ script infofile_;_ZIP::ssf97.xml_;_
Browser("de Centro 93 torre norte").Page("de Hotel Casa La Riviera").WebElement("WebElement").Check CheckPoint("Bitmap Hotel") @@ script infofile_;_ZIP::ssf102.xml_;_
Browser("de Centro 93 torre norte").Page("de Hotel Casa La Riviera").WebButton("Detalles").Click @@ script infofile_;_ZIP::ssf106.xml_;_
Browser("de Centro 93 torre norte").Page("de Hotel Casa La Riviera_2").Output CheckPoint("Fast Route Hotel") @@ script infofile_;_ZIP::ssf111.xml_;_
Browser("de Centro 93 torre norte").Page("de Hotel Casa La Riviera_2").WebButton("Atrás").Click @@ script infofile_;_ZIP::ssf114.xml_;_
 @@ hightlight id_;_65864_;_script infofile_;_ZIP::ssf20.xml_;_
