/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as OpikApi from "../index";
export declare type FeedbackUpdate = OpikApi.FeedbackUpdate.Numerical | OpikApi.FeedbackUpdate.Categorical;
export declare namespace FeedbackUpdate {
    interface Numerical extends OpikApi.NumericalFeedbackDefinitionUpdate, _Base {
        type: "numerical";
    }
    interface Categorical extends OpikApi.CategoricalFeedbackDefinitionUpdate, _Base {
        type: "categorical";
    }
    interface _Base {
        id?: string;
        name: string;
    }
}
