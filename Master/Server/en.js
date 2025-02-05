const GroupCols = require("./GroupCols");
const MergedCustom = {
    Type: "Invalid Type Provided Please Make Sure The Type Is Correct",
    RequiredValue: "Value Is Required"
};
const RequiredWithName = Object.fromEntries(
    GroupCols.RequiredName.map((item) => [item, "Name Is Required"])
);
const RequiredWithId = Object.fromEntries(
    GroupCols.RequiredId.map((item) => [item, "Id Required"])
);
const NotFoundErrors = Object.fromEntries(
    GroupCols.NotFound.map((item) => [`${item}_NOT_FOUND`, `${item} Not Found Or May Be Deleted`])
);
const ExistErrors = Object.fromEntries(
    GroupCols.Exist.map((item) => [`${item}_EXIST`, `${item} Already Exist Plesae Use Another One`])
);
const DataCols = Object.fromEntries(
    GroupCols.DataCols.map((item) => [item, `${item.replace("Data", "")} Required`])
);
const DetailCols = Object.fromEntries(
    GroupCols.DetailCols.map((item) => [item, `${item.replace("Detail", "")} Required`])
);
const ContactCols = Object.fromEntries(
    GroupCols.ContactCols.map((item) => [item, `${item.replace("Contact", "")} Required`])
);
const PhasCols = Object.fromEntries(
    GroupCols.PhasCols.map((item) => [item, `${item.replace("Phas", "")} Required`])
);
const Lang = {
    APP_NAME: "Master",
    SUCCESS: {
        SUCCESS: "Success",
        CREATED: "Created",
        UPDATED: "Updated",
        DELETED: "Deleted",
        FORGET: "Plesae Check Your WhatsApp Or Email To Complete Operation",
        REGISTERED: "Account Registerd Please Send Your Data Via Whatsaap To Active Your Account",
        REGISTERED_TRIAL: "Account Registerd You Have A 2 Days Free Trial",
        REGISTERED_EVENT:
            "Hello dear, your data has been verified \n and your account has been activated Have A Nice Time",
        NO_CHANGES: "No Changes",
        MESSAGE_SENT: "Successfully Sent Location",
        PENDING_SEND_FAILD: "Successfully  Accepted User But Failed To Send Message Reason : ( {Reason} )",
        Logout : "We Requested Force Logout From Admin"
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
            FromId: "From Required",
            ToId: "To Required",
            File: "File Required",
            Data: "Data Required",
            // ================= User =================
            UserDevice: "Device Required",
            UserConnection: "Connection Required",
            //  ====== AUTH (Login - Reqister - Forget) ========
            Method: "UserEmail Or UserCode Required",
            Password: "Password Is Required",
            UserEmail: "Email Required",
            UserPhoneNumber: "Phone Number Required",
            UserPassword: "Password Required",
            UserOldPassword: "Old Password Required",
            UserRoleId: "Role Id Required",
            UserCompanyName: "Company Name Required",
            UserSubUsersCount: "Users Count Required And Must Be Greater Than 0",
            UserPlan: "Plan Required",
            UserSections: "Sections Required",
            UserForgetPasswordCode: "Code Required",
            UserExpiry: "Expiry Date Required",
            UserSupport: "Support Required",
            Residential: "Residential Required",
            Commercial: "Residential Required",
            UType: "UType Required",
            Redirct: "Redirct Required",
            // ================= Messages =================
            SessionKey: "Session Required",
            To: "To Required",
            Message: "Message Required",
            Url: "Url Required",
            Type: "Type Required",
            Filename: "Filename Required",
            FileUrl: "FileUrl Required",
            FileName: "FileName Required",
            // ================= Session  =================
            Webhook: "Webhook Required",
            WebhookUrl: "WebhookUrl Required",
            Base64: "Base64 Required",
            Number: "Number Required",
            // ============================================ FOR ADMIN ============================================
            // ================= Section =================
            DataSectionId: "Section Required",
            // ================= City =================
            CityTypesResidential: " Residential Types Required",
            CityTypesCommercial: " Commercial Types Required",
            // ================= Area =================
            AreaCityId: "City Id Required",
            // ================= Note =================
            NoteValue: "Value Required",
            NoteDate: "Date Required",
            NoteSupport: "Support Required",
            NoteUserId: "User Id Required",
            // ================= Blacklist =================
            BlacklistNumber: "Number Required",
            BlacklistIpAdress: "IpAdress Required",
            BlacklistUserId: "User Id Required",
            PhasCompoundId: "Compound Id Required",
            // ================= PaymentPlan =================
            PaymentPlanPhasId: "Phas Required",
            PaymentPlanValue: MergedCustom.RequiredValue,
            // ================= Compound =================
            DeveloperId: "Developer Id Required",
            // ================= SubType =================
            SubTypeTypeId: "Type Id Required",
            // ================= Validation By Groups =================
            ...RequiredWithId,
            ...RequiredWithName,
            ...DataCols,
            ...DetailCols,
            ...ContactCols,
            ...PhasCols,
        },
        CUSTOM: {
            // ----------------- user -----------------
            UserPassword:
                "Password must be at least 6 characters An Contain One Number and One Letter",
            ClientPassword:
                "Password must be at least 6 characters An Contain One Number and One Letter",
            UserVrifyTypes: `Verify Type must be one of ("Online", "Offline")`,
            Type: MergedCustom.Type,
            UType: MergedCustom.Type,
            UserConnection: MergedCustom.Type,
            SessionKey: "SessionKey Must Be String Or Number And Not Empty",
            DeleteAll: "DeleteAll Must Be Boolean ( true Or false) And Not Empty",
            ImportFile : "There Is No File To Import"
        },
        PATTERN: {}
    },
    ERRORS: {
        // ============== EMERGENCY ERRORS ====================
        EMERGENCY_MSG: `
           🛑 Emergency 
                ※ Server : {Server} 
                ※ Error : {Reason}
                ※ Date : ${new Date().toLocaleString()}
                ※ Reporter: ${process.env.AGENT}
                ※ From : ${process.env.NODE_ENV}
        `,
        // ================ SERVER ERROR ================
        SERVER_ERROR:
            "An Unknown Error Has Occurred If The Problem Is Not Resolved Next Time Please Write To The Moderators, Error code : ",
        CDN_UNAVIALABLE: "Media Is UnAvailable Please Contact The Administrator",
        //  ============== GLOBAL ERRORS ====================
        CODE_EXPIRED: "Sorry Code Is Expired Please Request New Code",
        ALLOWED_ONLY_FOR_ADMIN: "Sorry, This Accion Is Not Allowed For You",
        MISMATCH_PREMISSIONS: "Sorry, You Don't Have Permissions",
        INVALID_DATE: "Invalid Date Provided Or Format Is Not Correct",
        DATE_IS_ALREADY_EXPIRED: "Sorry But  Date Is Already Expired",
        DATE_IS_SAME_AS_TODAY: "Sorry But  Date Is Same As Today",
        NO_CONFIGRE_IMPORT: "There is No Import For That Type For Now",
        LIST_MESSAGE_ALL_EMPTY: "Sorry, There is No Files Or Message To Send",
        // ListMessage
        // ============== NOT FOUND ====================
        ...NotFoundErrors,
        //  ==================== EXIST ==================
        ...ExistErrors,
        BlackList_EXIST : "This User Is Already Exist In BlackList",
        AdminEmail_EXIST: "Email Is Already Taken",
        UserEmail_EXIST: "Email Is Already Taken",
        UserPhoneNumber_EXIST: "Phone Number Is Already Taken",
        ClientPhoneNumber_EXIST: "Phone Number / Phone Number 2 Is Already Taken",
        // ============== USER ERRORS =================
        USER_CITY_EMPTY: "You Must Select Cities For {Section} While You Chosed It",
        User_DEVICE_LIMIT: "Device Limit Exceeded Please Contact The Administrator To Increase It",
        User_NOT_ACTIVE: "Sorry But Your Account Is Not Active Please Contact The Administrator",
        User_ALREADY_ACTIVE:
            "Sorry But This Account Is Already Active No More Pending Changes Are Allowed",
        User_EXPIRED: "Sorry But Your Account Is Expired Please Contact The Administrator",
        User_NOT_RESETABLE: "Sorry But This Account Can't Be Reseted",
        User_NOT_UPDATABLE:
            "Sorry But This Account Can't Be Updated , If This IS Mistake Please Contact The Administrator",
        User_TRIAL_DAYS_LETH_THAN_ONE: "Sorry But You Need To Add At Least One Day In Trial Period",
        INCORRECT_PASSWORD: "Incorrect Password or Phone Number",
        INCORRECT_OLD_PASSWORD: "Incorrect Old Password",
        INCORRECT_CODE: "Incorrect PhoneNumber or Email",
        UserPhoneNumber: "Phone Number Is Already Taken",
        // ============== Authrizathion Failed ====================
        ORIGIN_NOT_ALLOWED: "No Allowed Connection",
        IP_NOT_ALLOWED: "No Allowed IP",
        NO_TOKEN: "No Credentials Provided ReLogin Required",
        INVALID_TOKEN: "Invalid Credentials Provided ReLogin Required",
        INVALID_AUTHORIZATION: "Invalid Authrization Provided",
        // ================ WHATSAPP CONNECTION ================
        NOT_CONNECTED: "No Session Connected",
        NO_CONNECTION: "No Connection Found For {key} Please Make Sure You Are Connected",
        WHATSAPP_ACCOUNT_NOT_EXISTS: `No WhatsApp Account Exists For {SessionKey} Please Make Sure You Are Using The Correct Number`,
        WHATSAPP_ADMIN_NOT_EXISTS: `No WhatsApp Admin Exists For {SessionKey} Please Make Sure You Are Using The Correct Number`,
        ALREADY_CONNECTED: "Session Already Connected",
        Session_NOT_CONNECTED: "Please Connect Session Via Scan QrCode",
        FAILD_SEND: "Failed To Send The Message",
        INVALID_ACTION: "Sorry, This Accion Is Not Allowed",
        BALCKLIST_MISSING_FIELDS : "There is not enough data to add/update to the blacklist.",
        RATE_LIMIT : "You Have Reached The Rate Limit For This Request, Please Try Again At {{Time}}",
        PERMISSION_UPDATE_FAILED : "Failed To Update Permissions Dua : {Reason}",
    }
};
module.exports = Lang;
