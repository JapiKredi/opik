/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../index";
import * as OpikApi from "../../api/index";
import * as core from "../../core";
export declare const NumericalFeedbackDetailCreate: core.serialization.ObjectSchema<serializers.NumericalFeedbackDetailCreate.Raw, OpikApi.NumericalFeedbackDetailCreate>;
export declare namespace NumericalFeedbackDetailCreate {
    interface Raw {
        max: number;
        min: number;
    }
}
