@echo off
echo PLEASE DO NOT CLOSE OUT OF THIS WINDOW
echo Mapped drive is being connected
echo Window will close in 30 seconds
@Timeout /t 30 /nobreak
Net use <drive_letter>: "<unc_path>" <password> /user:<domain>\<user>
:: Net use <drive_letter2>: "<unc_path>" <password> /user:<domain>\<user> ...

:: Do not remove the quotation marks for <unc_path>, particularly if the path includes spaces
:: Only use the IP address is the unc_path if it is configured with a static IP
:: Do not use the same drive letter more than once