/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../../index";
import * as OpikApi from "../../../../api/index";
import * as core from "../../../../core";
export declare const FindFeedbackScoreNames1RequestType: core.serialization.Schema<serializers.FindFeedbackScoreNames1RequestType.Raw, OpikApi.FindFeedbackScoreNames1RequestType>;
export declare namespace FindFeedbackScoreNames1RequestType {
    type Raw = "general" | "tool" | "llm";
}
