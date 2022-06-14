'Close Navigator @@ script infofile_;_ZIP::ssf24.xml_;_
SystemUtil.CloseProcessByName  "chrome.exe"
'Open Navigator
Systemutil.Run "chrome.exe", "https://www.google.com/maps" 

Browser("Google Maps").Page("Google Maps").WebEdit("Buscar en Google Maps").Set "Thales" @@ script infofile_;_ZIP::ssf748.xml_;_
Browser("Google Maps").Page("Google Maps").WebButton("Buscar").Click @@ script infofile_;_ZIP::ssf750.xml_;_

'Verifying Info thales @@ script infofile_;_ZIP::ssf34.xml_;_
Browser("Google Maps").Page("Thales International Suc._4").WebElement("Cra. 12 ##93-8, Bogotá").Check CheckPoint("Address") @@ script infofile_;_ZIP::ssf755.xml_;_
Browser("Google Maps").Page("Thales International Suc._4").WebElement("thalesgroup.com").Check CheckPoint("URL") @@ script infofile_;_ZIP::ssf758.xml_;_
Browser("Google Maps").Page("Thales International Suc._4").WebElement("(1) 7442442").Check CheckPoint("Contact Phone") @@ script infofile_;_ZIP::ssf761.xml_;_
Browser("Google Maps").Page("Thales International Suc._4").WebElement("Cra. 12 ##93-8, Bogotá").Output CheckPoint("Address_2") @@ script infofile_;_ZIP::ssf764.xml_;_
Browser("Google Maps").Page("Thales International Suc._4").WebElement("thalesgroup.com").Output CheckPoint("URL_2") @@ script infofile_;_ZIP::ssf767.xml_;_
Browser("Google Maps").Page("Thales International Suc._4").WebElement("(1) 7442442").Output CheckPoint("Contact Phone_2") @@ script infofile_;_ZIP::ssf770.xml_;_


