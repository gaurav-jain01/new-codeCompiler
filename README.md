# CYE Uploader - A Kid-Friendly Arduino IDE

CYE Uploader is an Electron-based desktop application that provides a kid-friendly interface for programming Arduino microcontrollers. It features a modern React-based UI with code editing capabilities and seamless Arduino compilation and upload functionality.

## Features

- 🎯 **Kid-Friendly Interface**: Clean, intuitive UI designed for young learners
- 📝 **Code Editor**: Built-in Monaco editor with syntax highlighting
- 🔌 **Arduino Integration**: Automatic Arduino device detection and connection
- ⚡ **One-Click Upload**: Compile and upload code to Arduino with a single click
- 🖥️ **Cross-Platform**: Available for Windows, macOS, and Linux
- 🎨 **Modern UI**: Built with React and Tailwind CSS

## Prerequisites

### For Development
- Node.js (v16 or higher)
- npm (v8 or higher)
- Git

### For Arduino Programming
- Arduino board (Uno, Nano, Mega, etc.)
- USB cable to connect Arduino to computer
- CH340 driver (for Arduino clones) - automatically installed on Windows

## Installation

### 1. Clone the Repository
```bash
git clone <repository-url>
cd CYE-Compiler
```

### 2. Install Dependencies
```bash
# Install main dependencies
npm install

# Install renderer dependencies
cd renderer
npm install
cd ..
```

### 3. Download Platform-Specific Binaries

#### For Windows
The Windows binaries (`arduino-cli.exe` and `CH341SER.EXE`) are already included in the `bin/` directory.

#### For macOS
Run the provided script to download Arduino CLI for macOS:
```bash
chmod +x download-mac-binaries.sh
./download-mac-binaries.sh
```

**Important**: For macOS, you'll need to manually install the CH340 driver:
1. Download from: https://github.com/adrianmihalko/ch340g-ch34g-ch34x-mac-os-x-driver
2. Follow the installation instructions

#### For Linux
You'll need to download the appropriate Arduino CLI binary for your Linux distribution and place it in the `bin/` directory.

## Development

### Running in Development Mode
```bash
# Start both React dev server and Electron
npm run electron-dev
```

This will:
- Start the React development server on `http://localhost:3000`
- Launch Electron with hot reloading enabled
- Open developer tools automatically

### Building the React Frontend
```bash
npm run react-build
```

### Testing Production Build
```bash
npm run test-prod
```

## Building for Distribution

### Building for All Platforms
```bash
# Build React frontend first
npm run react-build

# Build for all platforms
npm run build
```

### Platform-Specific Builds

#### Windows
```bash
npm run build:win
```
Creates a Windows installer (NSIS) in the `dist/` directory.

#### macOS
```bash
npm run build:mac
```
Creates a macOS DMG file in the `dist/` directory.

#### Linux
```bash
npm run build:linux
```
Creates Linux AppImage and other formats in the `dist/` directory.

## Building for macOS Desktop Version

### Prerequisites for macOS Build
1. **macOS Development Machine**: You need a Mac to build the macOS version
2. **Xcode Command Line Tools**: Install via `xcode-select --install`
3. **Code Signing Certificate**: For distribution outside the App Store

### Step-by-Step macOS Build Process

1. **Prepare the Environment**
   ```bash
   # Ensure you're on macOS
   uname -a
   
   # Install dependencies
   npm install
   cd renderer && npm install && cd ..
   ```

2. **Download macOS Binaries**
   ```bash
   chmod +x download-mac-binaries.sh
   ./download-mac-binaries.sh
   ```

3. **Build the React Frontend**
   ```bash
   npm run react-build
   ```

4. **Build the macOS Application**
   ```bash
   npm run build:mac
   ```

5. **Find the Built Application**
   - The DMG file will be created in `dist/` directory
   - Look for `CYE_Uploader_<version>.dmg`

### Code Signing (Optional but Recommended)

For distribution outside the Mac App Store, you should code sign your application:

