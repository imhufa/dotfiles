Invoke-CimMethod -ClassName Win32_Process -MethodName "Create" -Arguments @{ Path = "pwsh.exe" } >$null