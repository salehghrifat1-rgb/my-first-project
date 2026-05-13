<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ستوديو الإبداع الهندسي الاحترافي</title>
    <style>
        :root {
            --primary: #2563eb;
            --primary-hover: #1d4ed8;
            --bg: #f8fafc;
            --card-bg: #ffffff;
            --text: #1e293b;
        }
        body {
            font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
            background-color: var(--bg);
            color: var(--text);
            margin: 0;
            padding: 40px 20px;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            box-sizing: border-box;
        }
        .app-container {
            background: var(--card-bg);
            max-width: 800px;
            width: 100%;
            padding: 40px;
            border-radius: 24px;
            box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.05);
        }
        header h1 {
            color: var(--primary);
            margin-top: 0;
            font-size: 2rem;
            font-weight: 700;
        }
        header p {
            color: #64748b;
            margin-bottom: 30px;
        }
        .workspace {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 30px;
        }
        @media (max-width: 640px) {
            .workspace { grid-template-columns: 1fr; }
        }
        .panel {
            display: flex;
            flex-direction: column;
            gap: 20px;
        }
        .input-group {
            display: flex;
            flex-direction: column;
            gap: 8px;
        }
        label {
            font-weight: 600;
            font-size: 0.95rem;
            color: #475569;
        }
        input[type="number"] {
            padding: 12px 16px;
            border: 2px solid #e2e8f0;
            border-radius: 12px;
            font-size: 1rem;
            outline: none;
            transition: border-color 0.2s;
        }
        input[type="number"]:focus {
            border-color: var(--primary);
        }
        input[type="color"] {
            -webkit-appearance: none;
            border: none;
            width: 100%;
            height: 45px;
            border-radius: 12px;
            cursor: pointer;
        }
        input[type="color"]::-webkit-color-swatch-wrapper { padding: 0; }
        input[type="color"]::-webkit-color-swatch { border: none; border-radius: 12px; }
        .stats-box {
            background: #f1f5f9;
            padding: 20px;
            border-radius: 16px;
            display: flex;
            flex-direction: column;
            gap: 10px;
        }
        .stat-item {
            display: flex;
            justify-content: space-between;
            font-size: 1.1rem;
            font-weight: 600;
        }
        .stat-item span:last-child {
            color: var(--primary);
        }
        .canvas-area {
            background: #fafafa;
            border: 2px dashed #cbd5e1;
            border-radius: 16px;
            min-height: 300px;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            overflow: hidden;
        }
        #geometryShape {
            width: 150px;
            height: 150px;
            background-color: var(--primary);
            border-radius: 8px;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        }
    </style>
</head>
<body>

    <div class="app-container">
        <header>
            <h1>ستوديو الإبداع الهندسي 📐</h1>
            <p>منصة تفاعلية متطورة لتصميم الأشكال الهندسية وتحليل أبعادها الحجمية والرياضية فوراً.</p>
        </header>

        <div class="workspace">
            <div class="panel">
                <div class="input-group">
                    <label for="widthInput">العرض الهيكلي (بكسل)</label>
                    <input type="number" id="widthInput" value="150" min="40" max="300">
                </div>
                <div class="input-group">
                    <label for="heightInput">الارتفاع الهيكلي (بكسل)</label>
                    <input type="number" id="heightInput" value="150" min="40" max="300">
                </div>
                <div class="input-group">
                    <label for="colorInput">الغطاء اللوني للتصميم</label>
                    <input type="color" id="colorInput" value="#2563eb">
                </div>

                <div class="stats-box">
                    <div class="stat-item">
                        <span>المساحة الإجمالية:</span>
                        <span><span id="areaResult">22,500</span> px²</span>
                    </div>
                </div>
            </div>

            <div class="canvas-area">
                <div id="geometryShape"></div>
            </div>
        </div>
    </div>

    <!-- كود البرمجة المفعل (JavaScript) -->
    <script>
        // اختيار العناصر
        const widthIn = document.getElementById('widthInput');
        const heightIn = document.getElementById('heightInput');
        const colorIn = document.getElementById('colorInput');
        const shape = document.getElementById('geometryShape');
        const result = document.getElementById('areaResult');

        // وظيفة التحديث اللحظي
        function update() {
            const w = parseInt(widthIn.value) || 0;
            const h = parseInt(heightIn.value) || 0;
            const c = colorIn.value;

            // تطبيق التغييرات على الشكل
            shape.style.width = w + 'px';
            shape.style.height = h + 'px';
            shape.style.backgroundColor = c;

            // حساب المساحة وعرضها بتنسيق آلاف (مثل 22,500)
            const area = w * h;
            result.textContent = area.toLocaleString();
        }

        // تفعيل المستشعرات عند الإدخال
        widthIn.addEventListener('input', update);
        heightIn.addEventListener('input', update);
        colorIn.addEventListener('input', update);

        // تشغيل أولي عند تحميل الصفحة
        window.onload = update;
    </script>
</body>
</html>