1. **Get a Developer Certificate**
   - Sign up for Apple Developer Program ($99/year)
   - Create a Developer ID Application certificate

2. **Configure Code Signing**
   Add to your `package.json` build configuration:
   ```json
   "mac": {
     "target": "dmg",
     "icon": "assets/icon.ico",
     "artifactName": "CYE_Uploader_${version}.${ext}",
     "category": "public.app-category.developer-tools",
     "identity": "Developer ID Application: Your Name (TEAM_ID)"
   }
   ```

3. **Notarization (Required for macOS 10.15+)**
   ```bash
   # After building, notarize the app
   xcrun notarytool submit CYE_Uploader_1.0.0.dmg --keychain-profile "notarytool-profile" --wait
   ```

### Troubleshooting macOS Build Issues

1. **Missing Arduino CLI**: Ensure the macOS Arduino CLI is downloaded and executable
2. **Permission Issues**: Run `chmod +x bin/arduino-cli` if needed
3. **Code Signing Errors**: Check your certificate and provisioning profile
4. **Gatekeeper Issues**: For testing, right-click the app and select "Open"

## Usage

### First Run
1. Launch the application
2. Connect your Arduino board via USB
3. The app will automatically detect your Arduino
4. Start coding in the editor!

### Writing and Uploading Code
1. Write your Arduino code in the editor
2. Click the "Upload" button
3. The app will:
   - Compile your code
   - Detect the connected Arduino
   - Upload the code to your board
   - Show progress and results

### Supported Arduino Boards
- Arduino Uno
- Arduino Nano
- Arduino Mega
- Arduino Leonardo
- Most Arduino-compatible boards

## Project Structure

```
CYE-Compiler/
├── main/                   # Electron main process
│   ├── main.js            # Main application logic
│   ├── pathManager.js     # Path management utilities
│   └── preload.js         # Preload script for security
├── renderer/              # React frontend
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── App.js         # Main React app
│   │   └── ...
│   └── build/             # Built React app (after npm run react-build)
├── bin/                   # Platform-specific binaries
│   ├── arduino-cli.exe    # Windows Arduino CLI
│   ├── arduino-cli        # macOS/Linux Arduino CLI
│   └── CH341SER.EXE       # Windows CH340 driver
├── assets/                # Application assets
│   └── icon.ico           # Application icon
├── dist/                  # Built applications
└── package.json           # Main package configuration
```

## Development Scripts

| Script | Description |
|--------|-------------|
| `npm start` | Start Electron in development mode |
| `npm run react-start` | Start React development server only |
| `npm run react-build` | Build React frontend for production |
| `npm run electron-dev` | Start both React and Electron in dev mode |
| `npm run test-prod` | Test production build locally |
| `npm run build` | Build for all platforms |
| `npm run build:win` | Build Windows installer |
| `npm run build:mac` | Build macOS DMG |
| `npm run build:linux` | Build Linux AppImage |

## Troubleshooting

### Common Issues

1. **Arduino Not Detected**
   - Ensure Arduino is connected via USB
   - Check if CH340 driver is installed (for clones)
   - Try different USB ports
   - Restart the application

2. **Compilation Errors**
   - Check your Arduino code syntax
   - Ensure you're using supported Arduino functions
   - Check the output terminal for detailed error messages

3. **Upload Failures**
   - Verify Arduino is connected and detected
   - Try pressing the reset button on Arduino before upload
   - Check USB cable connection
   - Ensure no other applications are using the serial port

4. **macOS Build Issues**
   - Ensure you're building on macOS
   - Check Xcode Command Line Tools installation
   - Verify Arduino CLI is downloaded and executable
   - Check code signing certificate if applicable

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For issues and questions:
1. Check the troubleshooting section above
2. Search existing issues on GitHub
3. Create a new issue with detailed information

## Acknowledgments

- Built with [Electron](https://electronjs.org/)
- Frontend powered by [React](https://reactjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Code editor by [Monaco Editor](https://microsoft.github.io/monaco-editor/)
- Arduino integration via [Arduino CLI](https://arduino.github.io/arduino-cli/)
