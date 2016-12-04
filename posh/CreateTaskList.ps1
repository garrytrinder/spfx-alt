<# Uses PnP-PowerShell - https://github.com/SharePoint/PnP-PowerShell #>

$siteUrl = "https://lundhill.sharepoint.com/sites/pssitedev"

Connect-PnPOnline -Url $siteUrl -Credentials Lundhill
Write-Host "Connected to $($siteUrl)" -ForegroundColor Yellow

$list = Get-PnPList -Identity "Tasks"
if ($list -ne $null){
    Write-Host "Found existing Tasks list... removing..." -ForegroundColor Blue
    Remove-PnPList -Identity "Tasks" -Force
    Write-Host "Removed Tasks list" -ForegroundColor Green
}

New-PnPList -Title "Tasks" -Template "Tasks" -Url "Tasks"
Write-Host "Created Tasks list" -ForegroundColor Green

Add-PnPListItem -List "Tasks" -ContentType "Task" -Values @{ "Title" = "Get Milk"; "AssignedTo" = "garry@lundhill.onmicrosoft.com"; }
Add-PnPListItem -List "Tasks" -ContentType "Task" -Values @{ "Title" = "Send Email"; "AssignedTo" = "garry@lundhill.onmicrosoft.com" }
Add-PnPListItem -List "Tasks" -ContentType "Task" -Values @{ "Title" = "Walk Dog"; "AssignedTo" = "garry@lundhill.onmicrosoft.com" }
Write-Host "Sample tasks created" -ForegroundColor Green

Disconnect-PnPOnline
Write-Host "Disconnected from $($siteUrl)" -ForegroundColor Yellow