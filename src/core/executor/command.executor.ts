import {IStreamLogger} from "../handlers/stream-logger.interface";
import {ChildProcessWithoutNullStreams} from "child_process";
import {ICommandExec} from "./command.interface";

export abstract class CommandExecutor<Input> {
    constructor(private logger: IStreamLogger) {
    }

    public async execute(): Promise<void> {
        const input = await this.prompt();
        const command = this.build(input);
        const stream = this.spawn(command);
        this.processStream(stream, this.logger);
    }

    abstract prompt(): Promise<Input>;

    abstract build(input: Input): ICommandExec;

    abstract spawn(command: ICommandExec): ChildProcessWithoutNullStreams;

    abstract processStream(stream: ChildProcessWithoutNullStreams, logger: IStreamLogger): void;
}
