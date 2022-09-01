import {IStreamLogger} from "../../core/handlers/stream-logger.interface";

export class ConsoleLogger implements IStreamLogger {
    private static instance: ConsoleLogger;

    end(): void {
        console.log('Done!');
    }

    error(...args: any[]): void {
        console.error(...args);
    }

    log(...args: any[]): void {
         console.log(...args)
    }

    public static getInstance(): ConsoleLogger {
        if (!ConsoleLogger.instance) {
            ConsoleLogger.instance = new ConsoleLogger();
        }

        return ConsoleLogger.instance;
    }
}
