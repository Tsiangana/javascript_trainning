
        // Use * to import everything from a file
        import * as capitalizeStringTwo from "./22.1_import_and_export";




        // Create an Export Fallback with export default
        export default function subtract(x,y) {return x - y;}




        // Import a Default export
        import subtract from "22.2_import_and_export";

        subtract(7,4);