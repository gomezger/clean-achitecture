import "reflect-metadata";
import { mockNavigation, mockToast } from "..";
import { registerAllDependecies } from "../../utils/inversionDependecies";

registerAllDependecies();
mockNavigation();
mockToast();

// execute before 
afterEach(() => {
    jest.clearAllMocks();
})


