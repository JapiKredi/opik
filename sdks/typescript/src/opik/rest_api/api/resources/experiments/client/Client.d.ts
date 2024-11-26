/**
 * This file was auto-generated by Fern from our API Definition.
 */
/// <reference types="node" />
import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as OpikApi from "../../../index";
import * as stream from "stream";
export declare namespace Experiments {
    interface Options {
        environment?: core.Supplier<environments.OpikApiEnvironment | string>;
    }
    interface RequestOptions {
        /** The maximum time to wait for a response in seconds. */
        timeoutInSeconds?: number;
        /** The number of times to retry the request. Defaults to 2. */
        maxRetries?: number;
        /** A hook to abort the request. */
        abortSignal?: AbortSignal;
        /** Additional headers to include in the request. */
        headers?: Record<string, string>;
    }
}
/**
 * Experiment resources
 */
export declare class Experiments {
    protected readonly _options: Experiments.Options;
    constructor(_options?: Experiments.Options);
    /**
     * Find experiments
     *
     * @param {OpikApi.FindExperimentsRequest} request
     * @param {Experiments.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.experiments.findExperiments()
     */
    findExperiments(request?: OpikApi.FindExperimentsRequest, requestOptions?: Experiments.RequestOptions): core.APIPromise<OpikApi.ExperimentPagePublic>;
    /**
     * Create experiment
     *
     * @param {OpikApi.ExperimentWrite} request
     * @param {Experiments.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.experiments.createExperiment({
     *         datasetName: "dataset_name"
     *     })
     */
    createExperiment(request: OpikApi.ExperimentWrite, requestOptions?: Experiments.RequestOptions): core.APIPromise<void>;
    /**
     * Create experiment items
     *
     * @param {OpikApi.ExperimentItemsBatch} request
     * @param {Experiments.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.experiments.createExperimentItems({
     *         experimentItems: [{
     *                 experimentId: "experiment_id",
     *                 datasetItemId: "dataset_item_id",
     *                 traceId: "trace_id"
     *             }]
     *     })
     */
    createExperimentItems(request: OpikApi.ExperimentItemsBatch, requestOptions?: Experiments.RequestOptions): core.APIPromise<void>;
    /**
     * Delete experiment items
     *
     * @param {OpikApi.ExperimentItemsDelete} request
     * @param {Experiments.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.experiments.deleteExperimentItems({
     *         ids: ["ids"]
     *     })
     */
    deleteExperimentItems(request: OpikApi.ExperimentItemsDelete, requestOptions?: Experiments.RequestOptions): core.APIPromise<void>;
    /**
     * Delete experiments by id
     *
     * @param {OpikApi.ExperimentsDelete} request
     * @param {Experiments.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.experiments.deleteExperimentsById({
     *         ids: ["ids"]
     *     })
     */
    deleteExperimentsById(request: OpikApi.ExperimentsDelete, requestOptions?: Experiments.RequestOptions): core.APIPromise<void>;
    /**
     * Find Feedback Score names
     *
     * @param {OpikApi.FindFeedbackScoreNamesRequest} request
     * @param {Experiments.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.experiments.findFeedbackScoreNames()
     */
    findFeedbackScoreNames(request?: OpikApi.FindFeedbackScoreNamesRequest, requestOptions?: Experiments.RequestOptions): core.APIPromise<string[]>;
    /**
     * Get experiment by id
     *
     * @param {string} id
     * @param {Experiments.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link OpikApi.NotFoundError}
     *
     * @example
     *     await client.experiments.getExperimentById("id")
     */
    getExperimentById(id: string, requestOptions?: Experiments.RequestOptions): core.APIPromise<OpikApi.ExperimentPublic>;
    /**
     * Get experiment item by id
     *
     * @param {string} id
     * @param {Experiments.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link OpikApi.NotFoundError}
     *
     * @example
     *     await client.experiments.getExperimentItemById("id")
     */
    getExperimentItemById(id: string, requestOptions?: Experiments.RequestOptions): core.APIPromise<OpikApi.ExperimentItemPublic>;
    /**
     * Stream experiment items
     */
    streamExperimentItems(request: OpikApi.ExperimentItemStreamRequest, requestOptions?: Experiments.RequestOptions): core.APIPromise<stream.Readable>;
}
