/**
 * Defines the current user authorization infos.
 * @class
 */
export class AuthModel {
	/** username Represents current username. @property {string}*/
    username: string;
	/** User displayed name. @property {string}*/
    fullname: string;
    /** token Represents current user token. @property {string}*/
    token: string;
	/** refresh Represents current user refresh token. @property {string}*/
    refresh: string;
    /** is the user technical @property {Boolean} */
    profile: string;
}
