const GroupCols = require("./GroupCols");
const MergedCustom = {
    Type: "Invalid Type Provided Please Make Sure The Type Is Correct",
    RequiredValue: "Value Is Required"
};
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
    GroupCols.Detail.map((item) => [item, `${item.replace("Detail", "")} Required`])
);
const Lang = {
    APP_NAME: "Adham Fathallah",
    SUCCESS: {
        SUCCESS: "Success",
        CREATED: "Created",
        UPDATED: "Updated",
        DELETED: "Deleted",
        FORGET: "Plesae Check Your WhatsApp To Complete Next Operation",
        LOGIN: "Welcome Back {ClientName} To {AppName}",
        LOGIN_UPDATE: "Account Updated Successfully Welcome Back {ClientName} To {AppName}",
        VERIFED:
            "Congratulation {ClientName} Your Account Has Been Verified Successfully. Enjoy Free Services ",
        REGISTERED: "Account Registerd Please Check Your WhatsApp",
        NO_CHANGES: "No Changes",
        MESSAGE_SENT: "Successfully Sent Message To {To} "
    },
    MESSAGES: {
        ForgetPasswordMessage: `
      Welcome to {AppName}!
      We have received a request to reset the password for your account. If you did not request a password reset, you can safely ignore this message.
      To reset your password, please use the following verification code:
      Verification Code: {Code}
      Please note that this verification code is valid for only two hours. After that, you will need to request a new code if you still want to reset your password.
      If you need any additional assistance, don’t hesitate to reach out to our support team.
      Have a great day!
      `,
        CreateMessage: `
      Welcome to {AppName}!
      Thank you for joining us.
      We’re excited to have you as part of our community.
      To activate your account, please use the verification code below:
      Verification Code: {Code}
      The verification code will expire after two hours.
      If you have any questions or need assistance, please don’t hesitate to contact our support team.
      We hope you have a fantastic experience with us!
      `,
        ResendVerifyCode: `
      Welcome back to {AppName}!
      A new verification code has been generated upon your request.
      To activate your account, please use the verification code below:
      Verification Code: {Code}
      The verification code will expire after two hours.
      If you have any questions or need assistance, please don’t hesitate to contact our support team.
      We hope you have a great experience with us!
      `,
        LoginSendCode: `
      Welcome back
      to {AppName}.
      Thank you for being part of our community.
      We would like to request that you update your information
      to ensure we provide the best possible service.
      To confirm the updates,
      please use the verification code below:
      Verification Code: {Code}
      If you have any questions or need assistance,
      please don’t hesitate to contact our support team.
      Thank you for your cooperation!
      `
    },
    VALIDATION: {
        NOT_ALLOWED: "Field ( {Field} ) Is Not Allowed",
        REQUIRED_FIELD: "Field ( {Field} ) Is Required And Can't Be Empty",
        INVALIDKEY: "Field ( {Field} ) Is Not Allowed This Value Data",
        ALLOWED_DATE_ONLY: "Field ( {Field} )  Must Be Date",
        ALLOWED_ARRAY: "Field ( {Field} )  Must Be Array",
        ALLOWED_STRING: "Field ( {Field} )  Must Be String",
        ALLOWED_BOOLEAN: "Field ( {Field} )  Must Be Boolean",
        ARRAY_MIN: "Field ( {Field} ) Can Not Be Less Than {min} Items",
        ARRAY_MAX: "Field ( {Field} ) Can Not Be More Than {max} Items",
        REQUIRED: {
            FromId: "From Required",
            ToId: "To Required",
            File: "File Required",
            Data: "Data Required",
            // ================= User =================
            ClientConnection: "Connection Required",
            //  ====== AUTH (Login - Reqister - Forget) ========
            Method: "Phone Number Or Phone Number 2 Required",
            ClientPhoneNumber: "Phone Number Required",
            ClientPhoneNumber2: "Phone Number 2 Required",
            ClientPassword: "Password Required",
            ClientCode: "Code Required",
            Commercial: "Data Required",
            UType: "UType Required",
            // ================= Section =================
            DataSectionId: "Section Required",
            // ================= Blacklist =================
            BlacklistNumber: "Number Required",
            BlacklistIpAdress: "IpAdress Required",
            BlacklistUserId: "User Id Required",
            // ================= Validation By Groups =================
            ClientId: "Id Required",
            ClientName: "Name Required",
            ...DataCols,
            ...DetailCols
        },
        CUSTOM: {
            // ----------------- user -----------------
            ClientPassword:
                "Password must be at least 6 characters An Contain One Number and One Letter",
            ClientVrifyTypes: `Verify Type must be one of ("Online", "Offline")`,
            Type: MergedCustom.Type,
            UType: MergedCustom.Type,
            ClientConnection: MergedCustom.Type
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
                ※ Code : 199404
                ※ Reporter: ${process.env.AGENT}
                ※ From : ${process.env.NODE_ENV}
        `,
        SERVER_IS_DOWN: "Server Is Down",
        WA_EMERGENCY_MSG: "Cant't Send Message Please Contact Admin With This Code : 199405 ",
        // ================ SERVER ERROR ================
        SERVER_ERROR:
            "An Unknown Error Has Occurred If The Problem Is Not Resolved Next Time Please Write To The Moderators, Error code : ",
        //  ============== GLOBAL ERRORS ====================
        CODE_EXPIRED: "Sorry Code Is Expired Please Request New Code",
        INVALID_CODE: "Sorry Code Is Invalid Please Make Sure You Are Using The Correct Code",
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
        // ============== USER ERRORS =================
        PASSWORD_NOT_MATCH_CONFIRM: "Password Not Match Confirm Password Please Try Again",
        PASSWORD_NOT_MATCH_OLD: "Password Not Match Old Password Please Try Again",
        Client_NOT_ACTIVE: "Sorry But Your Account Is Not Active Please Contact The Administrator",
        Client_ALREADY_ACTIVE: "This Account Is Already Active No More Pending Changes Are Allowed",
        Client_EXPIRED: "Sorry But Your Account Is Expired Please Contact The Administrator",
        Client_NOT_RESETABLE: "Sorry But This Account Can't Be Reseted",
        Client_NOT_UPDATABLE:
            "Sorry But This Account Can't Be Updated , If This IS Mistake Please Contact The Administrator",
        NOT_ALLOWED_TO_USE_SERVICE:
            "Sorry But May Be Your Account Can't Use Our Service. Please Contact The Administrator For More Information",
        Client_TRIAL_DAYS_LETH_THAN_ONE:
            "Sorry But You Need To Add At Least One Day In Trial Period",
        INCORRECT_CREADENTIALS: "Incorrect Password or PhoneNumber",
        INCORRECT_OLD_PASSWORD: "Incorrect Old Password",
        INCORRECT_CODE: "Incorrect PhoneNumber or Email",
        ACCOUNT_INACTIVE:
            "Your Account Is Inactive Please Active It First Please Check Your WhatsApp",
        Client_RESEND_LIMIT:
            "Resend Limit Exceeded Please Contact The Administrator To Increase It",
        ACCOUNT_UN_COMPLETED: "Your Account Is Not Completed Please Update Information Below",
        ClientPhoneNumber: "Phone Number Is Already Taken",
        // ============== Authrizathion Failed ====================
        ORIGIN_NOT_ALLOWED: "Not Allowed Connection",
        IP_NOT_ALLOWED: "No Allowed IP",
        NO_TOKEN: "No Credentials Provided ReLogin Required",
        INVALID_TOKEN: "Invalid Credentials Provided ReLogin Required",
        INVALID_API_KEY: "Instance Id Is Required",
        INVALID_SECRET: "Secret Key Is Required",
        INVALID_AUTHORIZATION: "Invalid Authrization Provided",
        // ==================== Data ====================
        NO_DETAIL_DATA: "No Data Found For This Compound/Project",
        FETCH_RETRY: "Retry Fetch Your Data",
        WHATSAPP_ACCOUNT_NOT_EXISTS: `No WhatsApp Account Exists For {SessionKey} Please Make Sure You Are Using The Correct Number`,
    }
};
module.exports = Lang;
