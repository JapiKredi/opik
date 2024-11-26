/**
 * This file was auto-generated by Fern from our API Definition.
 */
export interface PromptVersionDetail {
    /** version unique identifier, generated if absent */
    id?: string;
    promptId?: string;
    /** version short unique identifier, generated if absent. it must be 8 characters long */
    commit?: string;
    template: string;
    variables?: string[];
    createdAt?: Date;
    createdBy?: string;
}
