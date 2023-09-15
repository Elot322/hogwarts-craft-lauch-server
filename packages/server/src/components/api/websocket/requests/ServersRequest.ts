import { Server, ServersResponseData } from "@aurora-launcher/core";
import { ProfilesManager } from "@root/components/profiles";
import { AbstractRequest } from "aurora-rpc-server";
import { injectable } from "tsyringe";

@injectable()
export class ServersRequest extends AbstractRequest {
    method = "servers";

    constructor(private profilesManager: ProfilesManager) {
        super();
    }

    /**
     * It returns a list of servers.
     * @returns An array of objects.
     */
    invoke(): ServersResponseData {
        const servers: Server[] = [];

        this.profilesManager.profiles
            .sort((a, b) => a.sortIndex - b.sortIndex)
            .forEach((profile) => {
                profile.servers.forEach(({ ip, port, title }) => {
                    servers.push({
                        ip,
                        port,
                        title,
                        profileUUID: profile.uuid,
                    });
                });
            });

        return servers;
    }
}