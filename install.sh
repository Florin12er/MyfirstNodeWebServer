#!/usr/bin/sh

# Define the source and target file paths
SOURCE_FILE="nodefetch"
TARGET_DIRECTORY="/usr/local/bin"
TARGET_FILE="nodefetch"

# Copy the script to the target directory
sudo cp "$SOURCE_FILE" "$TARGET_DIRECTORY/$TARGET_FILE"

# Add execute permissions to the script
sudo chmod +x "$TARGET_DIRECTORY/$TARGET_FILE"

echo "Installation complete. You can now run 'nodefetch' from the terminal."

