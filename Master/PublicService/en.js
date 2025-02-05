const MergedCustom = {
    Type: "Invalid Type Provided Please Make Sure The Type Is Correct",
    RequiredValue: "Value Is Required"
};
const Lang = {
    APP_NAME: "Master",
    SUCCESS: {
        SUCCESS: "Success"
    },
    // VALIDATION.REQUIRED
    VALIDATION: {
        NOT_ALLOWED: "Field ( {Field} ) Is Not Allowed",
        REQUIRED_FIELD: "Field ( {Field} ) Is Required Can't Be Empty",
        INVALIDKEY: "Field ( {Field} ) Is Not Allowed This Value Data",
        ALLOWED_DATE_ONLY: "Field ( {Field} )  Must Be Date",
        ALLOWED_ARRAY: "Field ( {Field} )  Must Be Array",
        UserPlan: "One of UserPlan or UserExpiry must be provided, and the other must be null.",
        ALLOWED_STRING: "Field ( {Field} )  Must Be String",
        ARRAY_MIN: "Field ( {Field} ) Can Not Be Less Than {min} Items",
        ARRAY_MAX: "Field ( {Field} ) Can Not Be More Than {max} Items",
        REQUIRED: {
            DataSectionId: "Section Required"
        },
        CUSTOM: {
            Type: MergedCustom.Type,
            UType: MergedCustom.Type
        },
        PATTERN: {}
    },
    ERRORS: {
        // ================ SERVER ERROR ================
        SERVER_ERROR:
            "An Unknown Error Has Occurred If The Problem Is Not Resolved Next Time Please Write To The Moderators, Error code : ",
        // ============== Authrizathion Failed ====================
        ORIGIN_NOT_ALLOWED: "No Allowed Connection",
        IP_NOT_ALLOWED: "No Allowed IP Connection",
        NO_TOKEN: "No Credentials Provided",
        INVALID_TOKEN: "Invalid Credentials Provided Or Expired",
        INVALID_AUTHORIZATION: "Invalid Authrization Provided",
        // ============== NOT FOUND ====================
        Route_NOT_FOUND: "Route Not Found Or May Be Deleted",
        Cmd_NOT_FOUND: "Command Not Found Or May Be Deleted",
        NO_DETAIL_DATA: "No Data Found For This Compound / Project",
        RATE_LIMIT : "You Have Reached The Rate Limit For This Request, Please Try Again At {{Time}}",
        SERVICE_EXPIRED: "Sorry But Your Service Is Expired At {{Time}} Please Contact The Administrator To Renew It",
    }
};
module.exports = Lang;
