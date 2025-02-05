const CompanyName = "AF Property";
const Sidebar = {
    LABEL: "Filter By",
    SORTING: "Sorting",
    CITY_SCAPE_SORTING: "Sorting By CityScape",
    SLUG_BUTTON: "Details",
    TITLE: {
        CITY: "Cities",
        SUB_TYPES: "Types",
        DEVELOPER: "Developer",
        COMPOUND: "Compound",
        PROJECT: "Project",
        THE_COMPOUND: "Compound",
        THE_PROJECT: "Project",
        BEDROOMS: "Bedrooms",
        FINISHING: "Finishing",
        INSTALLMENT_YEARS: "Installment years",
        DELIVERY: "Delivery",
        DOWN_PAYMENT: "Down Payment",
        UNIT_TOTAL_PRICE: "Budget Price",
        BUILT_UP_AREA: "Built up area",
        CONTACT_WITH_TEAM_1: "Adham Fathallah's Team",
        CONTACT_WITH_TEAM: "Contact With \n Adham Fathallah's Team",
        CONTACT_WITH_DEVELOPER: "Contact With \n {Developr}",
        LAYOUTS_BUTTON: "Layout",
        MIN_PRICE: "Start Price",
        ExtraBenefits: "Extra Benefits",
        Consultants: "Consultants",
        Engineering: "Engineering",
        Executive: "Executive",
        Management: "Management",
        Architecture: "Architecture"
    },
    WORDS: {
        DELIVERY: "Years",
        YEARS: "Years",
        DELIVERY_TITLE: " / Delivery {Delivery}",
        RESIDENCE_DATE: "Delivery start date is {ResidenceDate}",
        ACR: "Acres",
        PAYMENT_PLAN: "Payment Plan",
        DELIVERY_OPTION: "R T M",
        BOOKING_OPEN: "تم فتح باب الحجز بالمشروع",
        // Comp_Display_Words
        TYPE: "Type",
        START_PRICE: "Start Price",
        BUILT_UP_AREA: "M",
        BEDROOMS: "Bedrooms",
        UNIT_TOTAL_PRICE: "Total Price"
    },
    OPTIONS: {
        FINISHING: {
            0: "Not finished",
            1: "Fully finished"
        }
    }
};
const Lang = {
    APP_NAME: "Adham Fathallah",
    CANCEL: "Cancel",
    CLOSE: "Close",
    ACCEPT: "Accept",
    UPDATE: "Update",
    SEARCH: "Search",
    RESET: "Clear",
    SKIP: "Skip",
    NEXT: "Next",
    BACK: "Back",
    LOGOUT: "Logout",
    LOADING: "Please wait...",
    FROM: "From",
    TO: "To",
    SIDEBAR: Sidebar,
    DATE: {
        YESTERDAY: "Yesterday",
        TODAY: "Today"
    },
    TERMS: {
        TOP_TITLE: "Terms of Use / Privacy Policy",
        TOP_DESC: `Welcome to ${CompanyName}’s website. By using this website, you agree to comply with the following terms and conditions. Please read them carefully before using the website or benefiting from any of our services.`,
        TERMS_TITLE: "Terms of Use",
        PRIVACY_TITLE: "Privacy Policy",
        CONTACT_TITLE: "Contact Us",
        PRIVACY: [
            {
                Id: 1,
                Label: "Intellectual Property",
                Content: `
          - The services are owned by ${CompanyName}. \n
          - You may not use any of ${CompanyName}’s trademarks as part of your screen name or email address on the services. \n
          - ${CompanyName} does not claim copyright or grant any rights to images or basic descriptions of real estate listings provided through the services. \n
          - Any use of these images and descriptions is subject to the copyright owner’s permission and/or applicable law requirements.
          `
            },
            {
                Id: 2,
                Label: "Limitation of Liability",
                Content: `
          - Under no circumstances will ${CompanyName} or any of its providers be liable for any damages, including, but not limited to, indirect, consequential, special, incidental, or punitive damages arising from or based on these terms of use or the services, even if such damages were foreseeable. \n
          - The exclusion of damages under this paragraph is separate from your exclusive remedy detailed below and remains in effect even if this remedy fails its essential purpose or is deemed unenforceable.\n
          - These limitations and exclusions apply regardless of whether the damages arise from (a) breach of contract, (b) breach of warranty, (c) negligence, or (d) any other cause, to the extent not prohibited by applicable law. \n
          - If you disagree with any part of these terms of use, or if you have any dispute or claim against ${CompanyName} or its providers related to these terms or services, your sole and exclusive remedy is to stop using the service.
          `
            },
            {
                Id: 3,
                Label: "Changes; Discontinuation",
                Content: `
          - ${CompanyName} reserves the right to modify these terms of use at any time at its sole discretion. \n
          - Any changes will become effective upon posting the modified version of the terms on ${CompanyName}'s website. \n
          - Your continued use of the services after these changes take effect will be considered acceptance of the modified terms. \n
          - You waive any right you may have to receive specific notice of changes to these terms. \n
          - You are responsible for regularly reviewing these terms of use. ${CompanyName} may modify, suspend, or discontinue the services at any time for you and/or others, without notice.
          `
            },
            {
                Id: 4,
                Label: "Governing Law; Disputes",
                Content: `
              - These terms of use are governed by the laws of the Arab Republic of Egypt, without regard to conflict of law principles.\n
              - You agree to submit to the exclusive jurisdiction of the courts located in Cairo, Egypt, for any disputes or claims arising from or related to the services and/or these terms.\n
              - In any dispute arising under this agreement, the prevailing party is entitled to attorneys’ fees and costs.
          `
            },
            {
                Id: 5,
                Label: "Disclaimer",
                Content: `
              - ${CompanyName} and its affiliates, directors, officers, employees, and agents disclaim all liability for any claims or demands you may make against any third party arising from the services.
          `
            },
            {
                Id: 6,
                Label: "General Provisions",
                Content: `
              - You agree not to export any part of the services provided to you or any direct product thereof from any location except in accordance with all required licenses and approvals under applicable export control laws and regulations.
          `
            }
        ],
        CONDITIONS: [
            {
                Id: 1,
                Label: "Acceptance of Terms",
                Content: `
              - By accessing and using ${CompanyName}'s website, you agree to fully comply with all the terms and conditions listed below.\n
              - If you disagree with any part of these terms, please cease using the website immediately.
          `
            },
            {
                Id: 2,
                Label: "Description of Services",
                Content: `
          ${CompanyName} is a website specializing in real estate marketing. This includes listing properties for sale and providing information on property offers for buyers and investors.\n
          We act as an intermediary between parties involved in real estate transactions and are not directly responsible for any transactions conducted outside of our services.
          `
            },
            {
                Id: 3,
                Label: "Permitted Use",
                Content: `
          - You are allowed to use ${CompanyName}'s website for personal and non-commercial purposes only.\n
          - You may not copy, distribute, or modify any content from the website without the express written permission of ${CompanyName}.\n
          - You must use the website in a lawful and ethical manner and not for any unlawful, fraudulent, or harmful activity to others.\n
          - It is prohibited to use the website to post any inappropriate or misleading content.
          `
            },
            {
                Id: 4,
                Label: "Registration and Accounts",
                Content: `
              - Some services on the website may require you to create an account. You must provide accurate and complete information during registration.\n
              - You are responsible for maintaining the confidentiality of your account information and password. Any unauthorized use of your account is your responsibility.\n
              - Persons under 18 are not permitted to create an account or use the website unless they have legal consent from their guardian.
          `
            },
            {
                Id: 5,
                Label: "User-Submitted Content",
                Content: `
          - By submitting any content to the website, including comments, reviews, images, or real estate data, you grant ${CompanyName} a perpetual and irrevocable right to use and distribute this content for any commercial or marketing purpose.\n
          - Any content you provide must be accurate and free of any illegal materials, including intellectual property violations.
          `
            },
            {
                Id: 6,
                Label: "Intellectual Property Rights",
                Content: `
          - All intellectual property rights related to the website, including texts, images, logos, and designs, are exclusively owned by ${CompanyName} or are licensed from third parties. Reusing these materials without prior permission is prohibited.\n
          - Using the website does not grant you any rights or ownership in the content, trademarks, or other materials associated with the website.
          `
            },
            {
                Id: 7,
                Label: "Disclaimer",
                Content: `
          - All information and content provided on the website are for informational purposes only and do not constitute financial or legal advice.\n
          - ${CompanyName} is not responsible for any real estate transactions conducted between users outside the website or without its direct supervision.\n
          - ${CompanyName} assumes no responsibility for damages arising from the use of the website, whether direct or indirect.
          `
            },
            {
                Id: 8,
                Label: "External Links",
                Content: `
          - ${CompanyName} may contain links to external websites. We are not responsible for the content or privacy policies of these sites.\n
          - Your use of these links is at your own risk, and you should review the terms and conditions of those websites before using them.
          `
            },
            {
                Id: 9,
                Label: "Amendments to Terms and Conditions",
                Content: `
          - ${CompanyName} reserves the right to amend these terms and conditions at any time without prior notice.\n
          - Users will be notified of any material changes by posting the modified version on the website.\n
          - Your continued use of the website after any amendments constitutes acceptance of the new terms.
          `
            },
            {
                Id: 10,
                Label: "Privacy",
                Content: `
          - We are committed to protecting user privacy. Personal data is collected only when necessary, in accordance with our privacy policy.\n
          - For more details on how we use and protect your personal data, please review our privacy policy.
          `
            },
            {
                Id: 11,
                Label: "Legal Liability",
                Content: `
          - ${CompanyName} reserves the right to suspend or terminate any user’s account if any of the terms and conditions are found to be breached.\n
          - ${CompanyName} assumes no liability for any disputes or issues resulting from financial or real estate transactions between parties.
          `
            },
            {
                Id: 12,
                Label: "Applicable Law",
                Content: `
              These terms and conditions are governed by the laws of the Arab Republic of Egypt.\n
              Any disputes arising from the use of the website or these terms and conditions will be resolved before Egyptian courts.
          `
            }
        ],
        CONTACT: [
            {
                Id: 1,
                Label: "",
                Content: `
          For any inquiries regarding these terms and conditions, you may contact us via:
          - Email: info@afproperty.com
          - Phone: [+20 𝟎𝟏𝟎𝟏𝟏𝟓𝟖𝟒𝟏𝟎𝟓 ]\n
          We are available to answer any of your questions or concerns.
          `
            }
        ],
        BUTTONS: [
            {
                Label: "Contact Us",
                To: "#term-contact"
            },
            {
                Label: "Privacy Policy",
                To: "#privacy-policy"
            },
            {
                Label: "Terms and Conditions",
                To: "#terms-and-conditions"
            }
        ]
    },
    ROOT_PAGE: {
        HERO: {
            START_BUTTON: "Get Started",
            LOGIN_BUTTON: "Login",
            CURVE_TEXT: "Get More Data"
        },
        ARTICALES: [
            {
                image: "/images/Home/1.png",
                title: "The secret of the{,}strength of dealing {,} with us.",
                description:
                    "For more than 14 years of experience in the real estate market, the connections, ties and relationships with the heads of departments of real estate development companies in the Egyptian market have increased, which allows us to deal with them in a smooth and simple way and use these relationships to achieve the greatest benefit for our customers who trust us in purchasing their new homes and pioneering investments. Adham Fathallah and his team work.  With great experience in respecting the rules of the relationship between its clients based on mutual interests while guaranteeing all their rights."
            },
            {
                image: "/images/Home/2.png",
                title: "one team",
                description:
                    "We always work to create distinguished cadres whose opinions and real estate consultations are reliable under the management and supervision of their president. With the increase in the percentage of our customers who trust us, it was necessary to develop and increase the number of employees in parallel with increasing the number of our customers for quick response and obtaining the best real purchasing experience. We also hope that you will be one of our customers and investors and we will guarantee  May your real estate holdings and investments succeed with us."
            },
            {
                image: "/images/Home/3.png",
                title: "Specialists and pioneers.",
                description:
                    "We always strive for innovation and development in our real estate field, and this is what made us specialize in studying real estate on a permanent basis and monitoring the events of the real estate market in particular and the economy in general, which makes us seize the best real estate opportunities available in that period. Our specialty. This is the secret of our strength, and we still have what we offer to our clients, and their success is part of our success.  This is the secret of their loyalty to us and their continuity with us."
            },
            {
                image: "/images/Home/4.png",
                title: "Our customer service.",
                description:
                    "With our team, we do not sell real estate to our clients. We buy them their homes as they wish for them and as they love them. We will be with you step by step until you get your new home in a completely safe and secure manner. We will be with you from A to Z."
            },
            {
                image: "/images/Home/5.png",
                title: "Super Support.",
                description:
                    "Adham Fathallah’s team consists of different departments that help each other achieve its goals and reach the highest possible efficiency and strength. Each department has its own specialty and study, which with its statistics helps us improve our important decisions for our customers. All Adham Fathallah’s departments work to achieve one goal, which is to satisfy you only."
            }
        ]
    },
    AUTH_PAGE: {
        TITLE: {
            Login: "Login",
            Register: "Register",
            Forget: "Forget Password",
            Reset: "Reset Password",
            Verify: "Account Verification",
            OTP_1: "The Code Sended To Whatsapp",
            OTP_2: "Whatsapp Number : {{NUMBER}}"
        },
        MESSAGES: {
            MISMATCH_PASS: "You Need To Add Password To Your Account",
            TERMS: "By Registering, You Agree To Our",
            OTP: "Checking Code Please  Wait "
        },
        ASK: {
            FORGET: " Foreget Password ?",
            FORGET_PASS: "Do You Want To Reset Your Password ?"
        },
        BUTTONS: {
            LOGIN: "Login",
            REGISTER: "Register",
            FORGET: " Forget Password",
            RESEND: "Resend Code",
            SEND_CODE: "Send Code",
            NEW_ACCOUNT: "New User ?",
            HAVE_ACCOUNT: "Have Account?",
            HAVE_CODE: "Have Code ?",
            HAVENT_CODE: "Haven't Code ?",
            TERMS: "Terms of use / Privacy Policy"
        },
        ClientName: "Username",
        ClientPhoneNumber: "Whats App",
        ClientPhoneNumber2: "Phone",
        ClientPassword: "Password",
        ConfirmPassword: "Confirm Password"
    },
    CITIES_PAGE: {
        BEDROOMS_1: "Bedrooms",
        BEDROOMS_2: `Please Select ${Sidebar.TITLE.BEDROOMS} First`,
        BEDROOMS_3: "How many rooms are you looking for? You can select more than one option",
        SUB_TYPES: "What type and shape of housing unit are you looking for?",
        CHOSED: "You Chosed"
    },
    DATA_PAGE: {
        LAST_UPDATE: "Last Update",
        DATA_COUNT:
            "There are ( {{count}} ) projects that contain your request.\n Discover them now.",
        LE: "LE",
        STATUS_DATA: {
            1: "Available",
            2: "Launching",
            3: "Available", // Custom
            4: "Launching" // custom
        },
        STATUS_MESSAGES: {
            3: "Theres no details for available units at the moment - For any request please contact the Developer",
            4: "The project is in the launching now \n for available details please contact us or the developer.",
        },
        EXTRA_BENFITS: {
            1: "Mandatory Rent",
            2: "Rent Authorization",
            3: "Advance Yield",
            4: "Installment Yield"
        },

    },
    DETAIL_PAGE: {
        Brochure: "Brochure",
        Contract: "Contract",
        MasterPlan: "Master Plan",
        Photos: "Photos",
        CONTACT: "Contact {{Name}}",
        PHONE_CHANGE_ASK: "If You Need Update Your Number \n Please Contact Us",
        YOUR_PHONE: "Your Phone : {Phone}"
    },
    SETTINGS_PAGE: {
        TABS: {
            Profile: "Profile",
            Status: "Status"
        },
        STATUS: {
            STATUS: "Connection Status :",
            true: "Online",
            false: "Offline"
        }
    },
    ERRORS: {
        TRY_AGAIN: "Please Try Again",
        NOT_ALLOWED_POPUP:
            "The Pop-Up Has Been Blocked Or Your Redirection To The Link Failed, If You Are Using Any Extension To Prevent Page Redirection, Please Disable It For This Site",
        SERVER_ERROR: "Internal Server Error",
        NAME_REQUIRED: "Name Is Required",
        NAME_IS_SHORT: "Name Is Too Short",
        INVALID_USER_NAME: "Invalid User Name Please Type A Valid User Name",
        PASS_NOT_MATCH_CONDITION: "Password Not Match Condition",
        NUMBER_IS_NOT_VALID: "Number Length Is Not Valid Please Type Valid Number",
        PASSWORD_REQUIRED: "Password Is required",
        PASSWORD_LENGTH: "Password Must Be More Than Or Equel 6 Charachters",
        PASSWORD_INVALID: "Password Must Be Numbers And Letters",
        OLD_PASSWORD_REQUIRED: "Old Password Is Required",
        PASSWORD_NOT_MATCH_CONFIRM: "Password Doesn't Match Confirm Password",
        INVALID_DETAIL_URL: "Invalid Url Redirect To Data Page",
        NO_IMAGE_FOUND: "No Image Founded",
        NO_DATA_FOUND: "No Data Founded",
        NO_MATRIALS: "No Files Founded",
        CDN_UNAVILABLE: "Viewing File Is Unavailable Please Contact Admin With Code : 199404",
        NO_OPTIONS: "No Options Founded",
        ALLOWED_NUMBERS_ONLY: "Please Type Numbers Only",
        FETCH_RETRY_ERROR: "Failed To Fetch Your Data"
    },
    PLACEHOLDER: {
        SELECT: "Select ..."
    },
    LABEL: {
        INFO: "Information",
        SUCCESS: "Success",
        WARN: "Warning",
        ERROR: "Error",
        OTP: "Please Enter Code",
        PHONE_INPUT:
            "No More Characters Left Please Make Sure Your Number Is Correct Example : {{ExNum}}",
        SELECTED: "{Count} Selected",
        Residential: "Residential",
        Commercial: "Commercial"
    },
    ROUTES: {
        Data: "Data",
        Detail: "Detail",
        Home: "Home",
        Cities: "Cities",
        Settings: "Settings",
        Terms: "Terms & Conditions - Privacy Policy"
    }
};
export default Lang;
