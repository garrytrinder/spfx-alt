<# Uses PnP-PowerShell - https://github.com/SharePoint/PnP-PowerShell #>

$siteUrl = "<url>"
$jsLinkName = "<name>"

Connect-PnPOnline -Url $siteUrl -Credentials Lundhill
Write-Host "Connected to $($siteUrl)" -ForegroundColor Yellow

Remove-PnPJavaScriptLink -Name $jsLinkName -Force
Write-Host "Removed $($jsLinkName) JavaScript Link" -ForegroundColor Blue

Add-PnPJavaScriptLink -Name $jsLinkName -Url "$($siteUrl)/siteassets/bundle.js"
Write-Host "Added $($jsLinkName) JavaScript Link" -ForegroundColor Green

$web = Get-PnPWeb
$web.AlternateCssUrl = "$($siteUrl)/SiteAssets/vendor.css"
$web.Update()
Execute-PnPQuery

Write-Host "Set AlternateCssUrl on ($siteUrl)" -ForegroundColor Green

Disconnect-PnPOnline
Write-Host "Disconnected from $($siteUrl)" -ForegroundColor Yellow