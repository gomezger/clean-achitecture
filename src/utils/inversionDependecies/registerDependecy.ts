import { container, InjectionToken } from "tsyringe";
import { FunctionInjection } from "./FunctionInjection";

export function registerDependecy<T>(token: InjectionToken<FunctionInjection<T>>, provider: FunctionInjection<T>): void {
    container.register<() => T>(token, { useValue: provider });
}

export function registerMockDependecy<T>(token: InjectionToken<FunctionInjection<T>>, provider: T): void {
    container.register<() => T>(token, { useValue: () => provider });
}
