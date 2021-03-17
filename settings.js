module.exports = {
    /* GENERAL */

    //What initializes a command
    prefix: "&",
    //What the bot's playing status will show
    status: "Created by Milky#4284 and Helped by Orange#0568",
    //true - Deleted & edited messages are logged to a text channel called #logs
    logMessages: true,
    //true - A basic anti-spam is enabled. Deleted flooded messages
    antispam: true,
    //true - Deletes Discord invite links
    antiinvite: true,
    //true - Deletes links that are known ip loggers (Ineffective for masked links)
    antiIPLog: true,
    //true - The bot will attempt to respond if a message starts with a bot mention
    //It sucks by the way... Might add an option to use a paid service
    chatbot: false,
    //The bot will remute members on guild join if they left the guild while muted
    antiMuteBypass: true,
    //The bot will check if a message contains messages that matches the checkers from settings.autoresponders
    autoResponder: true,
    //Hopefully you can figure out the pattern
    //"Uhhh hello world!!!" -> Bot responds with  "Hello world!"
    //"Uhhh hello planet!!!" -> Bot responds with  "Hello world!"
    autoResponders: {
        checkers: [
            [["hello", "hi"],["world", "planet"]],
            [["dm", "message", "pm"], "me"],
        ],
        responses: [
            "Hello world!",
            "You called?",
        ],
        dmPreferreds: [
            false,
            true
        ]
    },
    //false/empty string will disable the welcome message
    welcomeMessage: "Welcome to the guild! You can find this bot's source at https://github.com/2JJ1/Private-Discord-Bot.",
    //Array of strings that should not be contained in a newly joined user's name
    //Useful to ban people/fake bots who are acting as an imposter for your brand
    bannedNameContainment: [],
    /*true - Throttles message handling according to settings.messageThrottleOptions
    Useful to prevent the bot from being overloaded if it is on a weak server. This may conflict with anti-spam
    when the throttling is activated*/
    throttleMessages: true,
    throttleMessagesOptions: {
        maxCalls: 40*15, //How many calls per time frame
		timeFrame: 15, //Time frame in seconds
    },
    //Enables invite tracker. Logs to #logs who joined, from what invite, and who owns the invite. Useful to determine a raid host
    trackInvites: true,

    /* COMMANDS - FUN */

    funCommands: {
        //false - Disables all fun commands
        enabled: true,
        //true - Allows use of the "eightball|8ball" command
        eightball: true,
        //true - Allows use of the "compile" command
        compile: true,
        //true - Allows use of the "joke" command
        joke: true,
        //true - Allows use of the "meme" command
        meme: true,
        //true - Allows use of the "roast" command
        roast: true,
    },

    /* COMMANDS - MODERATOR */

    modCommands: {
        //false - Disables all moderator commands
        enabled: true,
        //true - Allows the "mute" command to be used
        mute: true,
        //true - Allows the "unmute" command to be used
        unmute: true,
        //true - Allows use of the "addminimod" command
        addMinimod: true,
        //true - Limits bans/kicks to 25 per 24 hours
        //Aka anti-nuke
        rateLimitKicks: true,
        //true - Allows use of the "ban" command
        ban: true,
        //true - Allows use of the "unban" command
        unban: true,
        //true - Allows use of the "kick" command
        kick: true,
        //true - Allows use of the "purge" command
        purge: true,
        //true - Allows use of the "removeMinimod" command
        removeMinimod: true,
        //true - Allows use of the "warn" command
        warn: true,
        //true - Allows use of the "unwarn" command
        unwarn: true,
        //true - Allows use of the "slowmode" command
        //"!slowmode 5" Each user can only send one message every 5 seconds
        slowMode: true,
        //The max seconds the slowmode command will set the SLOWMODE
        maxSlowMode: 10,
        //An array of role ids that can be used with the "addrole" and "removerole" commands
        //Populating the array enables the command
        addRoleWhitelist: [],
        //true - Allows use of the "reboot" command
        reboot: true,
    },

    /* COMMANDS - ADMIN */

    adminCommands: {
        //false - Disables all admin commands
        enabled: true,
        //true - Allows the "clearbans" command to be used
        clearBans: true,
        //true - Allows the "clearmutes" command to be used
        clearMutes: true,
        //true - Allows the "clearwarns" command to be used
        clearWarns: true,
        //true - Allows the "removemoderator" command to be used
        clearWarns: true,
    }
}