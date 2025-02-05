module.exports = {
    APP_NAME: "Master - Cdn",
    SUCCESS: {
        SUCCESS: "Success",
        FETCH_SUCCESS: "Successfuly Found Data",
        FILES: "Successfuly Send Files",
        FILE: "Successfuly Send File",
    },
    VALIDATION: {
        NOT_ALLOWED: "Field ( {Field} ) Is Not Allowed",
        REQUIRED_FIELD: "Field ( {Field} ) Is Required Can't Be Empty",
        ALLOWED_ARRAY: "Field ( {Field} )  Must Be Array",
        INVALIDKEY: "Not Allowed This Value In Field ( {Field} )",
        ALLOWED_DATE_ONLY: "Field ( {Field} )  Must Be Date",
        ALLOWED_STRING: "Field ( {Field} )  Must Be String",
        ARRAY_MIN: "Field ( {Field} ) Can Not Be Less Than {min} Items",
        REQUIRED: {},
        CUSTOM: {
            Type : "Type Provided Is Not Allowed",
        },
        PATTERN: {},
    },
    ERRORS: {
        // ================ SERVER ERROR ================
        SERVER_ERROR: "Internal Server Error",
         // ============== Authrizathion Failed ====================
        ORIGIN_NOT_ALLOWED: "Not Allowed Connection",
        // ================ WHATSAPP CONNECTION ================
        Route_NOT_FOUND: "Route Not Found Or May Be Deleted Or May Be Changed",
        File_NOT_FOUND: "File Not Found Or May Be Deleted",
        List_NOT_FOUND: "Sorry But We Didn't Found Data For {Compound}",
        Session_NOT_FOUND: "No Connection Found For {key} Please Make Sure You Are Connected",
        WHATSAPP_ACCOUNT_NOT_EXISTS: `No WhatsApp Account Exists For {SessionKey} Please Make Sure You Are Using The Correct Number`,
        FAIL_TO_CREATE_NOTIFICATION_FILE : "Failed To Upload Notification File",
    },
};
