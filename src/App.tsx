import darkTheme from "@/lib/themes/darkTheme";
import {AppRoutes} from "./routes/AppRoutes";
import {ChakraProvider} from "@chakra-ui/react";

function App() {
    return (
        <ChakraProvider theme={darkTheme}>
            <AppRoutes />
        </ChakraProvider>
    );
}

export default App;
