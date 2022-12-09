import { IncomingMessage, ServerResponse } from "http"

import { container } from "tsyringe"

import { AbstractRequest } from "./requests/AbstractRequest"
import { ProfilesRequest } from "./requests/authlib/accountsHost/ProfilesRequest"
import { PrivelegesRequest } from "./requests/authlib/servicesHost/PrivelegesRequest"
import { HasJoinedRequest } from "./requests/authlib/sessionHost/HasJoinedRequest"
import { JoinRequest } from "./requests/authlib/sessionHost/JoinRequest"
import { ProfileRequest } from "./requests/authlib/sessionHost/ProfileRequest"
import { InjectorRequest } from "./requests/InjectorRequest"
import { WebRequest } from "./WebRequest"
import { WebResponse } from "./WebResponse"

export class WebRequestManager {
    private requests: AbstractRequest[] = []

    constructor() {
        this.registerRequests([
            container.resolve(InjectorRequest),
            container.resolve(ProfilesRequest),
            container.resolve(PrivelegesRequest),
            container.resolve(ProfileRequest),
            container.resolve(JoinRequest)
        ])
    }

    registerRequests(requests: AbstractRequest[]): void {
        requests.forEach(request => {
            this.requests.push(request)
        })
    }

    async getRequest(req: IncomingMessage, res: ServerResponse) {
        res.setHeader("X-Authlib-Injector-API-Location", "/authlib")
        const request = this.requests.find((r) => r.url.test(req.url))

        const webRequest = new WebRequest(req)
        const webResponse = new WebResponse(res)

        // Нижние 2 обработчика корректны для api.mojang.com и authserver.mojang.com
        if (request === undefined) return webResponse.sendError(404)
        if (request.method !== req.method) return webResponse.sendError(405)
        request.emit(webRequest, webResponse)
    }
}
