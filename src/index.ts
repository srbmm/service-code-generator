import { servicesFunc } from "./serviceFunc";
import { importFunc } from "./importFunc";
import { formatCode } from "./formatCode";
import { writeFile} from "fs";
import { getServices } from "./getServices";

// Get command-line arguments
const args = process.argv.slice(2);
const OpenApiJsonAddr = args[0] || "http://localhost:8000/openapi.json"; // Default value
const fileSaveAddr = args[1] || "./service.ts"; // Default value

const servicesToString = async () => {
  try {
    const services = await getServices(OpenApiJsonAddr);
    const code = `
    ${importFunc(services)}
    ${servicesFunc(services)}
    `;
    const formattedCode = await formatCode(code);

    writeFile(fileSaveAddr, formattedCode, "utf8", (err) => {
      if (err) {
        console.error("Error writing file:", err);
      } else {
        console.log(`File written successfully to ${fileSaveAddr}`);
      }
    });
  } catch (error) {
    console.error("Error fetching services:", error);
  }
};

servicesToString();
