module.exports = {
    APP_NAME: "ماستر",
    SUCCESS: {
        SUCCESS: "عملية ناجحة",
        FILES: "تم ارسال الملفات بنجاح",
        FILE : "تم ارسال الملف بنجاح",
    },
    VALIDATION: {
        NOT_ALLOWED: "الحقل ( {Field} ) غير مسموح به",
        REQUIRED_FIELD: "الحقل ( {Field} ) مطلوب ولا يمكن أن يكون فارغًا",
        ALLOWED_ARRAY: "يجب أن يكون الحقل ( {Field} ) مصفوفة",
        INVALIDKEY: "غير مسموح بهذه القيمة في الحقل ( {Field} )",
        ALLOWED_DATE_ONLY: "الحقل ( {Field} ) يجب أن يكون تاريخًا",
        ALLOWED_STRING: "يجب أن يكون الحقل ( {Field} ) نص",
        ARRAY_MIN: "لا يمكن أن يكون الحقل ( {Field} ) أقل من {min} عنصر",
        REQUIRED: {},
        CUSTOM: {
            Type : "نوع المطلوب غير مصرح به",
        },
        PATTERN: {},
    },
    ERRORS: {
        // ================ SERVER ERROR ================
        SERVER_ERROR: "خطأ في الخادم الداخلي",
        // ============== Authrizathion Failed ====================
        ORIGIN_NOT_ALLOWED: "اتصال غير مصرح به",
        // ================ WHATSAPP CONNECTION ================
        Route_NOT_FOUND: "لم يتم العثور على المسار أو ربما تم حذفه أو قد تم تغييره",
        File_NOT_FOUND: "لم يتم العثور على الملف أو قد يكون محذوفًا",
        List_NOT_FOUND: " {Compound} نأسف ولكننا لم نعثر على بيانات لـ ",
        Session_NOT_FOUND : "لم يتم العثور على اتصال لـ {key} يرجى التأكد من اتصالك",
        WHATSAPP_ACCOUNT_NOT_EXISTS: `لا يوجد حساب واتساب موجود لـ {SessionKey} يرجى التأكد من استخدام الرقم الصحيح`,
        FAIL_TO_CREATE_NOTIFICATION_FILE : "فشل في تحميل ملف الاشعار",
    },
};
