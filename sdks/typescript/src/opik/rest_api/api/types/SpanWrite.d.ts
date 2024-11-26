/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as OpikApi from "../index";
export interface SpanWrite {
    id?: string;
    /** If null, the default project is used */
    projectName?: string;
    traceId: string;
    parentSpanId?: string;
    name: string;
    type: OpikApi.SpanWriteType;
    startTime: Date;
    endTime?: Date;
    input?: OpikApi.JsonNodeWrite;
    output?: OpikApi.JsonNodeWrite;
    metadata?: OpikApi.JsonNodeWrite;
    model?: string;
    provider?: string;
    tags?: string[];
    usage?: Record<string, number>;
}
