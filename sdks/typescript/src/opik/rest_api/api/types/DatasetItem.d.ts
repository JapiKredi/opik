/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as OpikApi from "../index";
export interface DatasetItem {
    id?: string;
    input?: OpikApi.JsonNode;
    expectedOutput?: OpikApi.JsonNode;
    metadata?: OpikApi.JsonNode;
    traceId?: string;
    spanId?: string;
    source: OpikApi.DatasetItemSource;
    data?: OpikApi.JsonNode;
    experimentItems?: OpikApi.ExperimentItem[];
    createdAt?: Date;
    lastUpdatedAt?: Date;
    createdBy?: string;
    lastUpdatedBy?: string;
}
