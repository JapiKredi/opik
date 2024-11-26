/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../index";
import * as OpikApi from "../../api/index";
import * as core from "../../core";
export declare const CategoricalFeedbackDetailCreate: core.serialization.ObjectSchema<serializers.CategoricalFeedbackDetailCreate.Raw, OpikApi.CategoricalFeedbackDetailCreate>;
export declare namespace CategoricalFeedbackDetailCreate {
    interface Raw {
        categories: Record<string, number>;
    }
}
