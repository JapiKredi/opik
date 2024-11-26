/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../index";
import * as OpikApi from "../../api/index";
import * as core from "../../core";
import { SpanWriteType } from "./SpanWriteType";
import { JsonNodeWrite } from "./JsonNodeWrite";
export declare const SpanWrite: core.serialization.ObjectSchema<serializers.SpanWrite.Raw, OpikApi.SpanWrite>;
export declare namespace SpanWrite {
    interface Raw {
        id?: string | null;
        project_name?: string | null;
        trace_id: string;
        parent_span_id?: string | null;
        name: string;
        type: SpanWriteType.Raw;
        start_time: string;
        end_time?: string | null;
        input?: JsonNodeWrite.Raw | null;
        output?: JsonNodeWrite.Raw | null;
        metadata?: JsonNodeWrite.Raw | null;
        model?: string | null;
        provider?: string | null;
        tags?: string[] | null;
        usage?: Record<string, number> | null;
    }
}
