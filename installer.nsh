!macro customInstall
  DetailPrint "Starting custom installation..."
  
  ; -----------------------------
  ; Step 1: Install CH340 USB Driver
  ; -----------------------------
  ${If} ${FileExists} "$INSTDIR\resources\bin\CH341SER.EXE"
    DetailPrint "CH340 driver installer found"
    
    ; Ask user if they want to install the driver
    MessageBox MB_YESNO|MB_ICONQUESTION "Device USB driver (CH340) needs to be installed for proper device recognition.$\r$\n$\r$\nWould you like to install it now?" IDYES install_driver IDNO skip_driver
    
    install_driver:
      DetailPrint "Installing CH340 USB driver..."
      ExecWait '"$INSTDIR\resources\bin\CH341SER.EXE" /S' $0
      ${If} $0 == 0
        DetailPrint "CH340 driver installed successfully"
        MessageBox MB_OK|MB_ICONINFORMATION "Driver installation completed.$\r$\n$\r$\nPlease disconnect and reconnect your device for proper recognition."
      ${Else}
        DetailPrint "CH340 driver installation failed with code $0"
        MessageBox MB_OK|MB_ICONEXCLAMATION "Driver installation failed. You may need to install it manually for proper Device recognition."
      ${EndIf}
      Goto driver_done
    
    skip_driver:
      DetailPrint "Skipping CH340 driver installation"
      MessageBox MB_OK|MB_ICONINFORMATION "Driver installation skipped.$\r$\n$\r$\nIf your Device is not recognized, you may need to install the CH340 driver manually."
    
    driver_done:
      DetailPrint "Driver installation process completed"
  ${Else}
    DetailPrint "CH340 driver installer not found"
  ${EndIf}
  
  ; -----------------------------
  ; Step 2: Install Arduino AVR Core
  ; -----------------------------
  ${If} ${FileExists} "$INSTDIR\resources\bin\arduino-cli.exe"
    DetailPrint "Arduino CLI found, installing AVR core..."
    ExecWait '"$INSTDIR\resources\bin\arduino-cli.exe" core update-index' $1
    ExecWait '"$INSTDIR\resources\bin\arduino-cli.exe" core install arduino:avr' $2

    ${If} $2 == 0
      DetailPrint "Arduino AVR core installed successfully"
    ${Else}
      DetailPrint "Arduino AVR core installation failed with code $2"
      MessageBox MB_OK|MB_ICONEXCLAMATION "Arduino AVR core installation failed. Please run 'arduino-cli core install arduino:avr' manually."
    ${EndIf}
  ${Else}
    DetailPrint "arduino-cli.exe not found, skipping AVR core installation"
  ${EndIf}
  
  DetailPrint "Custom installation completed"
!macroend

!macro customUnInstall
  DetailPrint "Starting custom uninstallation..."
  RMDir /r "$APPDATA\arduino-cli"
  DetailPrint "Cleaned up your Device CLI configuration"
!macroend
