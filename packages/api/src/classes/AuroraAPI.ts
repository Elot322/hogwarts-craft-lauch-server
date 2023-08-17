import {
    AuthRequestData,
    AuthResponseData,
    ProfileRequestData,
    ProfileResponseData,
    ServersResponseData,
    UpdatesRequestData,
    UpdatesResponseData,
} from "@aurora-launcher/core"
import { Client, Events, Request, Response, ResponseError } from "aurora-rpc-client"

import { APIError } from "./APIError"

export class AuroraAPI {
    #clientInstance

    constructor(url?: string, events?: Events) {
        this.#clientInstance = new Client(url, events)
    }

    public connect(url?: string, events?: Events) {
        return this.#clientInstance.connect(url, events)
    }

    public close(code?: number, data?: string) {
        this.#clientInstance.close(code, data)
    }

    public async auth(login: string, password: string) {
        return await this.#getRequest<AuthRequestData, AuthResponseData>("auth", { login, password })
    }

    public async getServers() {
        return await this.#getRequest<undefined, ServersResponseData>("servers")
    }

    public async getProfile(uuid: string) {
        return await this.#getRequest<ProfileRequestData, ProfileResponseData>("profile", { uuid })
    }

    public async getUpdates(dir: string) {
        return await this.#getRequest<UpdatesRequestData, UpdatesResponseData>("updates", { dir })
    }

    async #getRequest<Req extends Request["params"], Res extends Response["result"]>(
        method: string,
        params?: Req
    ): Promise<Res> {
        try {
            const { result } = await this.#clientInstance.send(method, params)
            return <Res>result
        } catch (error) {
            if (this.#isResponseError(error)) {
                const { code, message } = error.error
                throw new APIError(code, message)
            }
            throw error
        }
    }

    #isResponseError(error: unknown): error is ResponseError {
        return (error as ResponseError).error !== undefined
    }
}
