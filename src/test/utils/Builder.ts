import "reflect-metadata"
import { ImportMock } from 'ts-mock-imports';
import { registerAllDependecies } from '../../utils/inversionDependecies';

export class Builder {
    constructor() {}

    public build(): Builder {
        return this;
    }

    public finish(): void {
        ImportMock.restore();
        registerAllDependecies();
    }
}