import { API_AUTH_HANDLER, API_HAS_AUTHED_HANDLER } from 'common/channels';
import { ipcMain } from 'electron';
import { Service } from 'typedi';

import { APIManager } from './APIManager';
import { IHandleable } from './IHandleable';

interface Session {
    username: string;
    userUUID: string;
    accessToken: string;
}

@Service()
export class AuthorizationService implements IHandleable {
    currentSession?: Session;

    constructor(private apiService: APIManager) {}

    initHandlers() {
        ipcMain.handle(API_AUTH_HANDLER, (_, login: string, password: string) =>
            this.authorize(login, password)
        );
        ipcMain.handle(API_HAS_AUTHED_HANDLER, () => this.hasAuthed());
    }

    async authorize(login: string, password: string) {
        this.currentSession = await this.apiService.auth(login, password);
        return this.currentSession.username;
    }

    async hasAuthed() {
        return !!this.currentSession;
    }
}
