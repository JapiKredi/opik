/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../index";
import * as OpikApi from "../../api/index";
import * as core from "../../core";
import { NumericalFeedbackDetailUpdate } from "./NumericalFeedbackDetailUpdate";
export declare const NumericalFeedbackDefinitionUpdate: core.serialization.ObjectSchema<serializers.NumericalFeedbackDefinitionUpdate.Raw, OpikApi.NumericalFeedbackDefinitionUpdate>;
export declare namespace NumericalFeedbackDefinitionUpdate {
    interface Raw {
        details?: NumericalFeedbackDetailUpdate.Raw | null;
    }
}
