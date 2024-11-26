/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../index";
import * as OpikApi from "../../api/index";
import * as core from "../../core";
export declare const DatasetPublic: core.serialization.ObjectSchema<serializers.DatasetPublic.Raw, OpikApi.DatasetPublic>;
export declare namespace DatasetPublic {
    interface Raw {
        id?: string | null;
        name: string;
        description?: string | null;
        created_at?: string | null;
        created_by?: string | null;
        last_updated_at?: string | null;
        last_updated_by?: string | null;
        experiment_count?: number | null;
        dataset_items_count?: number | null;
        most_recent_experiment_at?: string | null;
        last_created_experiment_at?: string | null;
    }
}
