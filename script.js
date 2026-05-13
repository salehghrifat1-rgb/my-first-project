// 1. ربط العناصر من ملف HTML بمتغيرات في البرمجة
const widthInput  = document.getElementById('widthInput');
const heightInput = document.getElementById('heightInput');
const colorInput  = document.getElementById('colorInput');
const shape       = document.getElementById('geometryShape');
const areaResult  = document.getElementById('areaResult');

/**
 * 2. دالة التحديث: 
 * تقوم بقراءة القيم الجديدة، تطبيقها على الشكل، وحساب المساحة.
 */
function updateShape() {
    // الحصول على القيم الحالية من المدخلات
    const currentWidth  = widthInput.value;
    const currentHeight = heightInput.value;
    const currentColor  = colorInput.value;

    // تطبيق القيم على الشكل الهندسي (Visual Update)
    shape.style.width           = currentWidth + 'px';
    shape.style.height          = currentHeight + 'px';
    shape.style.backgroundColor = currentColor;

    // حساب المساحة (العملية الرياضية)
    const area = currentWidth * currentHeight;

    // عرض النتيجة في الصفحة مع إضافة فواصل آلاف لجعلها احترافية
    areaResult.textContent = area.toLocaleString();
}

// 3. إضافة "مراقب أحداث" (EventListeners) 
// لكي يعمل الكود فوراً عند تغيير أي قيمة دون الحاجة لضغط أزرار
widthInput.addEventListener('input', updateShape);
heightInput.addEventListener('input', updateShape);
colorInput.addEventListener('input', updateShape);

// 4. تشغيل الدالة مرة واحدة عند فتح الصفحة لتحديث القيم الافتراضية
updateShape();
