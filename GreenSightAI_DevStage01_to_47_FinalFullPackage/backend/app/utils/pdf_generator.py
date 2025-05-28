from reportlab.pdfgen import canvas
from datetime import datetime

def generate_pdf_report(filename: str = "report.pdf"):
    c = canvas.Canvas(filename)
    c.setFont("Helvetica", 12)
    c.drawString(100, 800, "GreenSight AI 이상 감지 리포트")
    c.drawString(100, 770, "설비 ID: INV_01")
    c.drawString(100, 750, "예측 고장일: 2024-06-06")
    c.drawString(100, 730, "이상 점수: 0.87")
    c.drawString(100, 710, "신뢰도: 92.1%")
    c.drawString(100, 690, f"생성 일시: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
    c.drawString(100, 660, "감사합니다.")
    c.drawString(100, 640, "GreenSight AI 시스템")
    c.save()
