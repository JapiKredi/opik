/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../index";
import * as OpikApi from "../../api/index";
import * as core from "../../core";
export declare const ErrorMessageDetail: core.serialization.ObjectSchema<serializers.ErrorMessageDetail.Raw, OpikApi.ErrorMessageDetail>;
export declare namespace ErrorMessageDetail {
    interface Raw {
        code?: number | null;
        message?: string | null;
        details?: string | null;
    }
}
