import { container, InjectionToken } from "tsyringe";
import { FunctionInjection } from "./FunctionInjection";

export function resolveDependecy<T>(token: InjectionToken<FunctionInjection<T>>): T { 
    return container.resolve<FunctionInjection<T>>(token)();
}
