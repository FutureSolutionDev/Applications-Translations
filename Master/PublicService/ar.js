const MergedCustom = {
    Type: "نوع غير متوفر الرجاء التاكد من النوع",
    RequiredValue: "القيمة مطلوبة"
};
const Lang = {
    APP_NAME: "Master",
    SUCCESS: {
        SUCCESS: "عملية ناجحة"
    },
    VALIDATION: {
        NOT_ALLOWED: "الحقل ( {Field} ) غير مسموح به",
        REQUIRED_FIELD: "الحقل ( {Field} ) مطلوب ولا يمكن أن يكون فارغًا",
        INVALIDKEY: "الحقل ( {Field} ) يحتوي على قيمة غير مسموح بها",
        ALLOWED_DATE_ONLY: "الحقل ( {Field} ) يجب أن يكون تاريخًا",
        ALLOWED_ARRAY: "الحقل ( {Field} ) يجب أن يكون مصفوفة",
        ALLOWED_STRING: "الحقل ( {Field} ) يجب أن يكون نصًا",
        ARRAY_MIN: "الحقل ( {Field} ) لا يمكن أن يحتوي على أقل من {min} عنصر",
        ARRAY_MAX: "الحقل ( {Field} ) لا يمكن أن يحتوي على أكثر من {max} عنصر",
        REQUIRED: {
            DataSectionId: "القسم مطلوب"
        },
        CUSTOM: {
            Type: MergedCustom.Type,
            UType: MergedCustom.Type
        }
    },
    ERRORS: {
        // ================ SERVER ERROR ================
        SERVER_ERROR:
            "حدث خطأ غير معروف، إذا لم يتم حل المشكلة في المرة القادمة يرجى الكتابة إلى المشرفين، كود الخطأ: ",
        // ============== Authorization Failed ====================
        ORIGIN_NOT_ALLOWED: "الاتصال غير مسموح به",
        IP_NOT_ALLOWED: "عنوان اي بي غير مسموح به",
        NO_TOKEN: "لا يوجد بينات اعتماد",
        INVALID_TOKEN: "بينات الاعتماد غير صالحة او منتهية الصلاحيه ",
        INVALID_AUTHORIZATION: "تم تقديم تفويض غير صالح",
        // ============== NOT FOUND ====================
        Route_NOT_FOUND: " نأسف الرابط المطلوب غير موجود او ربما تم حذفه",
        Cmd_NOT_FOUND: " الامر المطلوب غير موجود او ربما تم حذفه",
        NO_DETAIL_DATA: "لا يوجد بينات لهذا المجمع / المشروع",
        RATE_LIMIT : "لقد تجاوزت الحد الاقصى للطلبات لهذا الطلب، يرجى المحاولة في {{Time}}",
        SERVICE_EXPIRED: "نأسف ولكن انتهت صلاحية الخدمة الخاصة بك في {{Time}} يرجى الاتصال بالمسؤول لتجديدها",
    }
};
module.exports = Lang;
