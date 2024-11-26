/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../index";
import * as OpikApi from "../../api/index";
import * as core from "../../core";
export declare const SpanType: core.serialization.Schema<serializers.SpanType.Raw, OpikApi.SpanType>;
export declare namespace SpanType {
    type Raw = "general" | "tool" | "llm";
}
