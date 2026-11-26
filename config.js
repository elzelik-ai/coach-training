// חיבור ל-Supabase.
// כל עוד השדות ריקים, האתר עובד ב"מצב הדגמה": הפניות והשינויים נשמרים רק בדפדפן הזה.
// אחרי שמחברים פרויקט Supabase, ממלאים כאן את כתובת הפרויקט ואת המפתח הציבורי (publishable / anon).
// המפתח הציבורי מיועד להיות גלוי באתר. אף פעם לא שמים כאן את המפתח הסודי (service_role / secret).
window.SITE_CONFIG = {
  supabaseUrl: 'https://tybldahjoojzbdrhrdvu.supabase.co',
  supabaseKey: 'sb_publishable_E9jo4r1WcTBSTsm20fqcfw_fhXS1Ssp',
  // סקריפט גוגל שמוסיף כל פנייה לגיליון הלידים ושולח מייל התראה
  leadsHook: 'https://script.google.com/macros/s/AKfycbxslksVYmoWxxhUuDxs-yU4QulLVRRK2Snfzxnjrxyb69-O7UEPdx-Boqhcp_mpXZdrrw/exec'
};
