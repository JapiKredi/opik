/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../../index";
import * as OpikApi from "../../../../api/index";
import * as core from "../../../../core";
export declare const GetSpansByProjectRequestType: core.serialization.Schema<serializers.GetSpansByProjectRequestType.Raw, OpikApi.GetSpansByProjectRequestType>;
export declare namespace GetSpansByProjectRequestType {
    type Raw = "general" | "tool" | "llm";
}
