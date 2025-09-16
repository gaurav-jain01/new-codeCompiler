#!/bin/bash

# Download macOS Arduino CLI
echo "Downloading Arduino CLI for macOS..."
curl -fsSL https://downloads.arduino.cc/arduino-cli/arduino-cli_latest_macOS_64bit.tar.gz | tar -xz -C bin/

# Make it executable
chmod +x bin/arduino-cli

echo "macOS Arduino CLI downloaded successfully!"
echo "Location: bin/arduino-cli"

# Note about CH340 driver
echo ""
echo "Note: CH340 driver for macOS needs to be installed manually:"
echo "https://github.com/adrianmihalko/ch340g-ch34g-ch34x-mac-os-x-driver"
