import os from "os";
import fs from "fs";
// Function to display ASCII art of Arch Linux logo
function displayArchLogo() {
  if (getDistroName() === "arch") {
    console.log(
      `\x1b[34m` +
        `
                  ##
                 ####
                ######
               ########
              ##########
             ############
            ##############
           ################
          ##################
         ####################
        ######################
       #########      #########
      ##########      ##########
     ###########      ###########
    ##########          ##########
   #######                  #######
  ####                          ####
 ###                              ###
    ` +
        "\x1b[0m",
    );
  } else {
    console.log("lol");
  }
}

function getDistroName() {
  try {
    const releaseInfo = fs.readFileSync("/etc/os-release", "utf8");
    const lines = releaseInfo.split("\n");
    for (const line of lines) {
      if (line.startsWith("ID_LIKE=")) {
        return line.split("=")[1].replace(/"/g, "");
      }
    }
  } catch (err) {
    console.error("Error reading OS release information:", err);
  }
  return "Unknown";
}

// Display ASCII art of Arch Linux logo in blue
displayArchLogo();

// Get and display the name of the distribution
console.log("Distribution:", getDistroName());
console.log("Home directory:", os.homedir());
